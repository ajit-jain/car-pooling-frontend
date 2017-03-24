import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-header',
  template: `<div class="bg-inverse" style="width:100%;position:relative">
        <ul class="nav nav-tabs bg-inverse ">
          <li class="nav-item">
            <a class="nav-link active" >Active</a>
          </li>
         
        </ul>
        <div style="position:absolute;top:0;right:0">

            <a type="button" class="btn btn-raised btn-secondary" [routerLink]="['/user']">LogIn/Register</a>
            
        </div>
   </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
