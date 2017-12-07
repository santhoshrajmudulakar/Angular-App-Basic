import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

let todos = [
 { _id: 1, title: 'Install Angular CLI', isDone: true },
  { _id: 2, title: 'Style app', isDone: true },
   { _id: 3, title: 'Finish service functionality', isDone: false }, 
   { _id: 4, title: 'Setup API', isDone: false },
];


@Injectable()
export class AuthService {
<<<<<<< HEAD
  constructor(private http: Http) {

   }
  
  GetPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(result => result.json());
    
  }

  GetPostAsPerId(Id: any){
    return this.http.get('https://jsonplaceholder.typicode.com/posts' + Id)
    .map(result => result.json());
  }
=======
  
  public auth : boolean = false;


>>>>>>> 2f5c0cf9b38122b7934aaffa67f621dc1e9506da

  }
<<<<<<< HEAD
=======

 


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
>>>>>>> 2f5c0cf9b38122b7934aaffa67f621dc1e9506da
