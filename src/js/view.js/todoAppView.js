export default class TodoAppView {
  _parentEl = document.querySelector(".todo__app");
  _textEl = document.querySelector(".form__text");
  _sNO = 0;
  _list_items = [];

  constructor() {
    this._clear();
    this._delete();
  }

  _clear() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const clearTextBtn = e.target.closest(".clear");
      if (!clearTextBtn) return;

      this._textEl.value = "";
    });
  }

  _delete() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const delBtn = e.target.closest(".todo__list-items-svg-delete");
      if (!delBtn) return;

      return delBtn.parentNode.parentNode.remove();
    });
  }
}
