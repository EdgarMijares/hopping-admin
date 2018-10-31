import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styles: []
})
export class OpcionesComponent implements OnInit {

  name:string = "Nombre compañia";
  
  constructor() { }

  ngOnInit() {
  }

}
