'use strict';
const helper = require('./../utils/helper');
const msg = require('./../utils/messages');
let todos = require('../assets/todos.json');
require('colors');

const Store = {
  todoSearchMethod(args, callback){
    process.stdout.write('\n');
    if(!args) args = [1];
    for(let i of args) callback(i)
    helper.write('assets/todos.json', todos);
    process.stdout.write('\n');
  },

  displayHelp(){
    const user = process.cwd().split(/\//)[2];
    console.log( msg.helpText(user) );
  },
  
  listTodos(){
    let completed;
    todos.forEach(x =>{
      completed = x.complete ? 'complete'.green : 'incomplete'.red;
      console.log( msg.listAllTodos(x.id, x.task, completed) );
    });
  },

  addTodo(task){
    let id = helper.getId(todos);
    todos.push({ id, task, complete: false });
    console.log( msg.addSuccess(id, task) );
  },

  removeTodo(todo){
    let id, task;
    todos.map((x, i) =>{
      if (x.id == todo || x.task == todo) {
        id = x.id;
        task = x.task;
        if(x.complete === false){
          msg.removeCheckCompleted(task, msg.removeSuccess(id, task) );
          todos.splice(i, 1);
        } else {
          console.log( msg.removeSuccess(id, task) );
          todos.splice(i, 1);
        }
      }
    });
  },

  completeTodo(todo){
    let id, task, completed;
    todos = todos.map((x) =>{
      if(x.id == todo || x.task == todo){
        id = x.id;
        task = x.task;
        completed = !x.complete ? 'complete'.green : 'incomplete'.red;
        return Object.assign({}, x, {complete: !x.complete})
      } else {
        return x
      }
    });
    console.log( msg.completeSuccess(id, task, completed) );
  },

  emptyTodos(){
    todos.forEach(x =>{
      console.log( msg.removeSuccess(x.id, x.task) );
    });
    todos = [];
    console.log( msg.emptySuccess );
  }
};

// Exporting to Register
//———————————————————————
module.exports = Store;
