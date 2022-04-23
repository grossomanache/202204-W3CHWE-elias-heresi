import Component from "./Component.js";

class AppComponent extends Component {
  pokemon;

  constructor(parentElement) {
    super(parentElement, "div", "app-container");
  }
}

const container = new AppComponent(document.querySelector("body"));

export default AppComponent;
