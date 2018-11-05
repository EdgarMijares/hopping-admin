import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Reservaciones } from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class ReservacionesService {
	reservacionesCollection: AngularFirestoreCollection<Reservaciones>;
	reservaciones: Observable<any[]>;

  constructor(private angularFirestore: AngularFirestore) {
		this.reservacionesCollection = this.angularFirestore.collection<Reservaciones>('reservaciones');
		this.reservaciones = this.reservacionesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Reservaciones;
        const id = a.payload.doc.id;
        return { id, reservacion: {...data} } ;
      }))
    );
		this.reservaciones.subscribe(data => console.log(data));
  }

	getReservaciones() {
		return this.reservaciones;
	}
}
