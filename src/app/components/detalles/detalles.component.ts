import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Upload } from '../../models/upload';

import { AuthService } from '../../services/auth.service';
import { PlanService } from '../../services/plan.service';

import { UserParsing } from '../../models/models';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: []
})
export class DetallesComponent implements OnInit {

    constructor(private _planService: PlanService, private _authService: AuthService) {
        this._authService.getUID().subscribe(user => {
            // this._planService.getPlan(user.uid)
            this._planService.getPlan(user.uid).subscribe((d: UserParsing) => {
                console.log(d)
            })
            console.log(this._planService.getPlan(user.uid))
        })
    }

    ngOnInit() { }

}
