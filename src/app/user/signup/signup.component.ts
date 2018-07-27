import { Component, OnInit } from '@angular/core';
import { AppModule } from '../../app.module';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  register;

  constructor(private userService:UserService, private route: Router){

  }

  ngOnInit(){
    this.register = {
      first_name: '',
      last_name: '',
      password1: '',
      password2: '',
      email:'',
      phone_number:''
    };
  }

  registerUser(){
    this.userService.registerUser(this.register).subscribe(
      response => {
        this.route.navigate(['/']);
      },
      error => {
        console.log('error', error);
      }
    );
    this.register.first_name = '';
    this.register.last_name = '';
    this.register.password1 = '';
    this.register.password2 = '';
    this.register.email = '';
    this.register.phone_number = '';
  }
}
