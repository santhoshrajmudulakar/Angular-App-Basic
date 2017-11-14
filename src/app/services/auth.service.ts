import { Injectable } from '@angular/core';




@Injectable()
export class AuthService {

  public auth : boolean = false;



  constructor() { }
  // @todo api integration
  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if(username == 'admin' && password == 'admin321')
       {
        localStorage.setItem('auth', username);
         this.auth = true;
         resolve(true);
       }
    });
  }
}
