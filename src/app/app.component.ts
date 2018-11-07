import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hopping-admin';
	private menu: boolean = true;
	constructor(private _authService: AuthService){
		if(document.body.clientWidth > 600){
			this.menu = true;
		} else {
			this.menu = false;
		}
	}
}
