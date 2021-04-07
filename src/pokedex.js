/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */

import { loadSecondaryImages, loadMainPokemon } from './services.js';
import { displaySecondaryImages } from './ui.js'


async function initialize(){
  displaySecondaryImages(await loadSecondaryImages(), 1);
} 


initialize();








/*
const $LISTA_CARACTERISTICAS = document.querySelector('#lista-caracteristicas');
const $IMAGEN_PRINCIPAL = document.querySelector('#imagen-principal');
const $IMAGENES_SECUNDARIAS = document.querySelector('#imagenes-secundarias');
const $BOTON_SIGUIENTE = document.querySelector('#boton-siguiente');
const $BOTON_ANTERIOR = document.querySelector('#boton-anterior');
let paginaPokemonesSecundarios = 0;




cargarPokemonPrincipal(1)
cargarPokemonesSecundarios();
$IMAGENES_SECUNDARIAS.onclick = cambiarPokemonPrincipal;

$BOTON_SIGUIENTE.onclick = ()=>{
  paginaPokemonesSecundarios++
  borrarPokemonesSecundarios();
  cargarPokemonesSecundarios();
}

$BOTON_ANTERIOR.onclick = ()=>{

  if(paginaPokemonesSecundarios >=1){
    paginaPokemonesSecundarios--
    borrarPokemonesSecundarios();
    cargarPokemonesSecundarios();
  }

}


function cargarPokemonesSecundarios (){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${paginaPokemonesSecundarios*24}`)
      .then(respuesta => respuesta.json())
      .then(respuesaJSON =>{
        respuesaJSON.results.forEach(pokemon=>{
            fetch(pokemon.url)
              .then(respuesta => respuesta.json())
              .then(respuesaJSON =>{
                const $IMAGEN_SECUNDARIA = document.createElement("img");
                $IMAGEN_SECUNDARIA.className ="imagen-secundaria"
                $IMAGEN_SECUNDARIA.id=respuesaJSON.id;
                $IMAGEN_SECUNDARIA.src=respuesaJSON.sprites.front_default;
                $IMAGENES_SECUNDARIAS.appendChild($IMAGEN_SECUNDARIA);
              })
        })
      })
      .catch(error => console.error(error))

}


function cargarPokemonPrincipal (idPokemonSeleccionado){
    const PROBLEMAGUIONMEDIOARESOLVER = "official-artwork"
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemonSeleccionado}/`)
      .then(respuesta => respuesta.json())
      .then(respuesaJSON =>{
        
        agregaNombrePokemon(respuesaJSON.name)
        agregaAlturaPokemon(respuesaJSON.height)
        agregaPesoPokemon(respuesaJSON.weight)

        Object.keys(respuesaJSON.abilities).forEach(habilidad => {
            agregaHabilidadPokemon(respuesaJSON.abilities[habilidad].ability.name, habilidad)
        })

        $IMAGEN_PRINCIPAL.src=respuesaJSON.sprites.other["official-artwork"].front_default;
      })
      .catch(error => console.error(error))

}


function cambiarPokemonPrincipal(event){
  if(!isNaN(event.target.id)){
    borrarCaracteristicasPrincipales();
    cargarPokemonPrincipal(event.target.id)
  } else{
    return;
  }


}

function conMayusculaPrimerLetra (string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function agregaNombrePokemon (nombre){
    const $NOMBRE_POKEMON = document.createElement("li");
    $NOMBRE_POKEMON.className="list-group-item"
    $NOMBRE_POKEMON.textContent = `Nombre: ${conMayusculaPrimerLetra(nombre)}`; 
    $LISTA_CARACTERISTICAS.appendChild($NOMBRE_POKEMON);

}

function agregaAlturaPokemon (altura){

    const $ALTURA_POKEMON = document.createElement("li");
    $ALTURA_POKEMON.className="list-group-item"
    $ALTURA_POKEMON.textContent = `Altura: ${altura}`;
    $LISTA_CARACTERISTICAS.appendChild($ALTURA_POKEMON);


}

function agregaPesoPokemon(peso){
    const $PESO_POKEMON = document.createElement("li");
    $PESO_POKEMON.className="list-group-item"
    $PESO_POKEMON.textContent = `Peso: ${peso}`;
    $LISTA_CARACTERISTICAS.appendChild($PESO_POKEMON);

}

function agregaHabilidadPokemon(habilidad, i){
    const $HABILIDAD_POKEMON = document.createElement("li");
    $HABILIDAD_POKEMON.className="list-group-item"
    $HABILIDAD_POKEMON.textContent = `Habilidad ${Number(i)+1}: ${conMayusculaPrimerLetra(habilidad)}`;
    $LISTA_CARACTERISTICAS.appendChild($HABILIDAD_POKEMON); 
    
}

function borrarCaracteristicasPrincipales(){
  document.querySelectorAll('#lista-caracteristicas li').forEach(caracteristica =>{
    caracteristica.remove();
  })
}
function borrarPokemonesSecundarios(){
  document.querySelectorAll('#imagenes-secundarias img').forEach(imagen =>{
    imagen.remove();
  })
}


*/