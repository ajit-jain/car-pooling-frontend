import { Component, OnInit, Input } from '@angular/core';
import {AutheticateService} from '../../../../services/autheticate.service';
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
        <input name="mobile"  class="form-control input-md"
            id="mobile" type="tel" placeholder="mobile" > 
        </div>
        <label class="col-xs-1"></label>
    </div>
    <div class="form-group" >
        <label class="col-sm-2 hidden-xs control-label" for="gender">Gender</label> 
        <label class="col-xs-1"></label>
        <div class="col-sm-8 col-xs-10"> 
            
            <select class="form-control" id="gender">
                <option>Male</option>
                <option>Female</option>
                <option>Trans</option>
            </select>
      
        </div>
        <label class="col-xs-1"></label>
    </div>
    <div class="form-group">
        <label class="col-xs-1 hidden-sm hidden-md hidden-lg"></label>
        <label class="col-sm-2 col-xs-3 control-label center" for="type">User type</label> 
       
        <div class="col-sm-8 col-xs-6" id="type"> 
            <div class="radio left-float"> <label><input type="radio" name="optradio">Pooler</label></div>
           <div class="radio left-float"> <label><input type="radio" name="optradio">Seeker</label></div>
           <div class="radio left-float"> <label><input type="radio" name="optradio">Both</label></div>
        </div>
        <label class="col-xs-1"></label>
    </div>
     <div class="form-group" >
        <label class="col-sm-2 hidden-xs control-label" for="address">Address</label> 
        <label class="col-xs-1"></label>
        <div class="col-sm-8 col-xs-10"> 
            <textarea class="form-control" rows="2" id="address"></textarea>
        </div>
        <label class="col-xs-1"></label>
    </div>
  </div>
  `,
  styleUrls: ['../../../assets/css/style.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private _auth:AutheticateService) { }
  @Input() personalDetails;
  ngOnInit() {
    this._auth.getData().subscribe((data)=>{
       if(Object.keys(data).length){

       }
    })
  }

}
