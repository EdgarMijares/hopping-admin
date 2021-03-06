import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd} from '@angular/router';
import { AuthService } from './services/auth.service';

import { MyhopService } from './services/myhop.service';
import { DialogsService } from './services/dialogs.service';
import { UserService } from './services/user.service';
import { UserParsing } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	menu: boolean = true;
	loadingIndicator = true;
	dataStatus;
	constructor(private _authService: AuthService, private _myhopService: MyhopService, private _dialog: DialogsService, private user: UserService,
		private router:Router){
		(document.body.clientWidth > 700)? this.menu = true : this.menu = false;
		// if(this.dataStatus == undefined){this.loadingIndicator = true;}
		this.router.events.subscribe((rotuerEvent: Event) => {
			if(rotuerEvent instanceof NavigationStart) {
				this.loadingIndicator = true;
			} else if (rotuerEvent instanceof NavigationEnd) {
				this.loadingIndicator = false;
			}
		});
        this._authService.getUID().subscribe(user => {
            this.user.getStatus(user.uid).valueChanges().subscribe(d => {
                this.dataStatus = d.status;
            });
        })
	}

	registeredDialog() {
		this._dialog.newHopDialog().afterClosed()
      .subscribe(hopData => {
        console.log(hopData)
      })
	}

}
