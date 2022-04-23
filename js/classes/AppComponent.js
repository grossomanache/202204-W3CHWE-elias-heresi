import Component from "./Component.js";

class AppComponent extends Component {
  pokemon;

  constructor(parentElement, pokemon) {
    super(parentElement, "div", "container");
    this.pokemon = pokemon;
  }
}

export default AppComponent;
