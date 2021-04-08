/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */

import { loadSecondaryImages, loadMainPokemon } from './services.js';
import {
  displaySecondaryImages, displayMainPokemon, removePreviousMainPokemon, enableButtons, removePreviousSecondaryPokemons,
} from './ui.js';

async function refresh(PokemonId){
  removePreviousMainPokemon();
  displayMainPokemon(await loadMainPokemon(PokemonId));
}

async function refreshSecondary(page){
  removePreviousSecondaryPokemons();
  displaySecondaryImages(await loadSecondaryImages(page), refresh);
}

async function initialize(){
  displaySecondaryImages(await loadSecondaryImages(), refresh);
  displayMainPokemon(await loadMainPokemon(1));
  enableButtons(refreshSecondary);
}

initialize();
