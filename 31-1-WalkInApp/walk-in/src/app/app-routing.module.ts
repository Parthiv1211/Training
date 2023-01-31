import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './user-account/create-account/create-account.component';
import { Page1Component } from './user-account/create-account/page1/page1.component';
import { Page2Component } from './user-account/create-account/page2/page2.component';
import { Page3Component } from './user-account/create-account/page3/page3.component';
import { LoginComponent } from './user-account/login/login.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"signup",
    component:CreateAccountComponent,
    children:
    [
      {
        path:"",
        component:Page1Component
      },
      {
        path:"page2",
        component:Page2Component
      },
      {
        path:"page3",
        component:Page3Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
