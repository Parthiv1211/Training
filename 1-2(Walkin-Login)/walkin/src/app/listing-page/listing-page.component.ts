import { Component } from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent {
  jobrole: any;

  constructor() { }

  ngOnInit(): void {
    fetch('../../../assets/walkinrole.json').then(res => res.json())
    .then(jsonData => {
      this.jobrole = jsonData;
    });
  }

}
