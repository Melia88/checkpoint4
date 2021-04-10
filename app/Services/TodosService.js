import { sandboxApi } from "./AxiosService.js";
import {ProxyState} from '../AppState.js'
import Todo from "../Models/Todo.js";

class TodosService{

  constructor(){

    // console.log('hi from service')
  }

 async addTodos(newTodo) {
  let res = await sandboxApi.post('Melia/Todos', newTodo)
  // console.log(res.data)
  let todo = new Todo(res.data)
  ProxyState.todos = [...ProxyState.todos, todo]


  }
  async getTodos(){
    let res = await sandboxApi.get('Melia/Todos')
    // console.log('Service response', res);
    ProxyState.todos = res.data.map(t => new Todo(t))

  }
async completedTodo(id) {
    // find it
    // and hold it
    let todoChecked = ProxyState.todos.find(t => t.id === id)
    // flip the value of completed
    if(todoChecked.completed){
      await sandboxApi.put('Melia/Todos/'+ id, {completed: false})
      todoChecked.completed = false
    }
    // then Put request to edit it on the API
    else {
      await sandboxApi.put('Melia/Todos/'+ id, {completed: true})
      todoChecked.completed = true
    }

    ProxyState.todos = ProxyState.todos
  }


 async deleteTodo(id) {

   if(window.confirm('You Sure About That Delete?')){
    //  ask sandbox to delete based on an id
     await sandboxApi.delete('Melia/Todos/'+ id)
     
    // after the = says filter itterates/loops over all the ids and keeps all that are NOT the id that I clicked on(deletes the id that we clicked on). Before the = says update the ProxyState w what just happened
     ProxyState.todos = ProxyState.todos.filter(i => i.id != id)     
    }
  }  
  
}


export const todosService = new TodosService();