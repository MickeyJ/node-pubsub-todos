'use strict';

class Dispatcher{
  constructor(){
    this.events = {}
  }
  register(action, cb){
    this.events[action] = this.events[action] || [];
    this.events[action].push(cb)
  }
  dispatch(action, payload){
    if(this.events[action]){
      this.events[action].forEach((cb) =>{
        cb(payload)
      })
    }
  }
}

// Exporting to Register
//———————————————————————
module.exports = new Dispatcher;
