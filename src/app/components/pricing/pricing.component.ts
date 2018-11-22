import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore  } from '@angular/fire/firestore';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

	private listPriceOne:string[] = ['ADMINISTRA 1 BAR', 'RESERVACIONES', 'FEED 4 ESPACIOS', 'GALERIA 10 ESPACIOS', 'UBICACION'];
	private listPriceTwo:string[] = ['ADMINISTRA 2 BARES', 'RESERVACIONES', 'FEED 4 ESPACIOS', 'GALERIA 10 ESPACIOS', 'UBICACION'];
    private listPriceThree:string[]=['ADMINISTRA 3 BARES', 'RESERVACIONES', 'FEED 4 ESPACIOS', 'GALERIA 10 ESPACIOS', 'UBICACION'];
	private listPriceFour:string[] =['ADMINISTRA 4 O 5 BARES', 'RESERVACIONES', 'FEED 4 ESPACIOS', 'GALERIA 10 ESPACIOS', 'UBICACION'];

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

    subscribePlan(plan_tipo) {
        this._authService.updatePlan(plan_tipo);
    }
}
