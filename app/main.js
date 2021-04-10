// import ValuesController from "./Controllers/ValuesController.js";

import ImagesController from "./Controllers/ImagesController.js";
import TodosController from "./Controllers/TodosController.js";
import WeathersController from "./Controllers/WeathersContoller.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController();
  imagesController = new ImagesController();
  weathersController = new WeathersController();
}

window["app"] = new App();
