import { Injectable } from '@angular/core';
import { FirebaseAuthModule } from './auth.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: FirebaseAuthModule
})
export class FirebaseAuthService {

  constructor(private firebaseAuth: AngularFireAuth) {
    console.log('hello');
  }

  public signInWithGoogle(): Observable<auth.UserCredential> {
    const googleProvider = new auth.GoogleAuthProvider();
    return from(
      this.firebaseAuth.auth.signInWithPopup(googleProvider)
    );
  }

}