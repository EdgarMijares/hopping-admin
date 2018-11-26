import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';

import { UserParsing, UserGoogle, UserFacebook } from '../models/models';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LugaresService {

    private lugar
    constructor(private _angularFiresore: AngularFirestore) {

    }
}
