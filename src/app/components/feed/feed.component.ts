import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styles: []
})
export class FeedComponent implements OnInit {
    plan;

    constructor(private _planService: PlanService, private _authService: AuthService) { }

    ngOnInit() {
        this._authService.getUID().subscribe(user => {
            this._planService.getPlan(user.uid).subscribe(data => this.plan = data)
        })
    }
}
