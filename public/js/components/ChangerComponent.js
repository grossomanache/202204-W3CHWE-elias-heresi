import Component from "./Component.js";

class ChangerComponent extends Component {
  page;

  constructor(parentElement, upperOrLower) {
    super(parentElement, "section", `page-scroller__${upperOrLower}`);
    this.render();
  }

  render() {
    this.element.innerHTML = `<i class="fa-solid fa-circle-arrow-left"></i>
    <i class="fa-solid fa-circle-arrow-right"></i>`;
  }
}
