import { Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import { AppModule } from '../app.module';
import {Http, Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
//import {GroupPipe} from '../group.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './raci.component.html',
  styleUrls: ['./raci.component.css'],
  providers: [UserService]
})

export class RaciComponent {
public ProductDetails = [];
public Roles = [];
public Activities = [];
//public Groups = [];
loggedout;
public userdetail;
constructor(private userService: UserService, private http: HttpClient, private route: Router){}


  ngOnInit(){

    if(localStorage.getItem('token'))
    {
      this.getData();
      this.getUserDetails();

    }
      else{
        this.route.navigate(['/login']);
      }
    }


    getUserDetails()
    {
      this.userService.getUserDetails().subscribe(response =>
         {
           this.userdetail = response;
           console.log(response);
    },
    error =>  {
      console.log('error', error);
    });
    }



  getData()
  {
    this.userService.getData().subscribe(response =>
       {
         this.ProductDetails = response;
        // console.log(response);
  },
  error =>  {
    console.log('error', error);
  });
}



logoutUser(){
  this.userService.logout(this.loggedout).subscribe(
    response => {
      console.log(response);
      console.log("from logout");
      localStorage.removeItem('token');
      this.route.navigate(['/login']);
    },
    error => {
      console.log('error', error);
    }

  );
  //this.logon.password = '';
  //this.logon.email = '';
}
}

/*SearchRole(Products:array)
{
  for(let i = 0; i<Products.length; i++)
  {
    if(Products.Group == "Requirements")
    {
      if(filteredGroup.includes("Requirements"))
      filteredGroup.push("Requirements");

    }
  }*/
