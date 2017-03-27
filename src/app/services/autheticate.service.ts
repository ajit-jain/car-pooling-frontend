import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class AutheticateService {

  constructor(private _http:Http) { }
  createUser(body:Object):Observable<any>{
    console.log("In Observable");
    return this._http.post('http://localhost:8000/signup',body).map((data)=>data.json())
    .catch((err)=>Observable.throw(err.json().message || 'Server Error'))
  }

}
