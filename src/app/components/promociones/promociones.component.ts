import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styles: []
})
export class PromocionesComponent implements OnInit {
    plan;

    constructor(private _authService: AuthService, private _planService: PlanService) { }

    ngOnInit() {
        this._authService.getUID().subscribe(user => {
            this._planService.getPlan(user.uid).subscribe(data => this.plan = data)
        })
    }
}
