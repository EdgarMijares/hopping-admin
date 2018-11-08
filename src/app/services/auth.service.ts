import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user: Observable<firebase.User>;

  constructor(private _angularFireAuth: AngularFireAuth) {
		this.getStatusLogin();
	}

	signUpEmail(email: string, password: string) {
		this._angularFireAuth.auth
			.createUserWithEmailAndPassword(email, password)
			.then(info => {
				console.log('SIGNUP', info);
			})
			.catch(error => {
				console.log('SIGNUP', error);
			})
	}

	logInEmail(email:string, password: string) {
    this._angularFireAuth.auth
			.signInWithEmailAndPassword(email, password)
			.then(info => {
				console.log('LOGIN', info);
			})
			.catch(error => {
				console.log('LOGIN', error);
			}
		);
		console.log("CURREN", this._angularFireAuth.auth.currentUser);
		console.log("USER", this._angularFireAuth.user);

  }

  logOut() {
    this._angularFireAuth.auth.signOut()
			.then(value => {
				console.log('LOGOUT', value);
			})
			.catch(error => {
				console.log('LOGOUT', error);
			}
		);
  }

	getStatusLogin() {
		let flag = false;
		this._angularFireAuth.auth.onAuthStateChanged(user => {
			if(user) {
				flag = true;
			}
		})
		return flag;
	}

}
