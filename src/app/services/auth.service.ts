import { Injectable } from '@angular/core';

let todos = [
 { _id: 1, title: 'Install Angular CLI', isDone: true },
  { _id: 2, title: 'Style app', isDone: true },
   { _id: 3, title: 'Finish service functionality', isDone: false }, 
   { _id: 4, title: 'Setup API', isDone: false },
];


@Injectable()
export class AuthService {
  
  public auth : boolean = false;



  constructor() { }
  // @todo api integration
  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if(username == 'admin' && password == 'admin')
       {
        localStorage.setItem('auth', username);
         this.auth = true;
         resolve(true);
       }
    });
  }

 


add(data) {
  return new Promise(resolve => {
    todos.push(data);
    resolve(data);
  });
}
put(data) {
  return new Promise(resolve => {
    let index = todos.findIndex(todo => todo._id === data._id);
    todos[index].title = data.title;
    resolve(data);
  });
}

delete(id) {
  return new Promise(resolve => {
    let index = todos.findIndex(todo => todo._id === id);
    todos.splice(index, 1);
    resolve(true);
  });
}


get(query = ''){
  return new Promise(resolve => {
    var data;
    if(query === 'completed' || query === 'active'){
      var isCompleted = query === 'completed';
      data = todos.filter(todo => todo.isDone === isCompleted);
    } else {
      data = todos;
    }
    resolve(data);
  });
}

deleteCompleted() {
  return new Promise(resolve => {
    todos = todos.filter(todo => !todo.isDone);
    resolve(todos);
  });
}

}
