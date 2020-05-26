import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styles: []
})
export class OpcionesComponent implements OnInit {
	email = new FormControl('', [Validators.required, Validators.email]);

  name:string = "Nombre compañia";

  constructor() { }

  ngOnInit() {
  }

	getErrorMessage() {
 	 return this.email.hasError('required') ? 'Necesitas ingresar un correo' :
 			 this.email.hasError('email') ? 'No es un correo valido' :
 					 '';
  }
}
