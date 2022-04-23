class Component {
  element;

  constructor(parentElement, tag, classNameOfComponent) {
    this.element = document.createElement(tag);
    this.element.className = classNameOfComponent;
    document.querySelector(parentElement).appendChild(this.element);
  }
}

export default Component;
