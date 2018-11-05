import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hopping-admin';
	private menu: boolean = true;
	constructor(){
		if(document.body.clientWidth > 600){
			this.menu = true;
		} else {
			this.menu = false;
		}
	}
}
