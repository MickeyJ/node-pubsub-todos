const dispatcher =require('./register_store');
require('colors');
// noinspection JSUnresolvedFunction

const Actions = {
  add: (task) =>(
    dispatcher.dispatch('ADD', task)
  ),
  remove: (id) =>(
    dispatcher.dispatch('REMOVE', id)
  ),
  complete: (id) =>(
    dispatcher.dispatch('COMPLETE', id)
  ),
  empty: () =>(
    dispatcher.dispatch('EMPTY')
  ),
  help: () =>(
    dispatcher.dispatch('HELP' , (
      `Oops... Try this:\n`.magenta +
      `  node index.js -a 'clean house' 'make lunch'`.green
    ))
  )
};

// Exporting to Index
//———————————————————————
module.exports = Actions;
