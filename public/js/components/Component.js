class Component {
  element;

  constructor(parentElement, tag, classNameOfComponent) {
    this.element = document.createElement(tag);
    this.element.className = classNameOfComponent;
    parentElement.appendChild(this.element);
  }
}

export default Component;
