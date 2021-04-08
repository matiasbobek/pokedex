/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */

import { loadSecondaryImages, loadMainPokemon } from './services.js';
import {
  displaySecondaryImages, displayMainPokemon, enableButtons, displayLoading
} from './ui.js';

async function refresh(PokemonId){
  displayLoading();
  displayMainPokemon(await loadMainPokemon(PokemonId));
}

async function refreshSecondary(page){
  displaySecondaryImages(await loadSecondaryImages(page), refresh);
}

async function initialize(){
  displaySecondaryImages(await loadSecondaryImages(), refresh);
  displayMainPokemon(await loadMainPokemon(1));
  enableButtons(refreshSecondary);
}

initialize();
