Node Todo CRUD -- pub/sub style
===============================

```bash
  
$ npm install && node actions.js
  
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

#### Single Todo

__- Add task name__ ( *wrap in quotes for multiple words* )
  
__- Remove and Complete by name or id__
 
```bash
    
$ node actions.js -A- 'wash the cat' 
  
  or
    
$ node actions.js -R- dishes 
  
  or
    
$ node actions.js -C- 1
  
```

#### Multiple Todos
__- Same deal for multiple arguments__
 
```bash
  
$ node actions.js -A- 'sand floor' 'paint fence' 'wax on' shopping
  
 or

$ node actions.js -R- 0 3 1 
  
  or
    
$ node actions.js -C- 'wax on' shopping 
  
```

#### List all Todos

```
  
$ node actions.js -L-
  
```

#### Empty

```bash
  
$ node actions.js -E- 
  
```
    