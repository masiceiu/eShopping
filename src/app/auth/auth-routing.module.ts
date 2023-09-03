import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPageComponent } from './views/sign-in-page/sign-in-page.component';
import { SignOutPageComponent } from './views/sign-out-page/sign-out-page.component';
import { SignUpPageComponent } from './views/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: 'sign-out',
    component: SignOutPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }