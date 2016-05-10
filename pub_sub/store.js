'use strict';
const helper = require('./../utils/helper');
let todos = require('../assets/todos.json');
require('colors');

const Store = {
  changeTodos(args, callback){
    if(!args) args = [1];
    for(let i of args) callback(i)
    helper.write('assets/todos.json', todos);
    console.log(JSON.stringify(todos, null, 2).yellow);
  },
  addTodo(todo){
    todos.push({
      id: helper.getId(todos),
      task: todo,
      complete: false
    })
  },
  removeTodo(todo){
    todos.map((x, i) =>{
      if (x.id == todo || x.task == todo) {
        todos.splice(i, 1);
      }
    });
  },
  completeTodo(todo){
    todos = todos.map((x) =>(
      x.id == todo || x.task == todo
        ? Object.assign({}, x, {complete: !x.complete})
        : x
    ))
  },
  emptyTodos(){
    todos = []
  }
};

// Exporting to Register
//———————————————————————
module.exports = Store;
