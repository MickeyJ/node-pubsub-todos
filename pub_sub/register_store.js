const dispatcher = require('./dispatcher');
const Store = require('./Store');

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

//  Pass Dispatcher to Actions
//——————————————————————————————
module.exports = dispatcher;
  