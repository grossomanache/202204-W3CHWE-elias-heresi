import Component from "./Component.js";
import addToLocalApi from "../api/modifyLocal.js";

class CardComponent extends Component {
  pokemon;

  constructor(
    parentElement,
    {
      name,
      id,
      height,
      weight,
      sprites: {
        other: {
          "official-artwork": { front_default: image },
        },
      },
    },
    mainOrLocal
  ) {
    super(parentElement, "li", `pokemon-card col-3 p-3`, mainOrLocal);
    this.name = name;
    this.id = id;
    this.image = image;
    this.height = height / 10;
    this.weight = weight / 10;
    this.render();
    this.addListeners();
  }

  render() {
    this.element.innerHTML = `          <h3>${this.name}</h3>  
          <i class="fa-solid fa-circle-plus id-${this.id}"></i>
          <img
            src="${this.image}"
            alt="${this.name}"
          />
          <p>ID: #${this.id}</p>
          <h4>Height: ${this.height}m</h4>
          <h4>Weight: ${this.weight}kg</h4>`;
  }

  addListeners() {
    if (this.mainOrLocal === "main") {
      this.element.querySelector("i").addEventListener("click", () => {
        (async () => {
          const addedPokemon = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
          addToLocalApi(addedPokemon);
        })();
      });
    } else if (this.mainOrLocal === "local") {
      this.element.querySelector("i").addEventListener("click", () => {
        (async () => {
          const addedPokemon = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
          addToLocalApi(addedPokemon);
        })();
      });
    }
  }
}

export default CardComponent;
