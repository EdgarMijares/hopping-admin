import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

import { MyhopService } from './services/myhop.service';
import { DialogsService } from './services/dialogs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	menu: boolean = true;

	dataStatus = false;
	constructor(private _authService: AuthService, private _myhopService: MyhopService, private _dialog: DialogsService,){
		if(document.body.clientWidth > 700){
			this.menu = true;
		} else {
			this.menu = false;
		}
		this._authService.user.subscribe(u => {
			this._myhopService.getHopData(u.uid).subscribe(d => {
				this.dataStatus = d.exists;
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
