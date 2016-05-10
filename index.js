const cmd = require('./utils/commands');
const Actions = require('./pub_sub/actions');

switch(cmd.TYPE.toUpperCase()) {
  
  case cmd.HELP:
    return Actions.help();
  
  case cmd.ADD:
    return Actions.add(cmd.INPUT);
  
  case cmd.REMOVE:
    return Actions.remove(cmd.INPUT);
  
  case cmd.COMPLETE:
    return Actions.complete(cmd.INPUT);

  case cmd.EMPTY:
    return Actions.empty();
  
  default:
    return Actions.help();
}

