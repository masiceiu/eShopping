import { Injectable } from '@angular/core';
import { FirebaseAuthModule } from './auth.module';
//import { AngularFireAuth } from '@angular/fire/auth';
//import { auth } from 'firebase/app';
import { Observable, from,of } from 'rxjs';
//import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
//import { AngularFireDatabase } from '@angular/fire/compat/database';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
//import {firebase} from 'firebase/compat/app';
//import firebase from '@firebase/app';

@Injectable({
  providedIn: FirebaseAuthModule
})
export class FirebaseAuthService {
  
  user;
  credential;
  userdetails;

  constructor(){
    /*constructor(
    private angularFireDB: AngularFireDatabase,
    public afAuth: AngularFireAuth) {

      this.user = afAuth.authState;
      this.credential = afAuth.credential;
    this.user.subscribe(
      (res) => {
        this.userdetails = res;
      }
    )*/
  }
    public signInWithGoogle(): Observable<any> {
    /*public signInWithGoogle(): Observable<afAuth.credential> {
    const googleProvider = new auth.GoogleAuthProvider();
    return from(
      this.afAuth.auth.signInWithPopup(googleProvider)
    );*/
    return from(of());
  }
  /**/
  login() {
    
    //this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    //this.afAuth.auth.signOut();
  }


}