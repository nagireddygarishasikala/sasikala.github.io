import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainPageComponent} from './main-page/main-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {AuthGuardService} from './auth-guard.service';
import { FormsModule } from '@angular/forms';
import { AnalyticsComponent } from './analytics/analytics.component';
 import { ToastrModule } from 'ng6-toastr-notifications';
 import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'mainpage', component: MainPageComponent, canActivate: [AuthGuardService]},
      {path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuardService]},
      {path: '**', component: LoginComponent}
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SocialLoginModule,
    ToastrModule.forRoot(),
   
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('148517665605-jspahbqleats6lvlag9kasc2c11b5g7o.apps.googleusercontent.com')
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('561602290896109')
        }
      ]
    }
  },
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
