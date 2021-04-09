/* eslint-disable linebreak-style */

export function saveMainPokemon(pokemon, pokemonId) {
  if (pokemon === null || pokemonId == null) {
    throw new Error('There is missing data from the pokemon to save');
  }
  localStorage.setItem(pokemonId, JSON.stringify(pokemon));
}

export function loadMainPokemonFromLocalStorage(pokemonId) {
  const pokemon = JSON.parse(localStorage.getItem(pokemonId));
  if (pokemon === null) {
    throw new Error(`There is no saved pokemon with id: ${pokemonId}`);
  }
  return pokemon;
}
