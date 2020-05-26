/**
*   El servicio se encarga de referenciar los datos de usario y de su cuenta
*   para el logeo correcto por diferentes metodos
*   Documentacion oficial de
*   https://firebase.google.com/docs/auth/web/manage-users?hl=es-419
*
*/

import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore  } from '@angular/fire/firestore';

import { User, UserGoogle, UserFacebook } from '../models/user';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user: Observable<firebase.User>;
	status: boolean;
	info_user: User;

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
				(res.additionalUserInfo.isNewUser)?
					this.saveUser(res.user.uid, this.parsingUser(res.additionalUserInfo.profile, 'g', res.user.refreshToken)) :
					this.updateToken(res.user.uid, res.user.refreshToken)
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
                (res.additionalUserInfo.isNewUser)?
						this.saveUser(res.user.uid, this.parsingUser(res.additionalUserInfo.profile, 'f', res.user.refreshToken))  :
						this.updateToken(res.user.uid, res.user.refreshToken)
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
    	return this.user;
    }

  saveUser( id:string, user:any ) {
    this._angularFirestore.collection('users').doc(id).set(user)
      // .then(status => console.log(status))
      .catch(error => console.log(error));
  }

	updateToken( id:string, token:string ) {
        this._angularFirestore.collection('users').doc(id).update({token: token})
        // .then(status => console.log(status))
        .catch(error => console.log(error));
    }

    updatePlan( tipo_plan : string ) {
        let date = new Date();
        let dia = date.getDate();
        let mes = date.getMonth() + 1;
        let ano = date.getFullYear();
        let inicio = dia + '/' + mes + '/' + ano;

        if ( (mes + 1) > 12 ) { ano += 1; mes = 0; }
        if(dia == 31) { dia = 30 }

        let lugares;
        if( tipo_plan === 'simple')
            lugares = 1
        else if( tipo_plan === 'doble')
            lugares = 2
        else if( tipo_plan === 'triple')
            lugares = 3
        else if( tipo_plan === 'gold')
            lugares = 5



        let fin = dia + '/' + (mes + 1) + '/' + ano;
        this.getUID().subscribe(data => {
            this._angularFirestore.collection('users').doc(data.uid).update({status: 2, plan:{ inicio, fin, tipo_plan}});
            for (let i = 1; i <= lugares; i++) {
                const id:string = 'HOP' + i
                // const data =
                // this._angularFirestore.collection('lugares').doc(data.uid.substr(0, 6)).collection(id).doc();
            }
        })
    }

	getUserData( uid:string ) {
		return this._angularFirestore.collection('users').doc(uid).get();
	}

    parsingUser( res:Object, type:string, token:string ):User {
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

	userParsing( user:UserFacebook|UserGoogle, token:string ):User {
		return {
			nombre : user.name.toUpperCase(),
			email : user.email.toUpperCase(),
			token : token,
			status : 0,
            roles: {
                admin: true
            }
		}
	}
}
