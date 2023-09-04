import { createElement } from "../render.js";

function createTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class EventListView {


  getElement() {
    if (!this.element) {
      this.element = createElement(createTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
