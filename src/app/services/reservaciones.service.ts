import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/';
import { Reservaciones } from '../models/models';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class ReservacionesService {
	reservacionesColection: AngularFirestoreCollection<Reservaciones>;
	reservaciones: Observable<Reservaciones[]>;
	reservacionesDoc: AngularFirestoreDocument<Reservaciones>;

  constructor(private angularFirestore: AngularFirestore) {
		this.angularFirestore.firestore.settings({ timestampsInSnapshots: true });
		this.reservacionesColection = this.angularFirestore.collection('reservaciones');
		this.reservaciones = this.reservacionesColection.snapshotChanges().map(changes => {
			return changes.map(a => {
				const data:any = a.payload.doc.data() as Reservaciones;
				data.id = a.payload.doc.id;
				return data;
			})
		});
  }

	getReservaciones() {
		return this.angularFirestore.collection('reservaciones').valueChanges();
  }


}
