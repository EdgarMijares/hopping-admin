import { Injectable } from '@angular/core';

import { UserParsing } from '../models/models';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	userCollection: AngularFirestoreCollection<UserParsing>;
	userInfo:any;
	status:number;

    constructor(private angularFirestore: AngularFirestore) {
		this.userCollection = this.angularFirestore.collection<UserParsing>('users');
        // this.userInfo = this.userCollection.stateChanges().pipe(
        //     map(actions => actions.map(a => {
        //         const data = a.payload.doc.data() as any;
        //         return { data };
        //     }))
        // )
    	// this.userInfo.subscribe((d:UserParsing) => {this.status = d.status;});
    }

	getStatus(uid: string) {
        return this.angularFirestore.collection('users').doc<UserParsing>(uid);
	}
    
    getPlanU(uid: string) {
        return this.angularFirestore.collection('users').doc<UserParsing>(uid);
    }
}
