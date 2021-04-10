import {ProxyState} from "../AppState.js"
export default class Todo{
  constructor({user, description, id, completed}) {
   this.user = user 
   this.description = description
   this.id = id
   this.completed = completed
  }

  get Template() {
    return /** html*/  `
   
    <div class ="col-12 my-2"><input type="checkbox" aria-label="Task Checkbox" class="action cursor" id="todo-ck-box" 
  onclick="app.todosController.completedTodo('${this.id}')" 
  ${this.completed ? 'checked' : ''}>
  ${this.description} <i class="fas fa-times ml-3 text-danger" title='Delete Your ToDo'
  onclick="app.todosController.deleteTodo('${this.id}')"
  ></i></div>
    `
  }

 
}