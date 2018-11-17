import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

	private listPriceOne:string[] = ['DATO PLAN 1', 'DATO PLAN 2', 'DATO PLAN 3', 'DATO PLAN 4'];
	private listPriceTwo:string[] = ['DATO PLAN 1', 'DATO PLAN 2', 'DATO PLAN 3', 'DATO PLAN 4'];
	private listPriceThree:string[] = ['DATO PLAN 1', 'DATO PLAN 2', 'DATO PLAN 3', 'DATO PLAN 4'];

  constructor() { }

  ngOnInit() {
  }

}
