import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: []
})
export class DetallesComponent implements OnInit {

    email = new FormControl('', [Validators.required, Validators.email]);
    lat: number = 51.678418;
    lng: number = 7.809007;
    
    constructor() { }

    ngOnInit() { }

    getErrorMessage() {
        return this.email.hasError('required') ? 'Necesitas ingresar un corre' :
            this.email.hasError('email') ? 'No es un correo valido' :
                '';
    }
}
