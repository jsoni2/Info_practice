import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';
import {Products} from './products';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthGuard} from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class UserService {

httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  constructor(private http: HttpClient){}

  registerUser(userData): Observable<any> {
    return this.http.post('http://loginapi.com:8000/api/v1/rest-auth/registration/', userData)
  }

  login(logindata): Observable<any> {
    return this.http.post('http://loginapi.com:8000/api/v1/rest-auth/login/', logindata)
}

logout(logoutData): Observable<any> {
  return this.http.post('http://loginapi.com:8000/api/v1/rest-auth/logout/', logoutData)
}

getData() : Observable<any> {
       return this.http.get('http://loginapi.com:8000/api/v1/raci/', this.getAuthHeaders());
   }
getAuthHeaders()
{
  const token = localStorage.getItem('token');
  //console.log("from getauth");
  //console.log(token);
    const httpHeaders = new HttpHeaders(
      {
      'Authorization': 'Token ' + token});
    return { headers: httpHeaders};
}
getUserDetails() : Observable<any> {
       return this.http.get('http://loginapi.com:8000/api/v1/user/',this.getAuthHeaders());
   }

}
