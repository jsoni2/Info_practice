import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {LocalStorageService} from '../LocalStorageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: []
})
export class LoginComponent implements OnInit {
  logon;

  constructor(private userService:UserService, private route: Router){}//private localstorageService: LocalStorageService) { }

  ngOnInit() {
    this.logon = {
        email:'',
        password:''
    };
  }

  loginUser(){
    this.userService.login(this.logon).subscribe(
      response => {
        console.log(response);
        this.localstorageService.SetAuthorization();//'userToken', response.access_token);
        this.route.navigate(['/raci']);
        console.log("after login");
      },
      error => {
        console.log('error', error);
      }

    );}
    //this.logon.password = '';
    //this.logon.email = '';


}
