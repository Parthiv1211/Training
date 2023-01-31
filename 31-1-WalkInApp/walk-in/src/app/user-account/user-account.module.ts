import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Page1Component } from './create-account/page1/page1.component';
import { Page2Component } from './create-account/page2/page2.component';
import { Page3Component } from './create-account/page3/page3.component';



@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CreateAccountComponent,
    Page1Component,
    Page2Component,
    Page3Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet
  ]
})
export class UserAccountModule { }
