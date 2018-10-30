import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myhop',
  templateUrl: './myhop.component.html',
  styles: []
})
export class MyhopComponent implements OnInit {

	week:string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

	selectedInicio: string;
	selectedTermino: string;
	
	horas: any[] = [];
  constructor() {
		for(let i = 7; i < 24; i++) {
			this.horas[i-7] = {value: i, viewValue: i + ':00'}
		}
	}

  ngOnInit() {
  }

}
