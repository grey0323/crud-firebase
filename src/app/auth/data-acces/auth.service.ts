import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

import { provideToastr } from 'ngx-toastr';

export interface USer{
  email:string;
  password:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth = inject(Auth)
 

  signUP(user:USer){
    return createUserWithEmailAndPassword(this._auth, user.email, user.password)
  }

  sigin(user:USer){

    return signInWithEmailAndPassword(this._auth, user.email, user.password)
  }

  siginiwitgoogle(){

    
    const provider = new GoogleAuthProvider
    provider.setCustomParameters({prompt:'select_account'});
    return signInWithPopup(this._auth, provider)
  }
}


