import createPokemonList from "../api/pokemonListCreation.js";

const initialUrl = "pokemon/?limit=30&offset";
const initialCardRenderization = await createPokemonList(initialUrl, "main");

export default initialCardRenderization;
