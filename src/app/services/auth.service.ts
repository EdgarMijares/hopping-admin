import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user: Observable<firebase.User>;

  constructor(private _angularFireAuth: AngularFireAuth, private router: Router) {
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
  }

  logInFacebook(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this._angularFireAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        console.log(res);
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    });
  }

  logInGoogle() {
    return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this._angularFireAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        console.log(res);
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    });
  }

  logOut() {
    this._angularFireAuth.auth.signOut()
			.then(value => {
        this.router.navigate['']
				console.log('LOGOUT', value);
			})
			.catch(error => {
				console.log('LOGOUT', error);
			}
		);
  }

	getStatusLogin() {
    // return new Promice<any>((resolve,reject) => {
    //   this._angularFireAuth.onAuthStateChanged(user )
    // });
		let flag = false;
		this._angularFireAuth.auth.onAuthStateChanged(user => {
			if(user) {
				flag = true;
        this.router.navigate['/myhop'];
			}
		})
		return flag;
	}

}
