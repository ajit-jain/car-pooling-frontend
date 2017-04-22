import { Component, OnInit,AfterViewInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';
import {AutheticateService} from '../../shared/services/autheticate.service';
import {User } from '../../models/user.js';
import {CookieService} from '../../shared/services/cookie.service';
@Component({
  selector: 'register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['../assets/css/style.css']
})
export class RegisterDetailsComponent implements OnInit,AfterViewInit{
  registerDetails:FormGroup;
  constructor(private _fb:FormBuilder,private _auth:AutheticateService,private _cookie:CookieService) { }
  clicked:boolean=false
 // checkedEle = true;
  ngOnInit(){
    console.log(this._cookie.getCookie("credentials"));
    this.registerDetails=this._fb.group({
            personalDetails:this._fb.group({
              'username':['',[Validators.required,Validators.pattern(/[a-z | A-Z]{2,}/)]],
              'email':['',[<any>Validators.required,<any>Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
              'mobile':['',[Validators.required,Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
              'gender':['M',[Validators.required]],
              "user_type":['',[Validators.required]],
              "address":['',Validators.required]
            }),
            optradio:[true],
            companyDetails:this._fb.group(this.initializeCompanyDetails()),
            businessDetails:this._fb.group(this.initializeBusinessDetails()),
      });
      this.update(this.registerDetails.controls['companyDetails'],this.registerDetails.controls['businessDetails'],'company')
      
  }
  initializeBusinessDetails(){
    const model= {
              name:['',[Validators.required]],
              tel:['',Validators.compose([Validators.required,Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)])],
              address:['',Validators.required]
            } 
      return model;
  }
  initializeCompanyDetails(){
        const model= {
                  name:['',[Validators.required]],
                  designation:['',Validators.required],
                  address:['',Validators.required]
                };
        return model;
  }
      
  ngAfterViewInit(){
    this.registerDetails.controls['optradio'].valueChanges.subscribe((data)=>{
       let company$=<FormGroup>this.registerDetails.controls['companyDetails'];
       let business$=<FormGroup>this.registerDetails.controls['businessDetails']; 
       (data)?this.update(company$,business$,'company'):this.update(business$,company$,'business')
    })
  
  }
  update(current,hidden,params){
    let initializeMethod=(params == 'company')?this.initializeCompanyDetails:this.initializeBusinessDetails;
     Object.keys(current.controls).forEach((key)=>{
      
              current.controls[key].setValidators(initializeMethod()[key][1]);
              current.controls[key].updateValueAndValidity();
      });
      Object.keys(hidden.controls).forEach((key)=>{
     
              hidden.controls[key].setValidators(null);
              hidden.controls[key].updateValueAndValidity();
      });
      console.log(current.valid,hidden.valid);
  }
  saveDetails(formValue:User){
    console.log(formValue);
    this.clicked=true;
    this._auth.registerUser(formValue).subscribe((data)=>{
      console.log(data);
    })
  }
}
