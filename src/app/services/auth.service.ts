import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore  } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user: Observable<firebase.User>;

  constructor(private _angularFireAuth: AngularFireAuth,
    private _angularFirestore: AngularFirestore,
    private router: Router) {
		this.getStatusLogin();
	}

	createUserEmail(email: string, password: string) {
		this._angularFireAuth.auth
			.createUserWithEmailAndPassword(email, password)
			.then(info => {
				console.log('SIGNUP', info);
			})
			.catch(error => {
				console.log('SIGNUP', error);
			})
	}

  signUpEmail(email: string, password: string) {
    this._angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
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
          this.saveUser(res.user.uid, res.additionalUserInfo.profile);
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
      this._angularFireAuth.auth
      .signInWithPopup(provider)
        .then(res => {
          this.saveUser(res.user.uid, res.additionalUserInfo.profile);
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
		let flag = false;
		this._angularFireAuth.auth.onAuthStateChanged(user => {
			if(user) {
				flag = true;
        this.router.navigate['/myhop'];
			}
		})
		return flag;
	}

  saveUser(id:string, user:any) {
    this._angularFirestore.collection('users').doc(id).set(user)
      .then(status => console.log(status))
      .catch(error => console.log(error));
  }

}
