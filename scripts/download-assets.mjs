import fs from 'fs';
import path from 'path';
import http from 'http';

const URL_REGEX = /\/assets\/([a-f0-9]{40}\.(png|svg|jpg|jpeg|gif))/g;
const SRC_DIR = './src';
const ASSETS_DIR = './public/assets';

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

function fetchFile(url, dest) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let data = [];
      response.on('data', chunk => data.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(data);
        if (buffer.length < 50) {
          const text = buffer.toString('utf8');
          if (text.includes("Error")) {
            return reject(new Error(`Server returned error for ${url}: ${text}`));
          }
        }
        fs.writeFileSync(dest, buffer);
        resolve();
      });
    }).on('error', reject);
  });
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else if (fullPath.match(/\.(tsx|ts|js|jsx)$/)) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const matches = [...content.matchAll(URL_REGEX)];
      
      for (const match of matches) {
        const filename = match[1];
        const dest = path.join(ASSETS_DIR, filename);
        const url = `http://localhost:3845/assets/${filename}`;
        
        if (!fs.existsSync(dest) || fs.statSync(dest).size < 50) {
          console.log(`Downloading ${filename}...`);
          try {
            await fetchFile(url, dest);
            console.log(`Successfully saved ${filename}`);
          } catch (e) {
            console.error(`Failed to download ${url}: ${e.message}`);
          }
        }
      }
    }
  }
}

async function main() {
  await processDirectory(SRC_DIR);
  console.log('Done!');
}

main();
