import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

// DIALOGS
import { AcuerdoComponent } from '../dialog/acuerdo/acuerdo.component';
import { NormalComponent } from '../dialog/normal/normal.component';
import { NewhopComponent } from '../dialog/newhop/newhop.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private dialog: MatDialog) { }


	openDialog() {
    const dialogRef = this.dialog.open(AcuerdoComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
			console.log(result);

    });
  }

  condicionesDialog() {
    return this.dialog.open(AcuerdoComponent);
  }

	newHopDialog() {
		this.dialog.open(NewhopComponent);
	}

	simpleDialog(title:string, text:string):void {
		this.dialog.open(NormalComponent, {
			data:{
				title: title, text:text
			}
		})
	}

	emptyInput(text:string):void {
		this.dialog.open(NormalComponent, {
			data:{
				title: 'El campo esta vacío !', text:text
			}
		})
	}
}
