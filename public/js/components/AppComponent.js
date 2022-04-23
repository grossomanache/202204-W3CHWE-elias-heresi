import Component from "./Component.js";

class AppComponent extends Component {
  pokemon;

  constructor(parentElement) {
    super(parentElement, "div", "app-container");
  }
}

// eslint-disable-next-line no-unused-vars
const container = new AppComponent(document.querySelector("body"));

export default AppComponent;
