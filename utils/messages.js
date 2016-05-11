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
    `  ${id}`.red+`: `+`${task}`.green
  ),
  
  removeCheckCompleted(task, message){
    process.stdin.resume();
    process.stdout.write(
      `Incomplete task - `+`${task}\n`.red +
      `... sure you want to delete it?`+` [n/y]`.yellow
    );
    process.stdin.on('data', function (res) {
      if(res == "y\n")
        process.stdout.write(`\ndeleted: ${message}\n\n`);
        process.stdin.end();
      if(res == "n\n")
        process.stdout.write(`\nWell, i haven't figured this out yet so you todo was deleted anyway\n\n`);
        process.exit(1);
    });
    process.stdin.on('end', function () {
      process.stdout.write('end');
    });
  },
  
  completeSuccess: (id, task, completed) => (
    `  ${id}`.yellow+`: `+`${task}`.blue+` is ${completed}`
  ),
  
  emptySuccess: (
    `\n  Todo list is now empty!`.magenta.bold
  )

};