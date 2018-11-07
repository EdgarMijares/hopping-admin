import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _authService: AuthService) { }

  ngOnInit() { }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Necesitas ingresar un corre' :
        this.email.hasError('email') ? 'No es un correo valido' :
            '';
  }
}
