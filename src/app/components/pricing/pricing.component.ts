import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore  } from '@angular/fire/firestore';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

	private listPriceOne:string[] = ['DATO PLAN 1', 'DATO PLAN 2', 'DATO PLAN 3', 'DATO PLAN 4'];
	private listPriceTwo:string[] = ['DATO PLAN 1', 'DATO PLAN 2', 'DATO PLAN 3', 'DATO PLAN 4'];
	private listPriceThree:string[] = ['DATO PLAN 1', 'DATO PLAN 2', 'DATO PLAN 3', 'DATO PLAN 4'];

    constructor(private _authService: AuthService,
                private _angularFirestore: AngularFirestore) { }

    ngOnInit() { }

    updateStatus() {
        this._authService.getUID().subscribe(id => {
            if(id != null) {
                this._angularFirestore.collection('users').doc(id.uid).update({status: 2})
            }
        })
    }
}
