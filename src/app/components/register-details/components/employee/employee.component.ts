import { Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'employee',
  template: `
    <div [formGroup]="companyDetails">
        <div class="form-group" >
            <label class="col-sm-2 hidden-xs control-label" for="company">Company</label> 
            <label class="col-xs-1"></label>
            <div class="col-sm-8 col-xs-10"> 
            <input name="company" formControlName="name"  class="form-control input-md"
            id="company" type="text" placeholder="Company Name"> 
            </div>
            <label class="col-xs-1"></label>
        </div>
        <div class="form-group" >
            <label class="col-sm-2 hidden-xs control-label" for="designation">Designation</label> 
            <label class="col-xs-1"></label>
            <div class="col-sm-8 col-xs-10"> 
            <input name="designation" formControlName="designation"  class="form-control input-md"
            id="designation" type="text" placeholder="Designation"> 
            </div>
            <label class="col-xs-1"></label>
        </div>
        <div class="form-group" >
            <label class="col-sm-2 hidden-xs control-label"  for="address"> office Address</label> 
            <label class="col-xs-1"></label>
            <div class="col-sm-8 col-xs-10"> 
                <textarea class="form-control" formControlName="address" rows="2" id="address"></textarea>
            </div>
            <label class="col-xs-1"></label>
        </div>
    </div>
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {
@Input() companyDetails:FormGroup;
  constructor() { }

  ngOnInit() {
      this.companyDetails.valueChanges.subscribe((val)=>{
          console.log(this.companyDetails.valid);
      })
  }

}
