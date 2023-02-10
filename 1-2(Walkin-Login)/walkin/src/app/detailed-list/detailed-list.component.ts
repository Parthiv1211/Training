import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-detailed-list',
  templateUrl: './detailed-list.component.html',
  styleUrls: ['./detailed-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailedListComponent {
  jobrole: any;
  item_url: any;
  item_index: any;
  role = {
    "id":"",
    "role_title": "",
    "date":
    {
         "start_date":"",
         "end_date":""
    },
    "location":"",
    "job_roles":
    [
         {
              "title":"",
              "salary":"",
              "role":[""],
              "requirements":[""]
         }
    ],
    "oppertunity_for":
    [

    ],
    "expired":true,
    "time_slot":
    [
      {
        "t":"",
        "checked":true
      }
    ]
};


  application_process_panel = false;


  constructor(private data:SelectionService) {}

  ngOnInit(): void {
    
    fetch('../../../assets/walkinrole.json')
      .then((res) => res.json())
      .then((jsonData) => {
        this.jobrole = jsonData;

        this.item_url = window.location.href.split('/');
        this.item_index = this.item_url[this.item_url.length - 1];

        for (let r of this.jobrole) {
          if (this.item_index === r.id) {
            this.role = r;
          }
        }
      }); 
  }

  time="9:00 AM to 11:00 AM";
  date="3rd July 2021";

  
  validate_selection() {

    // alert("Good");
    
    this.data.changemeseg(this.time);
    this.data.changedate(this.date);
    this.data.curmeseg.subscribe(time => this.time=time);
    this.data.curdate.subscribe(date => this.date=date);

    // window.location.href="login/"+this.item_index+"/success";
   
  }

  checkboxes:any;
  is_checked=false;

  callme()
  {
    const radiobtn=document.getElementsByClassName('mat-mdc-radio-button');

    this.date=this.role.date.start_date;

    for (let i = 0; i < radiobtn.length; i++) 
    {
      let val=radiobtn[i].getAttribute("class");
      let is=val.includes("cdk-focused");


      if(is===true)
      {
        val=radiobtn[i].getAttribute("ng-reflect-value");
        this.time=val;
        break;
      }
    } 
    this.checkboxes = document.querySelectorAll('input[type=checkbox]');
    for (let i = 0; i < this.checkboxes.length; i++) 
    {
      if(this.checkboxes[i].getAttribute("aria-checked")=="true")
      {
        const btn=document.getElementById("applybutton");
        btn.removeAttribute("disabled");
        return;
      }
    }
    const btn=document.getElementById("applybutton");
    btn.setAttribute("disabled","true");

   
  }


  


}
