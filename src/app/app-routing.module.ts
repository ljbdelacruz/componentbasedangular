import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LogincomponentComponent} from './page/logincomponent/logincomponent.component'
import {DashboardComponent} from './page/dashboard/dashboard.component'

const routes: Routes = [
  { path: '', component: LogincomponentComponent },
  { path: 'login', component: LogincomponentComponent },
  { path: 'home', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
