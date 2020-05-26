import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Upload } from '../../models/upload';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {
    email = new FormControl('', [Validators.required, Validators.email]);
    lat: number = 24.0291689;
    lng: number = -104.6606727;

    constructor() { }

    ngOnInit() { }

    getErrorMessage() {
        return this.email.hasError('required') ? 'Necesitas ingresar un corre' :
            this.email.hasError('email') ? 'No es un correo valido' :
                '';
    }
}
