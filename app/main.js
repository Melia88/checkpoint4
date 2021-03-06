import ClocksController from "./Controllers/ClocksController.js";
import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TodosController from "./Controllers/TodosController.js";
import WeathersController from "./Controllers/WeathersContoller.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController();
  imagesController = new ImagesController();
  weathersController = new WeathersController();

  quotesController = new QuotesController();
  clocksController = new ClocksController();
}

window["app"] = new App();
