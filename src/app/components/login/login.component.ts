import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

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

  constructor(private _angularFireAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  login() {
    this._angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this._angularFireAuth.auth.signOut();
  }

  createUser() {
    this._angularFireAuth.auth.createUserWithEmailAndPassword("test@text.com", "123456").catch(
      data => console.log(data)
    );
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
