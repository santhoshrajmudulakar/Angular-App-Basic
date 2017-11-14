
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
 

const routes: Routes = [
    { path: '', redirectTo: 'components/about', pathMatch: 'full', },
    { path: 'components/home', component : HomeComponent },
    { path: 'components/about', component : AboutComponent }
     
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 