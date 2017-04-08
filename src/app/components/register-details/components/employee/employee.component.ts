import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee',
  template: `
    <div>
        <div class="form-group" >
            <label class="col-sm-2 hidden-xs control-label" for="company">Company</label> 
            <label class="col-xs-1"></label>
            <div class="col-sm-8 col-xs-10"> 
            <input name="company"  class="form-control input-md"
            id="company" type="text" placeholder="Company Name"> 
            </div>
            <label class="col-xs-1"></label>
        </div>
        <div class="form-group" >
            <label class="col-sm-2 hidden-xs control-label" for="designation">Designation</label> 
            <label class="col-xs-1"></label>
            <div class="col-sm-8 col-xs-10"> 
            <input name="designation"  class="form-control input-md"
            id="designation" type="text" placeholder="Designation"> 
            </div>
            <label class="col-xs-1"></label>
        </div>
        <div class="form-group" >
            <label class="col-sm-2 hidden-xs control-label" for="address"> office Address</label> 
            <label class="col-xs-1"></label>
            <div class="col-sm-8 col-xs-10"> 
                <textarea class="form-control" rows="2" id="address"></textarea>
            </div>
            <label class="col-xs-1"></label>
        </div>
    </div>
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
