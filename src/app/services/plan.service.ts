import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserParsing } from '../models/models';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PlanService {
    private plan;
    constructor(private _angularFirestore: AngularFirestore) {
        // this.plan = this._angularFirestore
        //     .collection<UserParsing>('users').stateChanges().pipe(
        //         map(actions => actions.map(data => {
        //             return (data.payload.doc.data() as UserParsing).plan;
        //             // return plan.plan;
        //         }))
        //     );
    }

    getPlan(uid: string){
        // return this._angularFirestore.collection('users').doc(uid).valueChanges()
        //     .subscribe((data: UserParsing) => {
                // console.log(data)
                // switch(data.plan.tipo_plan) {
                //     case 'doble':   return [{}, {}]; break;
                //     case 'triple':  return [{}, {}, {}]; break;
                //     case 'gold':    return [{}, {}, {}, {}, {}]; break;
                // }
            //     return data;
            // });
        return this._angularFirestore.collection('users').doc(uid).valueChanges()
            .pipe(map(actions => console.log(actions)));
    }

}
