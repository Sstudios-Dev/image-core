// anime.mjs
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

async function getRandomAnimeImageUrl() {
  const animeImageUrl = 'https://raw.githubusercontent.com/Sstudios-Dev/image-core/main/src/img-anime/';
  const randomNumber = Math.floor(Math.random() * 20) + 1; // Assuming there are 1000 images
  const imageName = `img-anime${randomNumber}.jpg`;
  return { animeImageUrlFull: `${animeImageUrl}${imageName}?raw=true`, imageName };
}

async function downloadRandomAnimeImage() {
  const { animeImageUrlFull, imageName } = await getRandomAnimeImageUrl();
  const directory = './anime-images';

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  const response = await fetch(animeImageUrlFull);
  if (!response.ok) {
    console.error(`Failed to download image ${imageName}`);
    return;
  }

  const buffer = await response.buffer();
  fs.writeFileSync(path.join(directory, imageName), buffer);
  console.log(`Anime image ${imageName} downloaded`);
}

export { getRandomAnimeImageUrl, downloadRandomAnimeImage };
