const mainApiUrl = "https://pokeapi.co/api/v2/";
const importFromUrl = async (url) => {
  const response = await fetch(url);
  const dataToBeArranged = await response.json();
  return dataToBeArranged;
};

const importPropertyFromPokeApi = async (
  sectionToBeImported,
  propertyToBeImported
) => {
  const response = await fetch(`${mainApiUrl}${sectionToBeImported}`);
  const dataToBeArranged = await response.json();
  return dataToBeArranged[propertyToBeImported];
};

const importFromPokeApi = async (sectionToBeImported) => {
  const response = await fetch(`${mainApiUrl}${sectionToBeImported}`);
  const dataToBeArranged = await response.json();
  return dataToBeArranged;
};

const createPokemonList = (async () => {
  const pokemonList = await importPropertyFromPokeApi(
    `pokemon/?limit=30&offset`,
    `results`
  );
  pokemonList.forEach((pokemon) => {
    (async () => {
      const pokemonDetails = await importFromUrl(pokemon.url);
    })();
  });
})();
