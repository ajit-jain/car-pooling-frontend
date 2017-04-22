import {environment} from '../../../environments/environment';
import {Response} from '@angular/http';
export class BaseService{
    _url = environment.API;
    extractData(data:Response){
        console.log("Response Received");
        return data.json();
    }
}