import { Component, OnInit } from '@angular/core';

import { ReservacionesService } from '../../services/reservaciones.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styles: []
})
export class ReservacionesComponent implements OnInit {

  constructor(private _reservacionesService: ReservacionesService) {
    console.log(_reservacionesService)
  }

  ngOnInit() {
  }

}
