import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RaciComponent } from './raci/raci.component';
import { LogoutComponent } from './logout/logout.component';
import {UserService} from './user.service';
import {AuthGuard} from './auth.guard';
//import {HTTP_INTERCEPTORS} from '@angular/common/http';
//import  {TokenInterceptorService} from './token-interceptor.service';
//import {LocalStorageService} from './LocalStorageService';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    RaciComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,


  ],
  providers: [UserService, AuthGuard]//LocalStorageService {
  //  provide: HTTP_INTERCEPTORS,
  ///  useClass: TokenInterceptorService,
//multi: true,
//  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
