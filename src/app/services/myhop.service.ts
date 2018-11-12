import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyhopService {
  myHopCollection: AngularFirestoreCollection<any>;
  myHop: Observable<any[]>;
  test:any;

  constructor(private angularFirestore: AngularFirestore) {
    this.myHopCollection = this.angularFirestore.collection<any>('myhop');
    this.myHop = this.myHopCollection.stateChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  getHopData() {
		return this.myHop;
	}
}
