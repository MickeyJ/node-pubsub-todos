const dispatcher = require('./dispatcher');
const Store = require('./Store');

dispatcher.register('HELP', (message) =>{
  console.log(message);
});

dispatcher.register('ADD', (payload) =>{
  Store.changeTodos(payload, Store.addTodo)
});

dispatcher.register('REMOVE', (payload) =>{
  Store.changeTodos(payload, Store.removeTodo)
});

dispatcher.register('COMPLETE', (payload) =>{
  Store.changeTodos(payload, Store.completeTodo)
});

dispatcher.register('EMPTY', () =>{
  Store.changeTodos(null, Store.emptyTodos)
});

//  Pass Dispatcher to Actions
//——————————————————————————————
module.exports = dispatcher;
  