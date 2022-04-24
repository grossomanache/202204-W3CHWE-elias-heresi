import CardComponent from "../components/CardComponent.js";
import { importPropertyFromPokeApi, importFromUrl } from "./pokeapi.js";

const createPokemonList = async (url) => {
  document.querySelector("ul.pokemon-list").innerHTML = "";
  const pokemonList = await importPropertyFromPokeApi(url, `results`);
  pokemonList.forEach((pokemon) => {
    (async () => {
      const pokemonDetails = await importFromUrl(pokemon.url);
      // eslint-disable-next-line no-unused-vars
      const card = new CardComponent(
        document.querySelector("ul.pokemon-list"),
        pokemonDetails
      );
    })();
  });
};

export default createPokemonList;
