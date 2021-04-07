/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

export function displaySecondaryImages(ImagesSources, page = 1) {
  const $secondaryImages = document.querySelector('#imagenes-secundarias');
  const lastId = page * 25;

  for (let i = lastId - 24; i <= lastId; i++) {
    const $secondaryImage = document.createElement('img');
    $secondaryImage.className = 'secondary-image';
    $secondaryImage.id = i;
    $secondaryImage.src = ImagesSources[i];
    $secondaryImages.appendChild($secondaryImage);
  }
}
