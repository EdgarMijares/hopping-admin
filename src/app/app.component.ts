import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd} from '@angular/router';
import { AuthService } from './services/auth.service';

import { MyhopService } from './services/myhop.service';
import { DialogsService } from './services/dialogs.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	menu: boolean = true;
	loadingIndicator = true;
	dataStatus = 2;
	constructor(private _authService: AuthService, private _myhopService: MyhopService, private _dialog: DialogsService, private user: UserService,
		private router:Router){
		if(document.body.clientWidth > 700){
			this.menu = true;
		} else {
			this.menu = false;
		}
		// this.router.events.subscribe((rotuerEvent: Event) => {
		// 	if(rotuerEvent instanceof NavigationStart) {
		// 		this.loadingIndicator = true;
		// 	} else if (rotuerEvent instanceof NavigationEnd) {
		// 		this.loadingIndicator = false;
		// 	}
		// });
		this.user.getStatus().subscribe(status => {
				this.dataStatus = status[0]
				this.loadingIndicator = false;

			}
		);
	}

	registeredDialog() {
		this._dialog.newHopDialog().afterClosed()
      .subscribe(hopData => {
        console.log(hopData)
      })
	}

}
