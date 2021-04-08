/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

let page = 1;
const $featuresList = document.querySelector('#features-list');

function removePreviousMainPokemon() {
  document.querySelectorAll('.list-group-item').forEach((item) => item.remove());
}

function removePreviousSecondaryPokemons() {
  document.querySelectorAll('.secondary-image').forEach((image) => image.remove());
}

function removeLoading() {
  if (document.querySelector('#loading')) {
    document.querySelector('#loading').remove();
  }
}

export function displayLoading() {
  removePreviousMainPokemon();
  const $loading = document.createElement('li');
  $loading.className = 'list-group-item';
  $loading.id = 'loading';
  $loading.textContent = 'Loading...';
  $featuresList.appendChild($loading);
  document.querySelector('#main-image').classList.add('hidden');
}

function FirstLetterUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addAbility(ability, i) {
  const $pokemonAbility = document.createElement('li');
  $pokemonAbility.className = 'list-group-item';
  $pokemonAbility.textContent = `Habilidad ${Number(i) + 1}: ${FirstLetterUpperCase(ability)}`;
  $featuresList.appendChild($pokemonAbility);
}

export function displaySecondaryImages(ImagesSources, callBackRefreshMainPokemon) {
  removePreviousSecondaryPokemons();
  const $secondaryImages = document.querySelector('#imagenes-secundarias');
  const lastId = page * 24;

  for (let i = lastId - 23; i <= lastId; i++) {
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

export function displayMainPokemon(pokemon) {
  removeLoading();
  const $pokemonName = document.createElement('li');
  $pokemonName.className = 'list-group-item';
  $pokemonName.textContent = `Nombre: ${FirstLetterUpperCase(pokemon.name)}`;
  $featuresList.appendChild($pokemonName);

  const $pokemonHeight = document.createElement('li');
  $pokemonHeight.className = 'list-group-item';
  $pokemonHeight.textContent = `Altura: ${pokemon.height}`;
  $featuresList.appendChild($pokemonHeight);

  const $pokemonWeight = document.createElement('li');
  $pokemonWeight.className = 'list-group-item';
  $pokemonWeight.textContent = `Peso: ${pokemon.weight}`;
  $featuresList.appendChild($pokemonWeight);

  Object.keys(pokemon.abilities).forEach((i) => {
    addAbility(pokemon.abilities[i].ability.name, i);
  });

  const $mainImage = document.querySelector('#main-image');
  $mainImage.src = pokemon.sprites.other['official-artwork'].front_default;
  $mainImage.classList.remove('hidden');
}

export function enableButtons(callbackRefreshSecondary) {
  document.querySelector('#button-next').onclick = (() => {
    if (page < 37) {
      page++;
      callbackRefreshSecondary(page);
    }
  });

  document.querySelector('#button-previous').onclick = (() => {
    if (page > 1) {
      page--;
      callbackRefreshSecondary(page);
    }
  });
}
