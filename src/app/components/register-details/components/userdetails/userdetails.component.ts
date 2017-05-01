import { Component, OnInit, Input } from '@angular/core';
import {AutheticateService} from '../../../../shared/services/autheticate.service';
import {CookieService} from '../../../../shared/services/cookie.service';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'userdetails',
  template: `
  <div [formGroup]="personalDetails">
    <div class="form-group">
        <label class="col-sm-2 hidden-xs control-label" for="username">Username</label> 
        <label class="col-xs-1"></label>
        <div class="col-sm-8 col-xs-10"> 
        <input name="username" formControlName="username"  class="form-control input-md"
        id="username" type="text" placeholder="Username"> 
        </div>
        <label class="col-xs-1"></label>
    </div>
    <div class="form-group" >
        <label class="col-sm-2 hidden-xs control-label" for="email">Email</label> 
        <label class="col-xs-1"></label>
        <div class="col-sm-8 col-xs-10"> 
        <input name="email" formControlName="email" class="form-control input-md"
            id="email" type="email" placeholder="E-mail"> 
        </div>
        <label class="col-xs-1"></label>
    </div>
    <div class="form-group" >
        <label class="col-sm-2 hidden-xs control-label" for="mobile">Mobile</label> 
        <label class="col-xs-1"></label>
        <div class="col-sm-8 col-xs-10"> 
        <input name="mobile" formControlName="mobile"  class="form-control input-md"
            id="mobile" type="tel" placeholder="mobile" > 
        </div>
        <label class="col-xs-1"></label>
    </div>
    <div class="form-group" >
        <label class="col-sm-2 hidden-xs control-label" for="gender">Gender</label> 
        <label class="col-xs-1"></label>
        <div class="col-sm-8 col-xs-10"> 
            
            <select class="form-control" formControlName="gender" id="gender">
                <option *ngFor="let gender of genderOptions" [value]="gender.value">{{ gender.text }}</option>
            </select>
      
        </div>
        <label class="col-xs-1"></label>
    </div>
    <div class="form-group">
        <label class="col-xs-1 hidden-sm hidden-md hidden-lg"></label>
        <label class="col-sm-2 col-xs-3 control-label center" for="type">User type</label> 
       
        <div class="col-sm-8 col-xs-6" id="type"> 
            <div class="radio left-float" *ngFor="let user of userTypes"> <label><input type="radio" formControlName="user_type" name="user_type" [value]="user.value">{{user.text}}</label></div>
           
        </div>
        <label class="col-xs-1"></label>
    </div>
     <div class="form-group" >
        <label class="col-sm-2 hidden-xs control-label" for="address">Address</label> 
        <label class="col-xs-1"></label>
        <div class="col-sm-8 col-xs-10"> 
            <textarea class="form-control" formControlName="address" rows="2" id="address"></textarea>
        </div>
        <label class="col-xs-1"></label>
    </div>
  </div>
  `,
  styleUrls: ['../../../assets/css/style.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private _auth:AutheticateService,private _cookie:CookieService) { }
  @Input() personalDetails:FormGroup;
  genderOptions:Array<Object>;
  userTypes:Array<Object>;
  ngOnInit() {
        this.genderOptions=[
            {value:"Male",text:"Male"},
            {value:"Female",text:"Female"},
            {value:"Trans", text:"Trans"}
        ];
        this.userTypes=[
            {value:"pooler",text:"Pooler"},
            {value:"seeker",text:"Seeker"},
            {value:"both", text:"Both"}
        ];
        this.personalDetails.valueChanges.subscribe((val)=>{
          console.log(this.personalDetails.valid);
      })
      let _id = (this._cookie.getCookie('credentials')['_id']);
      console.log("ssh",_id);
        if(!!_id){
            this._auth.getUser(_id).subscribe((response)=>{
                console.log(response);
                this.personalDetails.patchValue({'username':response.data.username,'email':response.data.email,'mobile':response.data.mobile});
            })
        } 
    
  }

}
