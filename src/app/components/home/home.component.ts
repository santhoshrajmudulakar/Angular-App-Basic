import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    private todos;
    private activeTasks;
    private newTodo;
     private path;
    values = '';
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  
  
  ngOnInit() {
    this.route.params.subscribe(params => {
    this.path = params['status'];
    this.getTodos(this.path);
  });
  }

  getTodos(query = ''){
    return this.authService.get(query).then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
    });
  }

  
  addTodo(){
    this.authService.add({ title: this.newTodo, isDone: false }).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = ''; // clear input form value
    });
  }

  updateTodo(todo, newValue) {
    todo.title = newValue;
    return this.authService.put(todo).then(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }

  destroyTodo(todo){
  this.authService.delete(todo._id).then(() => {
    return this.getTodos();
  });
}

clearCompleted() {
  this.authService.deleteCompleted().then(() => {
    return this.getTodos();
  });
}

}
