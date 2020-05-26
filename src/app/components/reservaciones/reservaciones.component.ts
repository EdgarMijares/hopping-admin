import { Component, OnInit } from '@angular/core';

import { ReservacionesService } from '../../services/reservaciones.service';
import { Reservaciones } from '../../models/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styles: []
})
export class ReservacionesComponent implements OnInit {

	reservaciones: Reservaciones[];
    constructor(private _reservacionesService: ReservacionesService) {
      // this._reservacionesService.getReservaciones().subscribe(reservaciones => {
      //     this.reservaciones = reservaciones;
      // });
    }

    ngOnInit() {
    	// this._reservacionesService.getReservaciones().subscribe(reservaciones => {
    	// 	this.reservaciones = reservaciones;
    	// });
    }

}
