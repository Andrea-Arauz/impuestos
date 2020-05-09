import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  constructor( public afAuth: AngularFireAuth) {afAuth.authState.subscribe(user => (this.isLogged = user)); }
    

}


