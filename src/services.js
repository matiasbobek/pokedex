/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */

import { loadMainPokemonFromLocalStorage, saveMainPokemon } from './storage.js'

export function loadSecondaryImages(page = 1) {
  const ImagesSources = [];
  const lastId = page * 24;

  for (let i = lastId - 23; i <= lastId; i++) {
    ImagesSources[i] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  }

  return ImagesSources;
}

export async function loadMainPokemon(pokemonId = 1) {
  try {
    return loadMainPokemonFromLocalStorage(pokemonId);
  } catch (e) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    const pokemonJSON = await pokemon.json();
    saveMainPokemon(pokemonJSON, pokemonId);
    return pokemonJSON;
  }
}
