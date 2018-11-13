import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore  } from '@angular/fire/firestore';

import { UserParsing, UserGoogle, UserFacebook } from '../models/models';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user: Observable<firebase.User>;
	status: boolean;

  constructor(private _angularFireAuth: AngularFireAuth,
    private _angularFirestore: AngularFirestore,
    private router: Router) {
			this.user = this._angularFireAuth.authState;
			this.user.subscribe(data => {(data != null)? this.router.navigate(['myhop']): this.router.navigate(['/'])})
	}

	createUserEmail(email: string, password: string, user:any) {
		this._angularFireAuth.auth
			.createUserWithEmailAndPassword(email, password)
			.then(info => {
				this.saveUser(info.user.uid, user);
				this.router.navigate(['opciones']);
			})
			.catch(error => {
				console.log('SIGNUP', error);
			})
	}

  signUpEmail(email: string, password: string) {
    this._angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
				this.router.navigate(['myhop']);
			})
      .catch(error => {
        console.log('SIGNUP', error);
      })
  }

	logInEmail(email:string, password: string) {
    this._angularFireAuth.auth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				this.router.navigate(['myhop']);
			})
			.catch(error => {
				console.log('LOGIN', error);
			}
		);
  }
  
  logInGoogle() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      this._angularFireAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        this.saveUser(res.user.uid, this.parsingUser(res.additionalUserInfo.profile, 'g', res.user.refreshToken));
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  }

  logInFacebook(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this._angularFireAuth.auth
      .signInWithPopup(provider)
        .then(res => {
          // console.log(res.user)
          this.saveUser(res.user.uid, this.parsingUser(res.additionalUserInfo.profile, 'f', res.user.refreshToken));
          resolve(res);
        }, err => {
          reject(err);
      })
    });
  }

  logOut() {
    this._angularFireAuth.auth.signOut()
			.then(() => {
        this.router.navigate(['/']);
			})
			.catch(error => {
				console.log('LOGOUT', error);
			}
		);
  }

	getStatusLogin() {
		this._angularFireAuth.authState.subscribe(stat => {
			if(stat != null) {
				this.router.navigate(['/myhop']);
			} else {
				this.router.navigate(['/']);
			}
		});
	}

	getUID() {
		this.user.subscribe(data => {
			return data.uid;
		})
	}

  saveUser(id:string, user:any) {
    this._angularFirestore.collection('users').doc(id).set(user)
      // .then(status => console.log(status))
      .catch(error => console.log(error));
  }

  parsingUser(res:Object, type:string, token:string):UserParsing {
    switch(type) {
      case 'g': {
        let userData:UserGoogle = res as UserGoogle;
        let userParsing:UserParsing = {
          'name': userData.name,
          'email': userData.email,
          'rfc': '',
          'token': token
        }
        return userParsing;
      }
      case 'f': {
        let userData:UserFacebook = res as UserFacebook;
        let userParsing:UserParsing = {
          'name': userData.name,
          'email': userData.email,
          'rfc': '',
          'token': token
        }
        return userParsing;
      }
    }
  }
}
