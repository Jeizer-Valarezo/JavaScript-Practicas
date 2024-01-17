/*
La API de Pokemon tiene acceso a los datos de todos los pokemon existentes!

Crea una funcion que devuelva un pokemon aleatorio de la pokeapi.
Este puede ser un numero entre 1 y 1025 (inclusive).

API: ("https://pokeapi.co/api/v2/pokemon/{id}/")
*/
let random;
async function getRandomPokemon() {
    random= Math.floor(Math.random()*1025);
    let res;
    let poke;
    res= await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
    poke= await res.json()
    return poke;
    
}

getRandomPokemon()
.then((data) => console.log(data.name))

