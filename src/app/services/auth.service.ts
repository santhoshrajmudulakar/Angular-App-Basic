import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {
  constructor(private http: Http) {

   }
  
  GetPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(result => result.json());
    
  }

  GetUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(result => result.json());
  }

}
