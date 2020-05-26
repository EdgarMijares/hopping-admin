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
        return this.userCollection.doc<UserParsing>(uid);
	}

    getPlanU(uid: string) {
        return this.userCollection.doc<UserParsing>(uid);
    }

    getTipoPlan(uid: string) {
        return this.userCollection.doc<UserParsing>(uid)
    }

    getPlanAcces(uid: string):number {
        let temp: number;
        this.getTipoPlan(uid).valueChanges().subscribe(d => {
            switch (d.plan.tipo_plan) {
                case 'doble': temp = 2; break;
                case 'triple': temp = 3; break;
                case 'gold': temp = 4; break;
            }
        })
        return temp;
    }
}
