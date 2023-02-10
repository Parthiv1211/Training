import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class Page1Component {

  @Output() newItemEvent = new EventEmitter<any>();

 
  getdata(data:any)
  {
    if(data.fname=='') data.fname='-';
    if(data.lname=='') data.lname='-';
    if(data.email=='') data.email='-';
    if(data.p_country=='') data.p_country='-';
    if(data.p_number=='') data.p_number='-';
    if(data.url=='') data.url='-';
    if(data.instructional=='') data.instructional=false;
    if(data.software=='') data.software=false;
    if(data.quality=='') data.quality=false;
    if(data.referral=='') data.referral='-';
    if(data.subscription=='') data.subscription=false;

    console.log(data);
    this.newItemEvent.emit(data);
  }


  firstFormGroup = this._formBuilder.group({
    fname: ['',Validators.required],
    lname: ['',Validators.required],
    email: ['',Validators.required],
    p_country: ['',Validators.required],
    p_number: ['',Validators.required],
    url: [''],
    instructional:['',Validators.required],
    software:['',Validators.required],
    quality:['',Validators.required],
    referral:[''],
    subscription:['']
  });

  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {}

  
}
