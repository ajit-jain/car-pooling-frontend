import {environment} from '../../../environments/environment';
import {Response,Headers} from '@angular/http';
import {LocalStorageService} from './localStorage.service';
export class BaseService{
    constructor(private _storage:LocalStorageService){}
    _url = environment.API;
    extractData(data:Response){
        console.log("Response Received");
        return data.json();
    }
    setAuthHeaders():Headers{
        let headerConfig = {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        }
        console.log(this._storage.retrieve('token'));
        if(this._storage.retrieve('token'))
            headerConfig['Authorization'] = `JWT ${this._storage.retrieve("token")}`;
        return new Headers(headerConfig);
    }
}