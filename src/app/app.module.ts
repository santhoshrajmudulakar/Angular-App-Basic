import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
