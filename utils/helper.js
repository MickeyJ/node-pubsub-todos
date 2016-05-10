
exports.write = (FILE, data) =>{
  require('fs').writeFile( FILE, 
    JSON.stringify(data, null, 2), (err) =>{
      if(err){
        console.error(err);
        process.exit(1)
      }
  })
};

exports.getId = (todos)=>(
  todos.reduce((max, x) => 
    Math.max(x.id, max), -1) +1
);
