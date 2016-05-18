const cmd = require('./utils/commands');
const dispatcher =require('./pub_sub/register_store');

switch(cmd.TYPE.toUpperCase()) {
  
  case cmd.HELP:
    return dispatcher.dispatch('HELP')

  case cmd.LIST:
    return dispatcher.dispatch('LIST')
  
  case cmd.ADD:
    return dispatcher.dispatch('ADD', cmd.INPUT) 
  
  case cmd.REMOVE:
    return dispatcher.dispatch('REMOVE', cmd.INPUT)
  
  case cmd.COMPLETE:
    return dispatcher.dispatch('COMPLETE', cmd.INPUT)

  case cmd.EMPTY:
    return dispatcher.dispatch('EMPTY')
  
  default:
    return dispatcher.dispatch('HELP')
}

