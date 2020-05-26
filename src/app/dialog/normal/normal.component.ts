import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styles: []
})
export class NormalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
