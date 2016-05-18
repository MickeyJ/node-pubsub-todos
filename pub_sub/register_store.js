const dispatcher = require('./dispatcher');
const Store = require('./store');

dispatcher.register('HELP', () =>{
  Store.displayHelp()
});

dispatcher.register('LIST', () =>{
  Store.inputSearchMethod(null, Store.listTodos)
});

dispatcher.register('ADD', (payload) =>{
  Store.inputSearchMethod(payload, Store.addTodo)
});

dispatcher.register('REMOVE', (payload) =>{
  Store.inputSearchMethod(payload, Store.removeTodo)
});

dispatcher.register('COMPLETE', (payload) =>{
  Store.inputSearchMethod(payload, Store.completeTodo)
});

dispatcher.register('EMPTY', () =>{
  Store.inputSearchMethod(null, Store.emptyTodos)
});

//  Pass registered methods to Actions
//——————————————————————————————————————
module.exports = dispatcher;
  