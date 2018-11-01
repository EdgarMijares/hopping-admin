import { Injectable } from '@angular/core';

// import { Observable, of } from 'rxjs/';
// import { Reservaciones } from '../models/models';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@firebase/firestore-types';

// import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class ReservacionesService {
	// reservacionesColection: AngularFirestoreCollection<Reservaciones>;
	// reservaciones: Observable<Reservaciones[]>;
	// reservacionesDoc: AngularFirestoreDocument<Reservaciones>;

  constructor() {
		// this.angularFirestore.firestore.settings({ timestampsInSnapshots: true });
		// this.reservacionesColection = this.angularFirestore.collection('reservaciones');
		// this.reservaciones = this.reservacionesColection.snapshotChanges().map(changes => {
		// 	return changes.map(a => {
		// 		const data:any = a.payload.doc.data() as Reservaciones;
		// 		data.id = a.payload.doc.id;
		// 		return data;
		// 	})
		// });
  }
}
