const helloWorld = require("./src/helloWorld");
const yellowPokemon = require("./src/app");

helloWorld.printHelloWorld();
console.log("Hello");

fetch("https://pokeapi.co/api/v2/pokemon-color/yellow/")
  .then((response) => response.json())
  .then((json) => {
    yellowPokemon.printYellowPokemon(json.pokemon_species);
  })
  .catch((error) => {
    console.log(error);
  });