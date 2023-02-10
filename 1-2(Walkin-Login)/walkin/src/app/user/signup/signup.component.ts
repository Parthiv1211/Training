import { Component, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent {
  firstFormGroup:any={};
  secondFormGroup:any={};
  isCompleted:false;


  disabled:boolean=true;

  addItem1(newItem: string) {
    this.firstFormGroup=newItem;
    const ele=document.querySelector("app-page3");
    ele.setAttribute("ng-reflect-first-form-group",this.firstFormGroup);
    console.log(this.firstFormGroup);
  }
  addItem2(newItem: string) {
    this.secondFormGroup=newItem;
    let ele=document.querySelector("app-page3");
    ele.setAttribute("ng-reflect-second-form-group",this.secondFormGroup);

    this.disabled=false;

    console.log(this.secondFormGroup);
  }

  dis_btn()
  {
    this.disabled=true;
  }
  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {}

  

  
}
