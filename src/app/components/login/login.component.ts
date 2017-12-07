import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {

  name: string;
  data: any;

  //Get one from list
  PostId: string;
  SinglePost: any;

  constructor(private authService: AuthService) {
    this.name = "List";
    this.authService.GetPosts()
    .subscribe(posts => { this.data = posts }); 

    //Get one from list
    this.PostId = "0";
    this.SinglePost = {
      id:'',
      userId:'',
      title:'',
      body:'',
    }
   }


   //Get one from list
   GetPost(){
     this.authService.GetPostAsPerId(this.PostId)
     .subscribe(post => {this.SinglePost = post });
   }

  ngOnInit() {
  }
  
}
