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

	horas: any[] = [
		{value: '7', viewValue: '07:00'}
	];
  constructor() {
		
	}

  ngOnInit() {
  }

	getData(data:any){
		console.log(data.value);
	}

}
