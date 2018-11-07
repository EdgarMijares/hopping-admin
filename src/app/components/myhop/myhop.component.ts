import { Component, OnInit } from '@angular/core';
import { MyHopData } from '../../models/models';

import { MyhopService } from '../../services/myhop.service';

@Component({
  selector: 'app-myhop',
  templateUrl: './myhop.component.html',
  styles: []
})
export class MyhopComponent implements OnInit {

	weekServicio:string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  weekReservacion:Array<any> = ['','','','','','',''];
	horas: Hora[] = [
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
    {value: '00', viewValue: '00:00'},
    {value: '01', viewValue: '01:00'},
    {value: '02', viewValue: '02:00'},
    {value: '03', viewValue: '03:00'}
	];
  private hopData:any[];
  constructor(private _myhopService: MyhopService) {
    this._myhopService.getHopData().subscribe(data => {
      console.log(data)
      this.hopData = data;
    });
	}

  ngOnInit() { }

  showList(item) {
    // this.weekReservacion.push(item);
  }

	getData(data:MyHopData) {
    console.log(data)
	}

  onClick(){
    console.log(this.hopData)
  }
}

export interface Hora {
  value: string;
  viewValue: string;
}
