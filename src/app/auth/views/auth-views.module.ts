import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignOutPageComponent } from './sign-out-page/sign-out-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SignUpPageComponent,
    SignInPageComponent,
    SignOutPageComponent
  ]
})
export class AuthViewsModule { }