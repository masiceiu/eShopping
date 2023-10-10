import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp } from "@firebase/app";
//import firebase from 'firebase/app';
import { environment } from '../../../environments/environment';

const app = initializeApp(environment.firebase);
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class FirebaseCoreModule { }
