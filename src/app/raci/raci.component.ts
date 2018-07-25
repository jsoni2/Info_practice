import { Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import { AppModule } from '../app.module';
import {Http, Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../LocalStorageService';



@Component({
  selector: 'app-root',
  templateUrl: './raci.component.html',
  styleUrls: ['./raci.component.css'],
  providers: [UserService]
})

export class RaciComponent {
public ProductDetails = [];

constructor(private userService: UserService, private http: HttpClient){} //private localstorageService: LocalStorageService){}
//displaytoken: string;
//access_token:string;

  ngOnInit(){
    //this.displaytoken = this.localstorageService.GetValueFromLocalStorage().access_token;
    this.userService.getData(this.ProductDetails).subscribe(data => this.ProductDetails = data);
    console.log("from raci");

  }

//  getData(){
  //  this.userService.getData().subscribe(
    //  response => {
      //  console.log(response);
      //},
      //error => {
      //  console.log('error', error);
      //}

    //);
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
/*  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
}
}*/
