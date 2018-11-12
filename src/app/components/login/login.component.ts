import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
    // setInterval(function() {
    //   if (this._authService.getStatusLogin()) {
    //     this.router.navigate['myhop'];
    //   }
    // }, 2000 );
  }

  logInUser(user) {
    console.log(user);
    this._authService.logInEmail(user.user, user.password);
  }

  checkUser() { }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Necesitas ingresar un corre' :
        this.email.hasError('email') ? 'No es un correo valido' :
            '';
  }
}
