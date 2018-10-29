import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { LoginComponent } from "../component/login/login.component";


const routes: Routes = [
  {
    path: 'login', component : LoginComponent
  },
  {
    path : 'home' , component : DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
