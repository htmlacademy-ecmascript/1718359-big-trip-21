import SortView from "../view/sort-view.js";
import EventListView from "../view/event-list-view.js";
import EventsListItemView from "../view/event-list-item-view.js";
import EventEditView from "../view/event-edit-view.js";
import { render } from "../render.js";

export default class EventPresenter {
  eventListViewComponent = new EventListView();

  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new SortView(), this.boardContainer);
    render(this.eventListViewComponent, this.boardContainer);
    render(new EventEditView(), this.eventListViewComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(
        new EventsListItemView(),
        this.eventListViewComponent.getElement()
      );
    }
  }
}
