import {ProxyState} from '../AppState.js'
import { todosService } from '../Services/TodosService.js';

function _drawTodo() { 
  let todoTotal = ProxyState.todos.length 
    let todosLeft = ProxyState.todos.filter(t => t.completed == false).length
    let template = ''
    template += `<p class="text-center text-light"> ${todosLeft} / ${todoTotal} </p>`
  ProxyState.todos.forEach(t => template += t.Template)
  document.getElementById('todo').innerHTML = template
  // console.log('draw function');

}



export default class TodosController {
  constructor() {
    ProxyState.on("todos", _drawTodo);
    

    // console.log('Hi from controller');
    this.getTodos()

  }

  addTodo(){
    window.event.preventDefault()
    let form = window.event.target
    let rawTodo = {
      description: form['addTodo'].value
    }
    todosService.addTodos(rawTodo)
    // @ts-ignore
    form.reset()
    
  }
 async getTodos(){
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error(error);
    }
  }

  completedTodo(id){
    todosService.completedTodo(id)
  }

  deleteTodo(id) {
    todosService.deleteTodo(id)
  }

}