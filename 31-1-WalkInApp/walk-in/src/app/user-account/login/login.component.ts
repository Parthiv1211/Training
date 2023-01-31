import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username:string="";
  password:string="";
  remember:string="";

  FormSubmit(loginform:any)
  {
    // console.log(loginform);
    this.username=loginform.username;
    this.password=loginform.password;
    this.remember=loginform.remember;

    console.log(loginform);
  }
}
