import CardComponent from "../components/CardComponent.js";
import { importFromUrl } from "../api/pokeapi.js";

const localUrl = "https://pokemon-local-repository.herokuapp.com/pokemon";

const localPokemons = (async () => {
  const pokemonList = await importFromUrl(localUrl);
  pokemonList.forEach((pokemon) => {
    (async () => {
      const pokemonDetails = await importFromUrl(pokemon.id);
      // eslint-disable-next-line no-unused-vars
      const card = new CardComponent(
        document.querySelector("ul.pokemon-list"),
        pokemonDetails
      );
    })();
  });
})();

export default localPokemons;
