import form from "./view.js/formView.js";
import task from "./view.js/taskView.js";

const controlForm = (data) => {
  task._generateMarkUp(data);
};

const init = () => {
  form._addTask(controlForm);
};

init();
