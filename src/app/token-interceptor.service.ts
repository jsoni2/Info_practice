import { Injectable} from '@angular/core';
import {HttpInterceptors,HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import {UserService} fron './user.service';
import { Observable } from 'rxjs/Observable';
import {HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from './LocalStorageService';

@Injectable({
  providedIn: 'root'

})
export class TokenInterceptorService implements HttpInterceptors {
  access_token:string;

  constructor(private localstorageService:LocalStorageService) { }
  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
//let userService = this.injector.get(UserService)
console.log("hello");
var tokendata = this.localstorageService.GetValueFromLocalStorage();
var authHeader = 'Bearer' + tokendata.access_token;
    let tokenizedReq = req.clone({
      setHeaders: {Authorization : authHeader}})
    return next.handle(tokenizedReq)
  }
}
