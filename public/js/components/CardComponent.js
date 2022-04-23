import Component from "./Component.js";

class CardComponent extends Component {
  name;

  constructor(parentElement, { name }) {
    super(parentElement, "li", `pokemon-card`);
    this.name = name;
    this.render();
  }

  render() {
    this.element.innerHTML = `${this.name}`;
  }
}

export default CardComponent;
