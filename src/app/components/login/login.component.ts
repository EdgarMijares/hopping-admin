import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// SERVICES
import { AuthService } from '../../services/auth.service';
import { DialogsService } from '../../services/dialogs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
	status: any;
	hide = true;

  constructor(private _authService: AuthService, private _dialogService: DialogsService) { }

  ngOnInit() { }

  logInUser(user) {
		console.log(user);
		if(user.user === "") {
			this._dialogService.emptyInput('Introduce tu usuario para continuar.');
		} else if (user.password === "") {
			this._dialogService.emptyInput('Introduce tu contraseña para continuar.');
		} else {
			this._authService.signUpEmail(user.user, user.password);
		}
  }

	registerUser(user) {
		if(user.name === "") {
			this._dialogService.emptyInput('Introduce tu nombre para continuar.');
		} else if (this.email.value === "") {
			this._dialogService.emptyInput('Introduce tu correo para continuar.');
		} else if (user.password === "") {
			this._dialogService.emptyInput('Introduce tu contraseña para continuar.');
		} else if (user.password_confirm === "") {
			this._dialogService.emptyInput('No has confirmado contraseña.');
		} else if (user.password != user.password_confirm) {
			this._dialogService.emptyInput('No coinciden las contraseñas.');
		} else {
			this._authService.createUserEmail(this.email.value, user.password, user);
		}
	}

  getErrorMessage() {
    return this.email.hasError('required') ? 'Necesitas ingresar un correo' :
        this.email.hasError('email') ? 'No es un correo valido' :
            '';
  }
}
