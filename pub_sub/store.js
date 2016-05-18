'use strict';
const helper = require('./../utils/helper_methods');
const msg = require('./../utils/messages');
let todos = require('../assets/todos.json');
require('colors');

const Store = {

  todoSearchMethod(args, callback){
    process.stdout.write('\n');
    if(!args) args = [1];
    for(let i of args) callback(i)
    helper.writeToJSON('assets/todos.json', todos);
    process.stdout.write('\n');
  },

  displayHelp(){
    const user = process.cwd().split(/\//)[2];
    console.log( msg.helpText(user) );
  },
  
  listTodos(){
    let completeText;
    todos.forEach(x =>{
      completeText = msg.isCompleteFilter(x.complete);
      console.log( msg.listAllTodos(x.id, x.task, completeText) );
    });
  },

  addTodo(task){
    let id = helper.getNextId(todos);
    todos.push({ id, task, complete: false });
    console.log( msg.addSuccess(id, task) );
  },

  removeTodo(input){
    let results = [], newTodos = [];
    todos.map((x) =>{
      if(x.id == input || x.task == input) {
        results.push(x);
        console.log( msg.removeSuccess(x.id, x.task) );
      } else {
        newTodos.push(x)
      }
    });
    if(!results.length)
      console.log( msg.searchError(input) );
    else
      todos = newTodos
  },

  completeTodo(input){
    const results = [];
    let completeText;
    todos = todos.map((x) =>{
      if(x.id == input || x.task == input){
        results.push(x);
        completeText = msg.isCompleteFilter(!x.complete);
        console.log( msg.completeSuccess(x.id, x.task, completeText) );
        return Object.assign({}, x, {complete: !x.complete})
      } else {
        return x
      }
    });
    if(!results.length)
      console.log( msg.searchError(input) );
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
