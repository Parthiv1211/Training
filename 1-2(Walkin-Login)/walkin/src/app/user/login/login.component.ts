import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  green="darkgreen";
  btncolor="green";

  valid_user=false;

  validatelogin(data:any)
  {
    console.log(data);
    this.valid_user=true;
    console.log(this.valid_user);
    if(this.valid_user)
    window.location.href = '/login';
    else
    window.location.href = '';
  }
  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  call_me()
  {
   
  }
}
