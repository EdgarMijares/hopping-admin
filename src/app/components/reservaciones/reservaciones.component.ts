import { Component, OnInit } from '@angular/core';

import { ReservacionesService } from '../../services/reservaciones.service';
import { Reservaciones } from '../../models/models';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styles: []
})
export class ReservacionesComponent implements OnInit {

	private reservaciones: Reservaciones[];
  constructor(private _reservacionesService: ReservacionesService) { }

  ngOnInit() {
		this._reservacionesService.getReservaciones().subscribe(reservaciones => {
			this.reservaciones = reservaciones;
		});
  }

}
