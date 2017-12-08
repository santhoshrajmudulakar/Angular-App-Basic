import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
;

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


import { AuthService } from './services/auth.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,    
  ],
  imports: [
    BrowserModule,

    HttpModule,
    FormsModule,
    routing

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
