import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../../firebase/auth/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  constructor(private authService: FirebaseAuthService) { }

  ngOnInit() {
  }

  public authWithGoogle() {
    this.authService.signInWithGoogle();
  }

}