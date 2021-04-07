/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */

export function loadSecondaryImages(page = 1) {
  const ImagesSources = [];
  const lastId = page * 25;

  for (let i = lastId - 24; i <= lastId; i++) {
    ImagesSources[i] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`;
  }

  return ImagesSources;
}

export async function loadMainPokemon(PokemonId = 1) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonId}/`);
  const pokemonJSON = await pokemon.json();
  return pokemonJSON;
}
