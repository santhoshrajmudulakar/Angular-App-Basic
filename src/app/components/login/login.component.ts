import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    private username: string = "admin";
  private password: string = "admin321";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  

  login(): void {
    if(this.username && this.password){
      this.authService.login(this.username, this.password)
      .then(success => {
        console.log(":: login ::",success);
        this.router.navigate(['/components/home']);
        // this.generateVoucher();
      })
    }
  }

  

}
