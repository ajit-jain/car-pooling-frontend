import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,Validators,FormGroup} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {AutheticateService} from '../../services/autheticate.service';
@Component({
  selector: 'cp-authenticate',
  templateUrl:'./authenticate.component.html',

  styleUrls:['../assets/css/style.css']
})
export class AuthenticateComponent implements OnInit {
authType:String='Sign In';
otpBox=true;
otpHolder;
  SignupForm:FormGroup;
  LoginForm:FormGroup;
  constructor(private _fb:FormBuilder,private auth:AutheticateService) { }

  ngOnInit() {
    let password= new FormControl('',
    Validators.compose([Validators.required,
    Validators.minLength(6),Validators.maxLength(8)]));
    let confirmPassword=new FormControl('',Validators.compose([CustomValidators.equalTo(password)]));
    this.SignupForm=this._fb.group({
      username:['',[<any>Validators.required,<any>Validators.minLength(6)]],
      email:['',[<any>Validators.required,<any>Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:password,
      confirm:confirmPassword,
      mobile:['',[Validators.required,Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]]
    })
    this.LoginForm=this._fb.group({
     
      email:['',[<any>Validators.required,<any>Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
    })
  }
  authorizeUser(){
    console.log("sjsj",this.SignupForm.controls['email'].value);
    var obj={
      'email':this.SignupForm.controls['email'].value,
      'password':this.SignupForm.controls['password'].value,
      'mobile':'91'+this.SignupForm.controls['mobile'].value
    };
    this.auth.createUser(obj).subscribe((data)=>{
      console.log(data);
      this.otpBox=false;
    })
  }
  createUser(value){
  }
}
