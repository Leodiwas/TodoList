import TodoAppView from "./todoAppView.js";

class TaskView extends TodoAppView {
  _content = document.querySelector(".content");

  constructor() {
    super();
    this._viewTask();
    this._viewTaskDelete();
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
      const viewContentBtn = e.target.closest(".todo__task_title");
      if (!viewContentBtn) return;

      this._content.textContent = viewContentBtn.textContent;
      return this._overlay();
    });
  }

  _viewTaskDelete() {
    this._parentEl.addEventListener("click", (e) => {
      const viewDeleteBtn = e.target.closest(".contentView__closeBtn");
      if (!viewDeleteBtn) return;

      return this._overlay();
    });
  }
}
export default new TaskView();
