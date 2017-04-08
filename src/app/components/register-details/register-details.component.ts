import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';
import {AutheticateService} from '../../services/autheticate.service';

@Component({
  selector: 'register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['../assets/css/style.css']
})
export class RegisterDetailsComponent implements OnInit {
  registerDetails:FormGroup;
  constructor(private _fb:FormBuilder,private _auth:AutheticateService) { }
  checkedEle = true;
  ngOnInit() {
    this._auth.getData().subscribe((data)=>{
      if(Object.keys(data).length){
          this.registerDetails=this._fb.group({
            personalDetails:this._fb.group({
              'username':[data.username,[Validators.required]],
              'email':[data.email,[Validators.required]]
            })

         });
      }
    })
      
  }

}
