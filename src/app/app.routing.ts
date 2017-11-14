
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
 

const routes: Routes = [
    { path: '', redirectTo: 'components/login', pathMatch: 'full', },
    { path: 'components/home', component : HomeComponent },
    { path: 'components/login', component : LoginComponent }
     
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 