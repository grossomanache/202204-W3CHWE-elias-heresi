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

export { importFromUrl, importPropertyFromPokeApi };
