import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseAuthService } from './auth.service';
import { FirebaseCoreModule } from '../core/firebase-core.module';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    FirebaseCoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    FirebaseAuthService
  ]
})
export class FirebaseAuthModule { }