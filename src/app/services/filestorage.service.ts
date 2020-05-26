import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';

import { Upload } from '../models/upload';
import { Observable} from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FilestorageService {
    uploadPercent: Observable<number>;
    downloadURL: Observable<string>;
    constructor(private storage: AngularFireStorage) { }

    pushUpload(upload) {
        const file = upload.target.files[0];
        const filePath:string = (new Date()).toString();
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);

        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(
            finalize( () => this.downloadURL = fileRef.getDownloadURL() )
        ).subscribe(d => console.log(d));
    }
}
