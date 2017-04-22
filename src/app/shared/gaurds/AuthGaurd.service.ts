import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutheticateService } from '../services/autheticate.service';
@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(private _authService:AutheticateService){}
    canActivate(){
        return this._authService.isLoggedIn();
    }
}
