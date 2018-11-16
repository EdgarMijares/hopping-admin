import { Component } from '@angular/core';
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

	dataStatus;
	constructor(private _authService: AuthService, private _myhopService: MyhopService, private _dialog: DialogsService, private user: UserService){
		if(document.body.clientWidth > 700){
			this.menu = true;
		} else {
			this.menu = false;
		}
		this.user;
		// this.dataStatus = this.user.getStatus()
		console.log(this.user.getStatus());
		// console.log(this._authService.getUserData())
		// this._myhopService.getHopData('Io5TCKVrfNM47Lk3l1SjDj8DVOo2').subscribe(d => console.log(d));
		// this._myhopService.getHopData('Io5TCKVrfNM47Lk3l1SjDj8DVOo2').subscribe(data => {
    //   this.hopData = data;
    //   console.log(data)
    // });
		// this._authService.user.subscribe(u => {
		// 	this._authService.getUserData(u.uid).subscribe(d => {
		// 		d.subscribe( c => console.log(c))
		// 	})
			// this._myhopService.getHopData(u.uid).subscribe(d => {
			// 	this._authService.getUserData(u)
			// 	this.dataStatus = !d.exists;
			// 	console.log(!d.exists)
			// });
		// })
	}

	registeredDialog() {
		this._dialog.newHopDialog().afterClosed()
      .subscribe(hopData => {
        console.log(hopData)
      })
	}

}
