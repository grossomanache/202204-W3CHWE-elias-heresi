import Component from "./Component.js";

class AppComponent extends Component {
  pokemon;

  constructor(parentElement) {
    super(parentElement, "div", "app-container");
    this.render();
  }

  render() {
    this.element.innerHTML = `<header>
      <ul>
        <a href="index.html">Main page</a>
        <a href="local.html">My pokemon</a>
      </ul>
    </header>
      <main class="basic-container">
        <ul class="pokemon-list"></ul>
      </main>
      <footer></footer>`;
  }
}

// eslint-disable-next-line no-unused-vars
const container = new AppComponent(
  document.querySelector("div.general-container")
);

export default AppComponent;
