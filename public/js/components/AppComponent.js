import Component from "./Component.js";

class AppComponent extends Component {
  pokemon;

  constructor(parentElement) {
    super(parentElement, "div", "app-container");
    this.render();
  }

  render() {
    this.element.innerHTML = `<header>
      <ul class="list-unstyled">
        <a href="index.html">Main page</a>
        <a href="local.html">My pokemon</a>
      </ul>
    </header>
      <main class="basic-container">
        <section class="page-scroller__lower">
        </section>
        <div class="container px-4">
          <ul class="pokemon-list row list-unstyled gx-5"></ul>
        </div>
        <section class="page-scroller__upper">
        </section>
      </main>
      <footer></footer>`;
  }
}

// eslint-disable-next-line no-unused-vars
const container = new AppComponent(
  document.querySelector("div.general-container")
);

export default AppComponent;
