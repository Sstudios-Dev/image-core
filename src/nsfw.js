const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function getRandomNsfwImageUrl() {
  const NsfwImageUrl = 'https://raw.githubusercontent.com/Sstudios-Dev/image-core/main/src/img-nsfw/';
  const randomNumber = Math.floor(Math.random() * 2) + 1; // Assuming there are 1000 images
  const imageName = `img-nsfw${randomNumber}.jpg`;
  return { NsfwImageUrlFull: `${NsfwImageUrl}${imageName}?raw=true`, imageName };
}

async function downloadRandomNsfwImage() {
  const { NsfwImageUrlFull, imageName } = await getRandomNsfwImageUrl();
  const directory = './Nsfw-images';

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  try {
    const response = await axios.get(NsfwImageUrlFull, { responseType: 'arraybuffer' });
    fs.writeFileSync(path.join(directory, imageName), Buffer.from(response.data));
    console.log(`Nsfw image ${imageName} downloaded`);
  } catch (error) {
    console.error(`Failed to download image ${imageName}: ${error.message}`);
  }
}

module.exports = { getRandomNsfwImageUrl, downloadRandomNsfwImage };
