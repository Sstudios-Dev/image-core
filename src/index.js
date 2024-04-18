const axios = require('axios');
const fs = require('fs');
const path = require('path');
//Esta Funcion se usa para llamar la url de la imagen 
async function getImageUrlFull() {
  const imageUrl = 'https://raw.githubusercontent.com/Sstudios-Dev/image-core/main/src/img/';
  const randomNumber = Math.floor(Math.random() * 70) + 1; // Assuming there are 1000 images
  const imageName = `img-core${randomNumber}.jpg`;
  return { imageUrlFull: `${imageUrl}${imageName}?raw=true`, imageName };
}
//Esta Funcion se Usa la para descargar una imagen random
async function downloadRandomImage() {
  const { imageUrlFull, imageName } = await getImageUrlFull();
  const directory = './images-Random';

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  try {
    const response = await axios.get(imageUrlFull, { responseType: 'arraybuffer' });
    fs.writeFileSync(path.join(directory, imageName), Buffer.from(response.data));
    console.log(`image random ${imageName} downloaded`);
  } catch (error) {
    console.error(`Failed to download image ${imageName}: ${error.message}`);
  }
}

//////////////////////////////////////END MODULE 1 //////////////////////////////////////
// Esta funcion se usa para obtener la imagen random de anime y obtener la url de las imagenes 
async function getRandomAnimeImageUrl() {
  const animeImageUrl = 'https://raw.githubusercontent.com/Sstudios-Dev/image-core/main/src/img-anime/';
  const randomNumber = Math.floor(Math.random() * 200) + 1; // Assuming there are 1000 images
  const imageName = `img-anime${randomNumber}.jpg`;
  return { animeImageUrlFull: `${animeImageUrl}${imageName}?raw=true`, imageName };
}
// Funcion para descargar imagenes random de animes
async function downloadRandomAnimeImage() {
  const { animeImageUrlFull, imageName } = await getRandomAnimeImageUrl();
  const directory = './anime-images';

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  try {
    const response = await axios.get(animeImageUrlFull, { responseType: 'arraybuffer' });
    fs.writeFileSync(path.join(directory, imageName), Buffer.from(response.data));
    console.log(`Anime image ${imageName} downloaded`);
  } catch (error) {
    console.error(`Failed to download image ${imageName}: ${error.message}`);
  }
}

//////////////////////////////////////END MODULE 2 //////////////////////////////////////

module.exports = { getImageUrlFull, downloadRandomImage, getRandomAnimeImageUrl, downloadRandomAnimeImage };
