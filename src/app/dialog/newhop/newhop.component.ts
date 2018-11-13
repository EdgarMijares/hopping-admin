import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-newhop',
  templateUrl: './newhop.component.html',
  styleUrls: []
})
export class NewhopComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  newHop(data) {
    console.log(data);
  }

}
