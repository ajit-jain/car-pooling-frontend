import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'business-owner',
  template: `
  <div>
      <div class="form-group" >
            <label class="col-sm-2 hidden-xs control-label" for="business">Business Name</label> 
            <label class="col-xs-1"></label>
            <div class="col-sm-8 col-xs-10"> 
            <input name="company"  class="form-control input-md"
            id="business" type="text" placeholder="Business Name"> 
            </div>
            <label class="col-xs-1"></label>
        </div>
        <div class="form-group" >
            <label class="col-sm-2 hidden-xs control-label" for="telephone">Tel</label> 
            <label class="col-xs-1"></label>
            <div class="col-sm-8 col-xs-10"> 
            <input name="telephone"  class="form-control input-md"
            id="telephone" type="text" placeholder="Designation"> 
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
export class BusinessOwnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
