import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {

  @Output() newItemEvent = new EventEmitter<any>();

  getdata(data:any)
  {
      if(data.percentage=='')data.percentage='-';
      if(data.passing_year=='')data.passing_year='-';
      if(data.qualification=='')data.qualification='-';
      if(data.stream=='')data.stream='-';
      if(data.college_name=='Other')data.college_name='-';
      if(data.college_name!='-' || data.other_college_name=='')data.other_college_name='-';
      if(data.college_location=='')data.college_location='-';

      if(data.experience=='')data.experience='-';
      if(data.current_ctc=='')data.current_ctc='-';
      if(data.expected_ctc=='')data.expected_ctc='-';
      
      if(data.e_Javascript=='')data.e_Javascript=false;
      if(data.e_Angular_JS=='')data.e_Angular_JS=false;
      if(data.e_React=='')data.e_React=false;
      if(data.e_Node_JS=='')data.e_Node_JS=false;
      if(data.e_Others==true)data.e_Others='-';
      
      if(data.f_Javascript=='')data.f_Javascript=false;
      if(data.f_Angular_JS=='')data.f_Angular_JS=false;
      if(data.f_React=='')data.f_React=false;
      if(data.f_Node_JS=='')data.f_Node_JS=false;
      if(data.f_Others==true)data.f_Others='-';
      
     
      if(data.notice_period=='')data.notice_period='No';
      if(data.notice_period=='No' || data.notice_period_end=='')data.notice_period_end='-';
      if(data.notice_period=='No' ||data.notice_period_month=='')data.notice_period_month='-';

      if(data.previous_test=='')data.previous_test='No';
      if(data.previous_test=='No' || data.previous_test_role=='')data.previous_test_role='-';
    
      this.newItemEvent.emit(data);
      
    // console.log(data);
  }

  secondFormGroup = this._formBuilder.group({
    percentage:[''],
    passing_year:[''],
    qualification:[''],
    stream:[''],
    college_name:[''],
    other_college_name:[''],
    college_location:[''],
    type_of_applicant:['Experienced'],
    experience:[''],
    current_ctc:[''],
    expected_ctc:[''],
    e_Javascript: [''],
    e_Angular_JS: [''],
    e_React: [''],
    e_Node_JS: [''],
    e_Others: [''],
    f_Javascript: [''],
    f_Angular_JS: [''],
    f_React: [''],
    f_Node_JS: [''],
    f_Others: [''],
    notice_period:[''],
    notice_period_end:[''],
    notice_period_month:[''],
    previous_test:[''],
    previous_test_role:['']
  });


  reset_form_data()
  {
    this.secondFormGroup.setValue({
      percentage:'',
      passing_year:'',
      qualification:'',
      stream:'',
      college_name:'',
      other_college_name:'',
      college_location:'',
      type_of_applicant:'Experienced',
      experience:'',
      current_ctc:'',
      expected_ctc:'',
      e_Javascript: '',
      e_Angular_JS: '',
      e_React: '',
      e_Node_JS: '',
      e_Others: '',
      f_Javascript: '',
      f_Angular_JS: '',
      f_React: '',
      f_Node_JS: '',
      f_Others: '',
      notice_period:'',
      notice_period_end:'',
      notice_period_month:'',
      previous_test:'',
      previous_test_role:''
      });
  }

  constructor(private _formBuilder: FormBuilder) {}



  Fresher:boolean=false;

  radiochange()
  {
    const radiobtn=document.getElementsByClassName('mat-mdc-radio-button');

    this.reset_form_data();

    for (let i = 0; i < radiobtn.length; i++) 
    {
      let val=radiobtn[i].getAttribute("class");
      let is=val.includes("cdk-focused");


      if(is===true)
      {
        val=radiobtn[i].getAttribute("ng-reflect-value");
        if(val==="Fresher")
        {
          this.Fresher=true;
          console.log(this.Fresher);
          return;
        }
        else
        {
          this.Fresher=false;
          console.log(this.Fresher);
          return;
        }
      }
    }
  }

  
}
