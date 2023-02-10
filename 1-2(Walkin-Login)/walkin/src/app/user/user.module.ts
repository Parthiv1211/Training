import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material 

// import {MatButtonModule} from '@angular/material/button';

// Component
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { Page1Component } from './signup/page1/page1.component';
import { Page2Component } from './signup/page2/page2.component';
import { Page3Component } from './signup/page3/page3.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    Page1Component,
    Page2Component,
    Page3Component,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
