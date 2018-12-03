import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-hop',
  templateUrl: './my-hop.component.html'
})
export class MyHopComponent implements OnInit {
    weekServicio:string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    private weekReservacion:Array<any> = [
        [true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true]
    ];

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

    constructor() { }

    ngOnInit() { }

    onClick(i){
        console.log(i)
    }

    showList(row, item) {
        console.log(this.weekReservacion[row][item])
        this.weekReservacion[row][item] = !this.weekReservacion[row][item];
    }

    getData(data:any, i?:number) {
        let parsing = {
            'dias_de_servicio': {
                'apertura': data.horaApertura,
                'cierre':   data.horaCierre ,
                'lunes':    data.lunesServicio ,
                'martes':   data.martesServicio ,
                'miercoles':data.miercolesServicio ,
                'jueves':   data.juevesServicio ,
                'viernes':  data.viernesServicio ,
                'sabado':   data.sabadoServicio ,
                'domingo':  data.domingoServicio
            },
            'dias_de_reservacion': {
                'apertura': data.reservacionInicio ,
                'cierre':   data.reservacionTermino ,
                'lunes':    data.lunesReservacion ,
                'martes':   data.martesReservacion ,
                'miercoles':data.miercolesReservacion ,
                'jueves':   data.juevesReservacion ,
                'viernes':  data.viernesReservacion ,
                'sabado':   data.sabadoReservacion ,
                'domingo':  data.domingoReservacion
            }
        }
    }
}

export interface Hora {
    value: string;
    viewValue: string;
}
