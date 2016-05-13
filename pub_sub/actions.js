const dispatcher =require('./register_store');
require('colors');

const Actions = {
  help(){
    dispatcher.dispatch('HELP')
  },
  list(){
    dispatcher.dispatch('LIST')
  },
  add(task){
    dispatcher.dispatch('ADD', task)
  },
  remove(todo){
    dispatcher.dispatch('REMOVE', todo)
  },
  complete(todo){
    dispatcher.dispatch('COMPLETE', todo)
  },
  empty(){
    dispatcher.dispatch('EMPTY')
  }
};

// Exporting to Index
//———————————————————————
module.exports = Actions;
