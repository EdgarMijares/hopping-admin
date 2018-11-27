import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyHopData } from '../../models/models';
import { Lugar } from '../../models/lugar';
// DIALOGS
// SERVICES
import { AuthService } from '../../services/auth.service';
import { MyhopService } from '../../services/myhop.service';
import { UserService } from '../../services/user.service';
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

    private plan:string;
    private noHops;
    private hopData:MyHopData[];

    constructor(private _myhopService: MyhopService, private _authService: AuthService, private _user: UserService) {
    	// this._authService.getUID();
    // this._myhopService.getHopData('Io5TCKVrfNM47Lk3l1SjDj8DVOo2').subscribe(data => {
    //   this.hopData = data;
    //   console.log(data)
    // });
    }

    ngOnInit() {
        this._authService.getUID().subscribe(user => {
            this._user.getPlanU(user.uid).valueChanges().subscribe( plan => {
                this.plan = plan.plan.tipo_plan;
                switch (plan.plan.tipo_plan) {
                    case 'doble':   this.noHops = [{}, {}]; break;
                    case 'triple':  this.noHops = [{}, {}, {}]; break;
                    case 'gold':    this.noHops = [{}, {}, {}, {}, {}]; break;
                }
                console.log(this.noHops)
            });
            // this.noHops = this._user.getPlanAcces(user.uid);
            // console.log(this._user.getPlanAcces(user.uid))
        })
    }

    showList(row, item) {
        // this.weekReservacion.push(item);
        // !this.lunes
        // console.log(this.weekReservacion[item]);
        this.weekReservacion[row][item] = !this.weekReservacion[row][item]
        // console.log(this.weekReservacion[item]);

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
