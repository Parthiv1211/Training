import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
	private mesegsource=new BehaviorSubject<string>("Default meseg");
	private datesource=new BehaviorSubject<string>("");
	curmeseg=this.mesegsource.asObservable();
	curdate=this.datesource.asObservable();

  	constructor() {}

	changemeseg(meseg:string)
	{
		this.mesegsource.next(meseg);
	}

	changedate(date:string)
	{
		this.datesource.next(date);
	}
}
