import {Injectable} from '@angular/core';

@Injectable(){}

  export class LocalStorageService{
access_token:string;
    public SetAuthorization () : void {
      localstorageService.setItem("Authorization", JSON.stringfy());
    }

    public GetValueFromLocalStorage () : void {
      let tokendata = JSON.parse(localstorageService.getItem("Authorization"));
      return tokendata == null ? null: tokendata;
    }

}
