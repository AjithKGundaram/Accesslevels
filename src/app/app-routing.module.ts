import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesslevelComponent } from '../app/accesslevel/accesslevel.component';


const routes: Routes = [
  {
    path: 'access',
    component: AccesslevelComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
