import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: []
})
export class LoginComponent implements OnInit {
  logon;

  constructor(private userService:UserService, private route: Router) { }

  ngOnInit() {
    this.logon = {
        email:'',
        password:''
    };
  //  if ( localStorage.getItem('token'))
    //{
      //this.route.navigate(['/raci']);
    //}
}

  loginUser(){
    this.userService.login(this.logon).subscribe(
      (response : any) => {
        console.log(response);
        localStorage.setItem('token', response['key']);
        this.route.navigate(['/raci']);
      //  console.log("after login");
      },

      error =>  {
        console.log('error', error);
      }
    );
  }


}
