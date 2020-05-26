import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserParsing } from '../models/models';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PlanService {
    private planCostumer: AngularFirestoreCollection<UserParsing>;
    constructor(private _angularFirestore: AngularFirestore) {
        this.planCostumer = this._angularFirestore.collection<UserParsing>('users');

    }

    getPlan(uid: string){
        return this.planCostumer.doc(uid).snapshotChanges().pipe(map(action => {
            switch((action.payload.data() as UserParsing).plan.tipo_plan) {
                case 'simple':   return [{}];
                case 'doble':   return [{}, {}];
                case 'triple':  return [{}, {}, {}];
                case 'gold':    return [{}, {}, {}, {}, {}];
                default: return null;
            }
        }));
    }
}
