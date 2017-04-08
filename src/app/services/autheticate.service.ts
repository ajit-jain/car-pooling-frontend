import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable,BehaviorSubject} from 'rxjs/Rx';
import {LocalStorageService} from '../services/localStorage.service';
@Injectable()
export class AutheticateService {
  isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  dataSubject = new BehaviorSubject<Object>({});
  /**
   * 
   * @returns {boolean} 
   */
   hasToken(){
     return !!this.StorageService.retrieve('token');
   }

  constructor(private _http:Http,private StorageService:LocalStorageService) { }
  createUser(body:Object):Observable<any>{
    console.log("In Observable");
    return this._http.post('http://localhost:8000/signup',body).map((data)=>data.json())
    .catch((err)=>Observable.throw(err.message || 'Server Error'))
  }
  verifyUser(body:Object):Observable<any>{
    console.log("In Verify");
    return this._http.post("http://localhost:8000/verify",body)
    .map((data)=>data.json())
    .map((res)=>{
      if(!!res.data.token){
        console.log(res.data);
          this.StorageService.store('token',res.data.token);
          this.isLoggedInSubject.next(true);
          this.dataSubject.next(res.data);
      }
      return res;
    })
    .catch((err)=>{ 
      console.log("ddhdh",err);
      return Observable.throw(err.message || 'Server Error')});
  }
  loginUser(body:Object):Observable<any>{
    console.log("In Login");
    return this._http.post("http://localhost:8000/login",body)
          .map(data=>data.json())
          .map(res =>{
            if(res.data && res.data.active){
              this.StorageService.store('token',res.data.token);
              this.isLoggedInSubject.next(true);
              this.dataSubject.next(res.data);
            }
            return res;
          })
          .catch((err)=>Observable.throw(err.message || 'Server Error'));
  }
  isLoggedIn():Observable<any>{
    return this.isLoggedInSubject.asObservable();
  }
  getData():Observable<any>{
    return this.dataSubject.asObservable();
  }
  logoutUser(){
    this.StorageService.delete('token');
    this.isLoggedInSubject.next(false);
    this.dataSubject.next({});
  }
}
