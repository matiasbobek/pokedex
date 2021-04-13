/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/// <reference types="Jest"/>

import { loadSecondaryImages, loadMainPokemon } from '../services.js';
import { displayLoading } from '../ui.js';

describe('services', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('if it loads the secondary images', () => {
    const expectedResult = [];
    for (let i = 1; i <= 24; i++) {
      expectedResult[i] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    }
    expect(loadSecondaryImages(1))
      .toEqual(expectedResult);
  });

  it('if it loads the main pokemon', () => {
    global.fetch.mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    }));

    loadMainPokemon(1);
    expect(global.fetch)
      .toHaveBeenCalledTimes(1);

    expect(global.fetch)
      .toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1/');
  });
});

describe('ui', () => {
  it('if displays the loading label', () => {
    document.body.innerHTML = '<div id="loading-containter"></div><img id="main-image"/>';
    displayLoading();
    expect(document.querySelector(('#loading-containter')).textContent)
      .toContain('Loading...');
  });

    it('if displays the secondary images', ()=>{
      document.body.innerHTML ='<div id="secondary-images"></div>'
    })
});

