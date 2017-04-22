import {Injectable} from '@angular/core';
@Injectable()
export class CookieService {
    constructor(){}
    setCookie(name:string,value:any,expiresIn:number,path:string=""){
        let d:Date =new Date();
        d.setTime(d.getTime()+expiresIn*24*60*60*1000);
        let expires:string = "expires=" +d.toUTCString();
        console.log(value);
        document.cookie = name + "=" + JSON.stringify(value) +";"+expires+(path.length > 0 ? "; path="+path:"");
    }
    public getCookie(name:string){
        let ca:Array<string> = document.cookie.split(';');
        let caLen:number = ca.length;
        let cookieName = name + '=';
        let c:string;
        for(let i=0;i<caLen;i++){
            c  = ca[i].replace(/^\s\+/g,"");
            if(c.indexOf(cookieName) == 0){
                return JSON.parse(c.substring(cookieName.length,c.length));
            }
        }
        return "";
    }
    public deleteCookie(name){
        this.setCookie(name,"",-1);
    }
}