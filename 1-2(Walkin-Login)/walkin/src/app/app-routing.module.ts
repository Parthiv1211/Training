import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletePageComponent } from './complete-page/complete-page.component';
import { DetailedListComponent } from './detailed-list/detailed-list.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent,
  },
  {
    path:"login",
    component:ListingPageComponent,
  },
  {
    path:"login/:id",
    component:DetailedListComponent
  },
  {
    path:"login/:id/success",
    component:CompletePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
