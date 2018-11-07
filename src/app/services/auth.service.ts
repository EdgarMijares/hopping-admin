import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _angularFireAuth: AngularFireAuth) { }

	signUp(email: string, password: string) {
		this._angularFireAuth.auth
			.createUserWithEmailAndPassword(email, password)
			.then(info => {
				console.log('SIGNUP', info);
			})
			.catch(error => {
				console.log('SIGNUP', error);
			})
	}

	logIn(email:string, password: string) {
    this._angularFireAuth.auth
			.signInWithEmailAndPassword(email, password)
			.then(info => {
				console.log('LOGIN', info);
			})
			.catch(error => {
				console.log('LOGIN', error);
			}
		);
  }

  logOut() {
    this._angularFireAuth.auth.signOut()
			.then(value => {
				console.log('LOGIN', value);
			})
			.catch(error => {
				console.log('LOGIN', error);
			}
		);
  }

  createUser() {
    this._angularFireAuth.auth.createUserWithEmailAndPassword("test@text.com", "123456").catch(
      data => console.log(data)
    );
  }

}
