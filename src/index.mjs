// index.mjs
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

async function getImageUrlFull() {
  const imageUrl = 'https://raw.githubusercontent.com/Sstudios-Dev/image-core/main/src/img/';
  const randomNumber = Math.floor(Math.random() * 36) + 1;
  const imageName = `img-core${randomNumber}.jpg`;
  return { imageUrlFull: `${imageUrl}${imageName}?raw=true`, imageName };
}

async function downloadRandomImage() {
  const { imageUrlFull, imageName } = await getImageUrlFull();
  const directory = './images';

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  const response = await fetch(imageUrlFull);
  const buffer = await response.buffer();
  
  fs.writeFileSync(path.join(directory, imageName), buffer);
  console.log(`Image ${imageName} downloaded`);
}

export { getImageUrlFull, downloadRandomImage };
