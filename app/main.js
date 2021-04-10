// import ValuesController from "./Controllers/ValuesController.js";

import ImagesController from "./Controllers/ImagesController.js";
import TodosController from "./Controllers/TodosController.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController();
  imagesController = new ImagesController();
}

window["app"] = new App();
