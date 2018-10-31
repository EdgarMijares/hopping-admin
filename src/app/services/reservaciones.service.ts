import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  private urlReservaciones = "https://hopping-dc414.firebaseio.com";

  constructor(private http: Http, private headers: Headers) {
    console.log(this.http.get(this.urlReservaciones))
  }


}
