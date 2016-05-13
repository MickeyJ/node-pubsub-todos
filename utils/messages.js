require('colors');

module.exports = {
  
  helpText: (user) => (
    `\nWelcome ${user}!\n`.bold +
    ` - Here are some instructions and examples\n`.green +
    `===========================================\n\n` +

    `List all todos\n`.bold +
    `———————————————\n` +
    `$ `+`node index.js`.blue+` -L-\n\n`.yellow +

    `Empty todos list\n`.bold +
    `—————————————————\n` +
    `$ `+`node index.js`.blue+` -E-\n\n`.yellow +

    `Add todos\n`.bold +
    `——————————\n` +
    `$ `+`node index.js`.blue+` -A- 'sand the floor'\n`.yellow +
    `$ `+`node index.js`.blue+` -A- 'paint the fence' 'wax on/wax off'\n\n`.yellow +

    `Remove by NAME or ID\n`.bold +
    `—————————————————————\n` +
    `$ `+`node index.js`.blue+` -R- 'paint the fence'\n`.yellow +
    `$ `+`node index.js`.blue+` -R- 1\n`.yellow +
    `$ `+`node index.js`.blue+` -R- 'wax on/wax off' 'sand the floor' 'paint the fence'\n`.yellow +
    `$ `+`node index.js`.blue+` -R- 0 2 4 7\n\n`.yellow +

    `Complete by NAME or ID\n`.bold +
    `———————————————————————\n` +
    `$ `+`node index.js`.blue+` -C- 'paint the fence'\n`.yellow +
    `$ `+`node index.js`.blue+` -C- 1\n`.yellow +
    `$ `+`node index.js`.blue+` -C- 'wax on/wax off' 'sand the floor' 'paint the fence'\n`.yellow +
    `$ `+`node index.js`.blue+` -C- 0 2 4 7\n\n`.yellow
  ),
  
  listAllTodos: (id, task, completed) => (
    `  ${id}`.yellow+`: `+`${task}`.blue+` - ${completed}`
  ),
  
  addSuccess: (id, task) => (
    `  ${id}`.yellow+`: `+`${task}`.blue
  ),
  
  removeSuccess: (id, task) => (
    `  ${id}`.red+`: `+`${task}`.green+` - X`
  ),
  
  completeSuccess: (id, task, completed) => (
    `  ${id}`.yellow+`: `+`${task}`.blue+` is now ${completed}`
  ),
  
  isCompleteFilter: (bool) =>(
    bool ? 'complete'.green : 'incomplete'.red
  ),

  searchError: (todo) => (
    `  "${todo}"`.green+` cannot be found`.toUpperCase().red
  ),
  
  emptySuccess: (
    `\n  Todo list is now empty!`.magenta.bold
  )

};