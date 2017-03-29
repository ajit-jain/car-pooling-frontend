import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class AutheticateService {

  constructor(private _http:Http) { }
  createUser(body:Object):Observable<any>{
    console.log("In Observable");
    return this._http.post('http://localhost:8000/signup',body).map((data)=>data.json())
    .catch((err)=>Observable.throw(err.message || 'Server Error'))
  }
  verifyUser(body:Object):Observable<any>{
    console.log("In Verify");
    return this._http.post("http://localhost:8000/verify",body)
    .map((data)=>data.json())
    .catch((err)=>Observable.throw(err.message || 'Server Error'));
  }
  loginUser(body:Object):Observable<any>{
    console.log("In Login");
    return this._http.post("http://localhost:8000/login",body)
          .map(data=>data.json())
          .catch((err)=>Observable.throw(err.message || 'Server Error'));
  }
}
