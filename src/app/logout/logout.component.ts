import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  loggedout;

  constructor(private userService:UserService, private route: Router) { }

  ngOnInit() {

  }

  logout(){
    this.userService.logout(this.loggedout).subscribe(
      response => {
        console.log(response);
        this.route.navigate(['/logout']);
      },
      error => {
        console.log('error', error);
      }

    );
    //this.logon.password = '';
    //this.logon.email = '';
  }

}
