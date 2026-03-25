import fs from 'fs';

const text = fs.readFileSync('/Users/Barish/.gemini/antigravity/brain/7b5e8c0e-5e82-45bf-9429-196d7837b396/.system_generated/steps/112/output.txt', 'utf-8');

// 1. Extract variables mapping: imgMtr59448 -> hash
const varRegex = /const ([a-zA-Z0-9]+) = "http:\/\/localhost:3845\/assets\/([^"]+)";/g;
const varToHash = {};
let match;
while ((match = varRegex.exec(text)) !== null) {
  varToHash[match[1]] = match[2];
}

// 2. Extract speaker cards
// A speaker card usually has an img src and a name.
// Since the file is JSX, we can search for the Data Cueva sequence.
const cards = text.split('data-name="card"');
cards.shift(); // remove first part before first card

const speakers = [];

cards.forEach(card => {
  // Find img src
  const srcMatch = card.match(/<img[^>]*src=\{([a-zA-Z0-9]+)\}/);
  if (!srcMatch) return;
  const varName = srcMatch[1];
  const hash = varToHash[varName];

  // Find name
  // It looks like <p...>Name</p>
  const nameMatch = card.match(/<p[^>]*>([^<]+)<\/p>/);
  if (!nameMatch) return;
  let name = nameMatch[1].trim();
  
  if (name && hash) {
    speakers.push({ name, hash });
  }
});

console.log(JSON.stringify(speakers, null, 2));
