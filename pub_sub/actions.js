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
  remove(id){
    dispatcher.dispatch('REMOVE', id)
  },
  complete(id){
    dispatcher.dispatch('COMPLETE', id)
  },
  empty(){
    dispatcher.dispatch('EMPTY')
  }
};

// Exporting to Index
//———————————————————————
module.exports = Actions;
