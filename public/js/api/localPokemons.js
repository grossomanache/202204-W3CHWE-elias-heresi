import CardComponent from "../components/CardComponent.js";

const localUrl = "http://localhost:4000/pokemon";

const importFromUrl = async (url) => {
  const response = await fetch(url);
  const dataToBeArranged = await response.json();
  return dataToBeArranged;
};

const localPokemons = (async () => {
  const pokemonList = await importFromUrl(localUrl);
  pokemonList.forEach((pokemon) => {
    (async () => {
      const pokemonDetails = await importFromUrl(pokemon);
      // eslint-disable-next-line no-unused-vars
      const card = new CardComponent(
        document.querySelector("ul.pokemon-list"),
        pokemonDetails
      );
    })();
  });
})();

export default localPokemons;
