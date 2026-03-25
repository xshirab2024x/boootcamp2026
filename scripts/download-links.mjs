import fs from 'fs';
import path from 'path';

const ASSETS_DIR = './public/assets';
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// All original local Figma hashes restored from my previous tool calls
const HASHES = [
  "2b416493f83104532c6f5fc9e255c8611daf1bc2.png", "d081d923157d63170932aafcaf0ef6b7ba27054d.png",
  "60e2dddf2d07a928e2d9981844eebaea15183bb2.png", "072bebb302f91899fa4249922b7d1853e3cd1eeb.png",
  "be6ca16ad77d2068722bcccf9fbdc1b4eeed9f35.png", "580877e26877c1154e6f88f13e869ec1cd874675.png",
  "eebf164f6cc784a5b9634224e6f3d125276c1c55.png", "46c8aa60fc27c7fcc7419456cf43a559ab8824f7.png",
  "196e522a86c614d63cc0daa945bef452a09a34f5.png", "06d9ce42dbef7da9d64ab4cd4468dd818454365e.png",
  "4ee454bfd40cdbb7af7f32cf1df71cd644e6b160.png", "01ac706b00c432007abc100ec77d754eb4278135.png",
  "d43929e520ffd08b419209c86fa35e4f0fa75b5f.png", "415de4b9c5607cb7e745eb816b5e7a2aa0250cf7.png",
  "d8cf63b956cbc9dcdbd3af4c24b7006ed6ac1c32.png", "040c09af2f0c6afac830570ff2fee1ed3d30caa3.png",
  "45a6a965f4bce5153eccd02232a63202788cf6c4.png", "5959128f4eb12e1c784ca1a0bbee4f668dfc2a6d.png",
  "708eebaaa8ac19f6a8f0b0722b8cc25a08a58c05.png", "43c765cd55d4877a7a62396581d76fd8ff3cc605.png",
  "efddaeab339e14193c9d911952598cc0514dc469.png", "4cadc638deea65e85e997e21ea1f145fc7c824ae.png",
  "3d4b1282f08fc58cde35f14d5ff25a18fb7ce8e7.svg", "d3fa9ceb0bbabb0c9575bef7992a52025323298b.svg",
  "4b33c8fc4d05cd61280237b3906fd45dc3382dca.svg", "dbd59a3b9afc7a56f43e9a97909def1a95f8bbac.svg",
  "10623ddc70534dc2732b73c0061d91d4968bc035.svg", "22d77bf3346fc095ba352e22ef42f263ac18d6ad.png",
  "8dfb8aa898922f8630396bf5887d9f4f6f5784bc.png", "2c05213503b786a6dcbfee01b79198c9624e248b.svg",
  "cd485e772b0b719034a0ed4eacf070e5d0f1c921.svg", "a62ac256e56489ea9da80e95e84d3353f2a2f8fa.png",
  "2eaf0a9aeb9da47464a1ebdcaca560b5c66bb557.png", "96771f55717a31a2c3452f86fbc132337daf57c3.png",
  "eafe45985e90291c482449452c61ad41e743a3bd.png", "11f6963e4d111943d35b8a1a44daf9f7df067f4d.png",
  "d0fa2a416138345ba0b7da4b0c9099119f5a1468.png", "d302117956a7a776bbfb958789fa429fdacfd024.png",
  "f792e45d33ae744561ecf2c1c96af3223dfa72f0.png"
];

// Add unique values
const UNIQUE_HASHES = [...new Set(HASHES)];

async function download() {
  for (const filename of UNIQUE_HASHES) {
    const url = `http://localhost:3845/assets/${filename}`;
    const dest = path.join(ASSETS_DIR, filename);

    // Skip if valid size already exists
    if (fs.existsSync(dest) && fs.statSync(dest).size > 50) {
      console.log(`Already exists: ${filename}`);
      continue;
    }

    console.log(`Downloading ${filename}...`);
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`HTTP ${resp.status}`);
      }
      const buffer = Buffer.from(await resp.arrayBuffer());
      if (buffer.length < 50 && buffer.toString().includes("Error")) {
        throw new Error(`Server returned error buffer: ${buffer.toString()}`);
      }
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${filename} (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Failed: ${filename} - ${e.message}`);
    }
    
    // 100ms delay to prevent crashing the local Dev Server plugin
    await new Promise(r => setTimeout(r, 100));
  }
}

download().then(() => console.log('All downloads completed.'));
