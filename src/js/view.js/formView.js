import TodoAppView from "./todoAppView.js";

class FormView extends TodoAppView {
  _input__text = document.querySelector(".form__text");

  constructor() {
    super();
  }

  _addTask(handler) {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const submitBtn = e.target.closest(".submit__Btn");
      if (!submitBtn) return;
      if (this._textEl.value !== "") handler(this._textEl.value);
      else this._input__text.classList.toggle("active");
    });
  }
}
export default new FormView();
