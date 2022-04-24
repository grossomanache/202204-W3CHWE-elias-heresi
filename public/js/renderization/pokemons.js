import CardComponent from "../components/CardComponent.js";
import { importPropertyFromPokeApi, importFromUrl } from "../api/pokeapi.js";

const createPokemonList = (async () => {
  const pokemonList = await importPropertyFromPokeApi(
    `pokemon/?limit=30&offset`,
    `results`
  );
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
})();

export default createPokemonList;
