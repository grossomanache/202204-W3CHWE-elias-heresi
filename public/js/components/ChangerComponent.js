import Component from "./Component.js";

class ChangerComponent extends Component {
  page;

  constructor(parentElement, upperOrLower, action) {
    super(parentElement, "section", `page-scroller__${upperOrLower}`);
    this.render();
    this.addListeners();
    this.action = action;
    this.upperOrLower = upperOrLower;
  }

  render() {
    this.element.innerHTML = `<i class="fa-solid fa-circle-arrow-left changer__${this.upperOrLower}--previous"></i>
    <i class="fa-solid fa-circle-arrow-right changer__${this.upperOrLower}--next"></i>`;
  }

  addListeners() {
    this.element
      .querySelector("i.changer__next")
      .addEventListener("click", this.action);
  }
}

export default ChangerComponent;
