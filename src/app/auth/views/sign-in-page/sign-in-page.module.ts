import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignInPageComponent],
  exports: [SignInPageComponent]
})
export class SignInPageModule { }
