import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthViewsModule } from './views/auth-views.module';
import { FirebaseAuthModule } from '../firebase/auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthViewsModule,
    FirebaseAuthModule,
  ],
  declarations: [],
  providers: []
})
export class AuthModule { }