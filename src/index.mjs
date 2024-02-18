import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const imageUrl = 'https://raw.githubusercontent.com/Sstudios-Dev/image-core/main/src/img/'; // Ruta base del repositorio

// Genera un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 9) + 1;

// Nombre de la imagen
const imageName = `img-core${randomNumber}.jpg`;

// URL completa de la imagen
const imageUrlFull = `${imageUrl}${imageName}?raw=true`;

// Directorio donde se guardará la imagen
const directory = './images';

// Crea el directorio si no existe
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

// Descarga la imagen
(async () => {
  const response = await fetch(imageUrlFull);
  const buffer = await response.buffer();
  fs.writeFileSync(path.join(directory, imageName), buffer);
  console.log(`Imagen ${imageName} descargada`);

  console.log(`Link directo de la imagen: ${imageUrlFull}`);

  // Aquí puedes hacer algo con la imagen descargada, como mostrarla en un navegador o en una aplicación de escritorio
})();
