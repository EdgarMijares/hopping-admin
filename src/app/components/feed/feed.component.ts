import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styles: []
})
export class FeedComponent implements OnInit {
  uploadProgress: Observable<number>;
  uploadURL: Observable<string>;

  constructor(private _storage: AngularFirestore) { }

  ngOnInit() {
  }

  upload(event) {
    // const file = event.target.files[0];
    // const randomId = Math.random().toString(36).substring(2);
    // console.log(randomId);
    // const filepath = `images/${randomId}`;
    // const task = this._storage.upload(filepath, file);
    // const fileRef = this._storage.ref(filepath);
    // this.uploadProgress = task.percentageChanges();
    // task.snapshotChanges().pipe(
    //   finalize(() => this.uploadURL = fileRef.getDownloadURL())
    // ).subscribe();
  }
}
