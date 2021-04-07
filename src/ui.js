/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
const $featuresList = document.querySelector('#features-list');

function FirstLetterUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addAbility(ability, i) {
  const $pokemonAbility = document.createElement('li');
  $pokemonAbility.className = 'list-group-item';
  $pokemonAbility.textContent = `Habilidad ${Number(i) + 1}: ${FirstLetterUpperCase(ability)}`;
  $featuresList.appendChild($pokemonAbility);
}

export function displaySecondaryImages(ImagesSources, page) {
  const $secondaryImages = document.querySelector('#imagenes-secundarias');
  const lastId = page * 24;

  for (let i = lastId - 23; i <= lastId; i++) {
    const $secondaryImage = document.createElement('img');
    $secondaryImage.className = 'secondary-image';
    $secondaryImage.id = i;
    $secondaryImage.src = ImagesSources[i];
    $secondaryImages.appendChild($secondaryImage);
  }
}

export function displayMainPokemon(pokemon) {
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
}

/* const $pokemonAbility = document.createElement('li');
    $pokemonAbility.className = 'list-group-item';
    $pokemonAbility.textContent = `Habilidad ${Number(i) + 1}: ${FirstLetterUpperCase(i.ability.name)}`;
    $featuresList.appendChild($pokemonAbility); */

/*

        Object.keys(respuesaJSON.abilities).forEach(habilidad => {
            agregaHabilidadPokemon(respuesaJSON.abilities[habilidad].ability.name, habilidad)
        })

    const $HABILIDAD_POKEMON = document.createElement("li");
    $HABILIDAD_POKEMON.className="list-group-item"
    $HABILIDAD_POKEMON.textContent = `Habilidad ${Number(i)+1}: ${conMayusculaPrimerLetra(habilidad)}`;
    $LISTA_CARACTERISTICAS.appendChild($HABILIDAD_POKEMON);

*/
