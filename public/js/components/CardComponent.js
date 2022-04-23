import Component from "./Component.js";

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
    }
  ) {
    super(parentElement, "li", `pokemon-card`);
    this.name = name;
    this.id = id;
    this.image = image;
    this.height = height / 10;
    this.weight = weight / 10;
    this.render();
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
}

export default CardComponent;
