import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any> {
    return this.http.post('http://loginapi.com:8000/api/v1/rest-auth/registration/', userData)
  }

  login(userData): Observable<any> {
    return this.http.post('http://loginapi.com:8000/api/v1/rest-auth/login/', userData)
  }
}
