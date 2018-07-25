import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';
import {Products} from './products';
import {LocalStorageService} from './LocalStorageService';


@Injectable({
  providedIn: 'root'
})
export class UserService {
//  loggedIn:boolean;
  constructor(private http: HttpClient){}//private localstorageService: LocalStorageService) {}

  registerUser(userData): Observable<any> {
    return this.http.post('http://loginapi.com:8000/api/v1/rest-auth/registration/', userData)
  }

  login(logindata): Observable<any> {
    return this.http.post('http://loginapi.com:8000/api/v1/rest-auth/login/', logindata)

}

logout(logoutData): Observable<any> {
  return this.http.post('http://loginapi.com:8000/api/v1/rest-auth/logout/', logoutData)

}

getData(getdata) : Observable<any> {

//var a = new Headers();
//a.append('Authorization', 'Bearer' + this.localstorageService.GetValueFromLocalStorage().access_token)
       return this.http.get<Products[]>('http://loginapi.com:8000/api/v1/raci/', getdata);

   }
}
