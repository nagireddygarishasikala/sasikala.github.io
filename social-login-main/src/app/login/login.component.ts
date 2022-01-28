import {Component} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService,FacebookLoginProvider} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
              private socialAuthService: SocialAuthService) {
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => 
      this.router.navigate(['mainpage']));
  }

  loginWithFaceBook(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(() => this.router.navigate(['mainpage']));
  }

  logIn(){
this.router.navigate(['/mainpage']);
  }
}
