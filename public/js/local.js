import "./components/AppComponent.js";
import "./renderization/localPokemons.js";

const localUrl = "https://pokemon-local-repository.herokuapp.com/pokemon";
const deleteFromLocalApi = async (idToBeDeleted) => {
  const response = await fetch(localUrl);
  const data = await response.json();
  // eslint-disable-next-line no-unused-vars
  const indexOfId = data.findIndex(
    (array) => array.id === `https://pokeapi.co/api/v2/pokemon/${idToBeDeleted}`
  );
};

(async () => {
  deleteFromLocalApi(4);
})();

(async () => {
  deleteFromLocalApi(19);
})();
