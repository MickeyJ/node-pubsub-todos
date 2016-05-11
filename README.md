Node Todo CRUD -- pub/sub style
===============================

```bash
  
$ npm install && node index.js -H-
  
```

#### Commands
( accepts lowercase and uppercase )
>
|   cmd   |                    |
|:-------:|--------------------|
| __-H-__ |   get help         |
| __-L-__ |   list items       |
| __-A-__ |   add todo         |
| __-R-__ |   remove todo      |
| __-C-__ |   complete todo    |
| __-E-__ |   empty todo list  | 
```
$ node index.js -L-
```

#### Single Todo

__- Add task name__ ( *wrap in quotes for multiple words* )
  
__- Remove and Complete by name or id__
 
```bash
    
$ node index.js -A- 'wash the cat' 
  
  or
    
$ node index.js -R- dishes 
  
  or
    
$ node index.js -C- 1
  
```

#### Multiple Todos
__- Same deal for multiple arguments__
 
```bash
  
$ node index.js -A- 'sand floor' 'paint fence' 'wax on' shopping
  
 or

$ node index.js -R- 0 3 1 
  
  or
    
$ node index.js -C- 'wax on' shopping 
  
```

#### Empty
```bash
  
$ node index.js -E- 
  
```
    