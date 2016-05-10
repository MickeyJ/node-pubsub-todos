## Node Todo App pub-sub style

```bash
  
$ npm install
  
```

#### Add
* __One task__
 
```bash
$ node index.js -A cleaning 
  
  or
    
$ node index.js -A 'wash the car' 
```

* __Multiple tasks__
 
```bash
$ node index.js -A 'sand floor' 'paint fence' 'wax on' 'wax off' 
```

#### Remove
* __One task by name or id__
 
```bash
$ node index.js -R cleaning 
  
  or
    
$ node index.js -R 2 
```

* __Multiple tasks__

```bash
$ node index.js -R 'wax on' 'wax off' 
  
  or
    
$ node index.js -R 2 3 
```

#### Empty
```bash
$ node index.js -E 
```