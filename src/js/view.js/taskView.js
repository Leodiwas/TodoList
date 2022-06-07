import TodoAppView from "./todoAppView.js";

class TaskView extends TodoAppView {
  _todo_listBox = document.querySelector(".todo__list");

  constructor() {
    super();
    this._viewTask();
  }

  _generateMarkUp(data) {
    this._sNO++;

    const markUp = `
        <li class="todo__list-items">
            <a href="" data-todo-id="1">
                <div class="todo__task">
                    <span class="todo__task_no">${this._sNO}</span>
                    <p class="todo__task_title">${data}</p>
                </div>
                <svg class="todo__list-items-svg-delete">
                    <use href="./icon/close.svg#close"></use>
                </svg>
            </a>
        </li>
        `;
    this._todo_listBox.insertAdjacentHTML("beforeend", markUp);
  }

  _viewTask() {
    this._parentEl.addEventListener("click", (e) => {
      const viewBtn = e.target.closest(".todo__list-items");
      if (!viewBtn) return;
    });
  }
}
export default new TaskView();
