import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';

import { UserParsing, UserGoogle, UserFacebook } from '../models/models';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user: Observable<firebase.User>;
	status: boolean;
	info_user: UserParsing;

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
		console.log(this.user)
		return this.user;
	}

  saveUser(id:string, user:any) {
    this._angularFirestore.collection('users').doc(id).set(user)
      // .then(status => console.log(status))
      .catch(error => console.log(error));
  }

	getUserData() {
		return this._angularFirestore.collection('users').doc('Io5TCKVrfNM47Lk3l1SjDj8DVOo2').get();
		// this._angularFirestore.collection<UserParsing>('users')
		// 	.stateChanges().pipe(
		// 		map(action => action.map(a => {
		// 			const info = a.payload.doc.data() as UserParsing;
		// 			console.log(info)
		// 			return info;
		// 		}))
		// 	)

	}

  parsingUser(res:Object, type:string, token:string):UserParsing {
    switch(type) {
      case 'g': {
        let userData:UserGoogle = res as UserGoogle;
				return this.userParsing(userData, token);
      }
      case 'f': {
        let userData:UserFacebook = res as UserFacebook;
        return this.userParsing(userData, token);
      }
    }
  }

	userParsing(user:UserFacebook|UserGoogle, token:string):UserParsing {
		return {
			'nombre': user.name,
			'email': user.email,
			'token': token,
			'status': 0,
			'info_fiscal': {
				'nombre_fiscal':'',
				'rfc':'',
				'direccion':'',
				'estado':'',
				'municipio':'',
				'cp':''
			}
		}
	}
}
