import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-complete-page',
  templateUrl: './complete-page.component.html',
  styleUrls: ['./complete-page.component.scss']
})
export class CompletePageComponent {

  time:string="";
  date:string;

  constructor(private data:SelectionService) {}
  ngOnInit():void
  {
    this.data.curmeseg.subscribe(meseg => this.time=meseg);
    this.data.curdate.subscribe(date => this.date=date);
  }

}
