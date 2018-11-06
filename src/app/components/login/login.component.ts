import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
// import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material/core';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Necesitas ingresar un corre' :
        this.email.hasError('email') ? 'No es un correo valido' :
            '';
  }
  //
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  //
  // matcher = new MyErrorStateMatcher();

}
