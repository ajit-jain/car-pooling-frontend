import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,Validators,FormGroup} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {AutheticateService} from '../../services/autheticate.service';
import { Router } from '@angular/router'
@Component({
  selector: 'cp-authenticate',
  templateUrl:'./authenticate.component.html',

  styleUrls:['../assets/css/style.css']
})
export class AuthenticateComponent implements OnInit {
  authType:String='Sign In';
  otpBox=true;
  obj = {};
  messageBox='';
  validate(c){
    return (c.value>=1000 && c.value<=9999)? null :{valid:false};
  }
  inputObserver=new FormControl('',this.validate);
  SignupForm:FormGroup;
  LoginForm:FormGroup;
  constructor(private _fb:FormBuilder,
  private auth:AutheticateService,private _router:Router) { }

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
  authorizeUser(event:any){
    event.preventDefault();
    if(this.authType === 'Sign Up'){
        this.saveUser();      
    }
    if(this.authType === 'Sign In'){
        this.checkUser();
    }
  }
  saveUser(){
    console.log("sjsj",this.SignupForm.controls['email'].value);
    this.obj={
      'email':this.SignupForm.controls['email'].value,
      'password':this.SignupForm.controls['password'].value,
      'mobile':'91'+this.SignupForm.controls['mobile'].value,
      'username':this.SignupForm.controls['username'].value
    };
    this.auth.createUser(this.obj).subscribe((data)=>{
      console.log(data);
      if(data.success){
        this.otpBox=false;
        this.messageBox=data.message+"   proceed with otp";
      }
      else
        this.messageBox=data.message;
     
    })
  }
  checkUser(){
      console.log("Log details",this.LoginForm.controls['email'],this.LoginForm.controls['password']);
      this.obj={
        email:this.LoginForm.controls['email'].value,
        password:this.LoginForm.controls['password'].value
      }
      this.auth.loginUser(this.obj).subscribe((data)=>{
        console.log(data);
          if(!data.success)
              this.messageBox=data.message;
          else if(!data.data.active){
            this.otpBox=false;
            this.messageBox=data.message;
          }
          else{
              this.messageBox=data.message;
               this._router.navigateByUrl('/register_details');
          }

      },(err)=>{
        console.log(err);
        this.messageBox="something went wrong..."
      })
  }
  verifyOtp(value){

    this.auth.verifyUser({email:this.obj['email'],otp:value})
    .subscribe((result)=>{
      console.log(result);
      if(result.data){
        this.otpBox=true;
        this._router.navigate(['/register_details'])
      }
      else{
          this.messageBox=result.message;        
      }
    },(err)=>{
      console.log(err);
    })

  }
}
