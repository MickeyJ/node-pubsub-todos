const dispatcher = require('./dispatcher');
const Store = require('./store');

dispatcher.register('HELP', () =>{
  Store.displayHelp()
});

dispatcher.register('LIST', () =>{
  Store.todoSearchMethod(null, Store.listTodos)
});

dispatcher.register('ADD', (payload) =>{
  Store.todoSearchMethod(payload, Store.addTodo)
});

dispatcher.register('REMOVE', (payload) =>{
  Store.todoSearchMethod(payload, Store.removeTodo)
});

dispatcher.register('COMPLETE', (payload) =>{
  Store.todoSearchMethod(payload, Store.completeTodo)
});

dispatcher.register('EMPTY', () =>{
  Store.todoSearchMethod(null, Store.emptyTodos)
});

//  Pass registered methods to Actions
//——————————————————————————————————————
module.exports = dispatcher;
  