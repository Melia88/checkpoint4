import {ProxyState} from "../AppState.js"
export default class Todo{
  constructor({user, description, id, completed}) {
   this.user = user 
   this.description = description
   this.id = id
   this.completed = completed
  }

  get Template() {
    return /*html */ `
    <div class ="col-12 my-3 text-light"><input type="checkbox" aria-label="Task Checkbox" id="todo-ck-box" 
  onclick="app.todosController.completedTodo('${this.id}')" 
  ${this.completed ? 'checked' : ''}>
  ${this.description} <i class="cursor fas fa-trash-alt ml-0 text-light" title='Delete Your ToDo'
  onclick="app.todosController.deleteTodo('${this.id}')"
  ></i></div>
    `
  
  }

 
}