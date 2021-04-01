let idPokemonSeleccionado = 1;
const $LISTA_CARACTERISTICAS = document.querySelector('#lista-caracteristicas');
const $IMAGEN_PRINCIPAL = document.querySelector('#imagen-principal');

cargarPokemonPrincipal(idPokemonSeleccionado)

function cargarPokemonPrincipal (idPokemonSeleccionado){
    const PROBLEMAGUIONMEDIOARESOLVER = "official-artwork"
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemonSeleccionado}/`)
      .then(respuesta => respuesta.json())
      .then(respuesaJSON =>{
        const $NOMBRE_POKEMON = document.createElement("li");
        $NOMBRE_POKEMON.className="list-group-item"
        $NOMBRE_POKEMON.textContent = `Nombre: ${conMayusculaPrimerLetra(respuesaJSON.name)}`; 
        $LISTA_CARACTERISTICAS.appendChild($NOMBRE_POKEMON);

        const $ALTURA_POKEMON = document.createElement("li");
        $ALTURA_POKEMON.className="list-group-item"
        $ALTURA_POKEMON.textContent = `Altura: ${respuesaJSON.height}`;
        $LISTA_CARACTERISTICAS.appendChild($ALTURA_POKEMON);

        const $PESO_POKEMON = document.createElement("li");
        $PESO_POKEMON.className="list-group-item"
        $PESO_POKEMON.textContent = `Peso: ${respuesaJSON.weight}`;
        $LISTA_CARACTERISTICAS.appendChild($PESO_POKEMON);

        Object.keys(respuesaJSON.abilities).forEach(habilidad => {
            const $HABILIDAD_POKEMON = document.createElement("li");
            $HABILIDAD_POKEMON.className="list-group-item"
            $HABILIDAD_POKEMON.textContent = `Habilidad ${Number(habilidad)+1}: ${conMayusculaPrimerLetra(respuesaJSON.abilities[habilidad].ability.name)}`;
            $LISTA_CARACTERISTICAS.appendChild($HABILIDAD_POKEMON); 
            
        })

        $IMAGEN_PRINCIPAL.src=respuesaJSON.sprites.other["official-artwork"].front_default;
      })

}


function conMayusculaPrimerLetra (string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}