/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

const lastpokemon = 898;
let page = 1;
const $featuresList = document.querySelector('#features-list');

function removePreviousMainPokemon() {
  document.querySelectorAll('.list-group-item').forEach((item) => item.remove());
}

function removePreviousSecondaryPokemons() {
  document.querySelectorAll('.secondary-image').forEach((image) => image.remove());
}

function FirstLetterUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addAbility(ability, i) {
  const $pokemonAbility = document.createElement('li');
  $pokemonAbility.className = 'list-group-item';
  $pokemonAbility.textContent = `Ability ${Number(i) + 1}: ${FirstLetterUpperCase(ability)}`;
  $featuresList.appendChild($pokemonAbility);
}

function removeLoading() {
  if (document.querySelector('#loading')) {
    document.querySelector('#loading').remove();
  }
}

export function displayLoading() {
  removePreviousMainPokemon();
  removeLoading();
  const $primaryContainter = document.querySelector('#loading-containter');
  const $loading = document.createElement('p');
  $loading.className = 'float-right';
  $loading.id = 'loading';
  $loading.textContent = 'Loading...';
  $primaryContainter.appendChild($loading);
  document.querySelector('#main-image').classList.add('hidden');
}

export function displaySecondaryImages(ImagesSources, callBackRefreshMainPokemon) {
  removePreviousSecondaryPokemons();
  const $secondaryImages = document.querySelector('#secondary-images');
  const lastId = page * 24;

  for (let i = lastId - 23; i <= lastId; i++) {
    if (i < lastpokemon) {
      const $secondaryImage = document.createElement('img');
      $secondaryImage.className = 'secondary-image';
      $secondaryImage.id = i;
      $secondaryImage.src = ImagesSources[i];
      $secondaryImages.appendChild($secondaryImage);
      $secondaryImage.onclick = () => {
        callBackRefreshMainPokemon($secondaryImage.id);
      };
    }
  }
}

export function displayMainPokemon(pokemon) {
  removeLoading();
  removePreviousMainPokemon();
  const $pokemonName = document.createElement('li');
  $pokemonName.className = 'list-group-item';
  $pokemonName.id = 'name';
  $pokemonName.textContent = `Name: ${FirstLetterUpperCase(pokemon.name)}`;
  $featuresList.appendChild($pokemonName);

  const $pokemonHeight = document.createElement('li');
  $pokemonHeight.className = 'list-group-item';
  $pokemonHeight.textContent = `Height: ${pokemon.height}`;
  $featuresList.appendChild($pokemonHeight);

  const $pokemonWeight = document.createElement('li');
  $pokemonWeight.className = 'list-group-item';
  $pokemonWeight.textContent = `Weight: ${pokemon.weight}`;
  $featuresList.appendChild($pokemonWeight);

  Object.keys(pokemon.abilities).forEach((i) => {
    addAbility(pokemon.abilities[i].ability.name, i);
  });

  const $mainImage = document.querySelector('#main-image');
  $mainImage.src = pokemon.sprites.other['official-artwork'].front_default;
  $mainImage.classList.remove('hidden');
}

export function enableButtons(callbackRefreshSecondary) {
  const $buttonNext = document.querySelector('#button-next');
  const $buttonPrevious = document.querySelector('#button-previous');
  $buttonPrevious.classList.add('disabled');

  $buttonNext.onclick = (() => {
    if (page < 38) {
      page++;
      callbackRefreshSecondary(page);
      $buttonPrevious.classList.remove('disabled');
      if (page === 38) {
        $buttonNext.classList.add('disabled');
      }
    }
  });
  $buttonPrevious.onclick = (() => {
    if (page > 1) {
      page--;
      callbackRefreshSecondary(page);
      $buttonNext.classList.remove('disabled');
      if (page === 1) {
        $buttonPrevious.classList.add('disabled');
      }
    }
  });
}
