import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-acuerdo',
  templateUrl: './acuerdo.component.html',
  styles: []
})
export class AcuerdoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
