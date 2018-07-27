import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './user/signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './user/login/login.component';
import { RaciComponent } from './raci/raci.component';
import {UserService} from './user.service';
import {AuthGuard} from './auth.guard';
import { UserComponent } from './user/user.component';
//import { GroupPipe } from './group.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    RaciComponent,
    UserComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,


  ],
  providers: [UserService], //AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
