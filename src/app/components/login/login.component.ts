import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  name: string;
  data: any;

  constructor(private authService: AuthService, private router: Router) {
    this.name = "List";
    this.authService.GetPosts()
    .subscribe(posts => { this.data = posts }); 
   }

  ngOnInit() {
  }
  

  }

  

}
