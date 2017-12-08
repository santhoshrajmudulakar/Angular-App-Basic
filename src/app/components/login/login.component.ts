import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {

  
  data: any;
  showId = false;
  


  constructor(private authService: AuthService) {
    
    this.authService.GetPosts()
    .subscribe(posts => { this.data = posts }); 

   
   }

   toggleId() {
    this.showId = !this.showId;
  }

   

  ngOnInit() {
  }
  
}
