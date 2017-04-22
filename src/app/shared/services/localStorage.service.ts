import {Injectable} from "@angular/core";
@Injectable()
export class LocalStorageService {
    storage:any;
    constructor(){
        this.storage=localStorage;
    }
    public retrieve(key:String):String{
        let item = this.storage.getItem(key);
        if(item && item !== 'undefined')
            return JSON.parse(item); 
        return ;
    }
    public store(key:string,value:any){
        this.storage.setItem(key,JSON.stringify(value));
    }
    public delete(key:String){
        this.storage.removeItem(key);
    }
}