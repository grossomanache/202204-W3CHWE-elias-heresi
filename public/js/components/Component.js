class Component {
  element;

  constructor(parentElement, tag, classNameOfComponent) {
    this.element = document.createElement(tag);
    this.element.className = classNameOfComponent;
    parentElement.append(this.element);
  }
}

export default Component;
