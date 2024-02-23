# image-core | Node.Js

Generates a random URL for an image hosted on GitHub, downloads it and saves it in a local directory of your project. This could be useful, for example, for applications that need images dynamically for testing, demonstration or development purposes.

---

# Categories

- Random images: **46** images
- Anime images: **80** images

# Warning

image core requires the `.js` file extension so in the `package.json` of your project it requires to put this

```json
{
  "type": "commonjs", // you have to add this
  "dependencies": {
    "imagen-core": "^1.0.4"
  }
}
```
just add above the dependencies `"type": "commonjs"` just that, just don't add the message that's in the //

# How to use it

First you have to have your `.js` project and `node.js` installed and in the console of your code editor execute the following command

`npm i imagen-core`

after that the dependencies will be installed and then you can use the `image-core` functions without any problem.

# downloadRandomImage

Well, what this function does is to download a random image that is uploaded to the `repository` and creates a directory called `./image/.`

## Example

```js
const { getImageUrlFull } = require('imagen-core');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

/**
 * Downloads a random anime image from a specified URL.
 * It uses getImageUrlFull to get the full image URL,
 * then downloads and saves the image to a specified directory.
 */
async function downloadRandomImage() {
  // Call getImageUrlFull to get the full image URL and image name
  const { imageUrlFull, imageName } = await getImageUrlFull();
  const directory = './test'; // Directory where the image will be saved

  // Create the directory if it doesn't exist
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  try {
    // Use Axios to download the image data as an array buffer
    const response = await axios.get(imageUrlFull, { responseType: 'arraybuffer' });

    // Write the image data to a file in the specified directory
    fs.writeFileSync(path.join(directory, imageName), Buffer.from(response.data));
    
    // Log a success message
    console.log(`image ${imageName} downloaded`);
  } catch (error) {
    // Log an error message if the download fails
    console.error(`Failed to download image ${imageName}: ${error.message}`);
  }
}

// Run the downloadRandomImage function
downloadRandomImage();
```

# getImageUrlFull

What this function does is to send the direct link of the image this you can server for a `whatsapp or discord` bot or for some social network that has `github support`.

## Example

```js
const { getImageUrlFull } = require('imagen-core');

/**
 * Example function to demonstrate getting the full URL of an image.
 * It uses the getImageUrlFull function to retrieve the URL and image name,
 * and then logs them to the console.
 */
async function exampleGetFullImageUrl() {
  // Call the getImageUrlFull function to get the URL and image name
  const { imageUrlFull, imageName } = await getImageUrlFull();
  
  // Log the full image URL and image name to the console
  console.log('Full image URL:', imageUrlFull);
  console.log('Image name:', imageName);
}

// Run the example function
exampleGetFullImageUrl();
```
# downloadRandomAnimeImage

What this function does is to load a random anime image that is in our `repository`.

## Example

```js
const { downloadRandomAnimeImage } = require('imagen-core');

/**
 * Downloads a random anime image and logs a success message if successful.
 * Logs an error message if there's an error during the download.
 */
async function testDownloadRandomAnimeImage() {
  try {
    await downloadRandomAnimeImage();
    console.log('Anime image downloaded successfully');
  } catch (error) {
    console.error('Error downloading anime image:', error);
  }
}

// Run the function to test downloading a random anime image
testDownloadRandomAnimeImage();
```

# GetRandomAnimeImageUrl

This function displays the direct link to the generated `anime` image and can be used in `social networks` with `github support`.

```js
const { getRandomAnimeImageUrl } = require('imagen-core');

/**
 * Example function to demonstrate getting a random anime image URL.
 * It uses the getRandomAnimeImageUrl function to retrieve the URL and image name,
 * and then logs them to the console.
 */
async function exampleGetRandomAnimeImageUrl() {
  // Call the getRandomAnimeImageUrl function to get the URL and image name
  const { animeImageUrlFull, imageName } = await getRandomAnimeImageUrl();
  
  // Log the full anime image URL and image name to the console
  console.log('Full anime image URL:', animeImageUrlFull);
  console.log('Image name:', imageName);
}

// Run the example function
exampleGetRandomAnimeImageUrl();
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
