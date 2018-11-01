import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable, of } from 'rxjs/';
import { Reservaciones } from '../models/models';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
=======
import { Http, Headers } from '@angular/http';
>>>>>>> e4b954cfa18449963ed703af40f8e9015874f0d8

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD

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
=======
export class ReservacionesService {

  private urlReservaciones = "https://hopping-dc414.firebaseio.com";

  constructor(private http: Http, private headers: Headers) {
    console.log(this.http.get(this.urlReservaciones))
>>>>>>> e4b954cfa18449963ed703af40f8e9015874f0d8
  }


}
