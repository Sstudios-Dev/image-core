# image-core | Node.Js

Generates a random URL for an image hosted on GitHub, downloads it and saves it in a local directory of your project. This could be useful, for example, for applications that need images dynamically for testing, demonstration or development purposes.

---

# Categories

- Random images: **36** images
- Anime images: **40** images

# Warning

image core requires the `.msj` file extension so in the `package.json` of your project it requires to put this

```json
{
  "type": "module", // you have to add this
  "dependencies": {
    "imagen-core": "^1.0.0"
  }
}
```
just add above the dependencies `"type": "module"` just that, just don't add the message that's in the //

# How to use it

First you have to have your `.js` project and `node.js` installed and in the console of your code editor execute the following command

`npm i imagen-core`

after that the dependencies will be installed and then you can use the `image-core` functions without any problem.

# downloadRandomImage

Well, what this function does is to download a random image that is uploaded to the `repository` and creates a directory called `./image/.`

## Example

```js
// downloadImageExample.js

// Import the function downloadRandomImage from index.mjs file
import { downloadRandomImage } from 'imagen-core';

// Calling the downloadRandomImage function to download an image
async function exampleDownloadRandomImage() {
  try {
    await downloadRandomImage();
    console.log('Image downloaded successfully.');
  } catch (error) {
    console.error('Error downloading the image:', error);
  }
}

// Execute the example
exampleDownloadRandomImage();
```

# getImageUrlFull

What this function does is to send the direct link of the image this you can server for a `whatsapp or discord` bot or for some social network that has `github support`.

## Example

```js
// imageUrlExample.js

// Import getImageUrlFull function from index.mjs file
import { getImageUrlFull } from 'imagen-core';

// Call the getImageUrlFull function to get the URL of the image
async function exampleGetImageUrlFull() {
  try {
    const { imageUrlFull, imageName } = await getImageUrlFull();
    console.log('Full Image URL:', imageUrlFull);
    console.log('Image Name:', imageName);
  } catch (error) {
    console.error('Error getting the URL of the image:', error);
  }
}

// Execute example
exampleGetImageUrlFull();
```
# downloadRandomAnimeImage

What this function does is to load a random anime image that is in our `repository`.

## Example

```js
import { downloadRandomAnimeImage } from './src/anime.mjs';

async function testDownloadRandomAnimeImage() {
  try {
    await downloadRandomAnimeImage();
    console.log('Random anime image downloaded successfully');
  } catch (error) {
    console.error('Error downloading random anime image:', error);
  }
}

// Test downloadRandomAnimeImage
testDownloadRandomAnimeImage();
```

# GetRandomAnimeImageUrl

This function displays the direct link to the generated `anime` image and can be used in `social networks` with `github support`.

```js
import { getRandomAnimeImageUrl } from './src/anime.mjs';

async function testGetRandomAnimeImageUrl() {
  try {
    const { animeImageUrlFull, imageName } = await getRandomAnimeImageUrl();
    console.log('Random anime image URL:', animeImageUrlFull);
    console.log('Image name:', imageName);
  } catch (error) {
    console.error('Error fetching random anime image URL:', error);
  }
}

// Test getRandomAnimeImageUrl
testGetRandomAnimeImageUrl();
```

# Contributors
Thank you very much for helping in the project ❤

<img src="https://contrib.rocks/image?repo=Sstudios-Dev/image-core">

# License

**SstudiosDev** © [SstudiosTeam](https://github.com/Sstudios-Dev) released under the MIT License.
Authored and maintained by SstudiosDev.
<br>
<br>
<img src="https://i0.wp.com/opensource.org/wp-content/uploads/2023/03/cropped-OSI-horizontal-large.png?fit=640%2C229&ssl=1">
