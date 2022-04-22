import AppComponent from "./classes/AppComponent.js";

// import pokemons from "./api/pokeApi.js";

const mainApiUrl = "https://pokeapi.co/api/v2/";

/*
const importFromPokeApi = async (
  sectionToBeImported,
  propertyToBeExtracted
) => {
  const response = await fetch(`${mainApiUrl}${sectionToBeImported}`);
  const dataToBeArranged = await response.json();
  return dataToBeArranged[propertyToBeExtracted];
};
*/

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

(async () => {
  const numberOfPokemon = await importPropertyFromPokeApi("pokemon", "count");
  const informationAboutPokemons = [];
  const details = await importFromPokeApi(`pokemon/1`);
  informationAboutPokemons.push(details);
  console.log(numberOfPokemon);
  console.log(informationAboutPokemons[0]);
})();
