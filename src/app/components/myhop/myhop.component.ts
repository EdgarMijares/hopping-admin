import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyHopData } from '../../models/models';
// DIALOGS
// SERVICES
import { AuthService } from '../../services/auth.service';
import { PlanService } from '../../services/plan.service';
import { DialogsService } from '../../services/dialogs.service';

@Component({
  selector: 'app-myhop',
  templateUrl: './myhop.component.html',
  styles: []
})
export class MyhopComponent implements OnInit {
    obj:NgForm;
    objeto:NgForm[] = [];
	weekServicio:string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    weekReservacion:Array<any> = [
        [true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true]
    ];
    lunes = false;
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

    noHops;

    constructor(private _authService: AuthService, private _planService: PlanService) { }

    ngOnInit() {
        this._authService.getUID().subscribe(user => {
            this._planService.getPlan(user.uid).subscribe(plan => {
                this.noHops = plan;
            })
        })
    }

    showList(row) {
        this.weekReservacion[row] = !this.weekReservacion[row]
    }

    getData(data:MyHopData, i?:number) {
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

    onClick(i){
        console.log(i)
    }
}

export interface Hora {
    value: string;
    viewValue: string;
}
