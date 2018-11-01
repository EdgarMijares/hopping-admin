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
		{value: '7', viewValue: '07:00'},
		{value: '8', viewValue: '08:00'},
		{value: '9', viewValue: '09:00'},
		{value: '10', viewValue: '10:00'},
		{value: '11', viewValue: '11:00'},
		{value: '12', viewValue: '12:00'},
		{value: '13', viewValue: '13:00'},
		{value: '14', viewValue: '14:00'},
		{value: '15', viewValue: '15:00'},
		{value: '16', viewValue: '16:00'},
		{value: '17', viewValue: '17:00'},
		{value: '18', viewValue: '18:00'},
		{value: '19', viewValue: '19:00'},
		{value: '20', viewValue: '20:00'},
		{value: '21', viewValue: '21:00'},
		{value: '22', viewValue: '22:00'},
		{value: '23', viewValue: '23:00'},
		{value: '24', viewValue: '24:00'}
	];
  constructor() {

	}

  ngOnInit() {
  }

	getData(data:any){
		console.log(data.value);
	}

}
