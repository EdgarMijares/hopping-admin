import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.componet.css']
})
export class MenubarComponent implements OnInit {
	showFiller = false;
  constructor( private _authService: AuthService ) { }

  ngOnInit() {
  }

}
