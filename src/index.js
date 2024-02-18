const fetch = require('node-fetch');
const fs = require('fs');

async function descargarImagenes(usuario, repositorio, rutaCarpeta) {
    try {
        const url = `https://api.github.com/repos/${usuario}/${repositorio}/contents/${rutaCarpeta}`;
        const respuesta = await fetch(url);
        const archivos = await respuesta.json();

        for (const archivo of archivos) {
            if (archivo.type === 'file' && archivo.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                const contenido = await fetch(archivo.download_url);
                const buffer = await contenido.buffer();
                fs.writeFileSync(`./${archivo.name}`, buffer);
            }
        }
        console.log('Imágenes descargadas correctamente.');
    } catch (error) {
        console.error('Error al descargar imágenes:', error);
    }
}

// Uso de la función para descargar imágenes de un repositorio en GitHub
descargarImagenes('nombreusuario', 'nombrerepositorio', 'rutacarpeta');