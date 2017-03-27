import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-header',
  template: `<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Car Pool</a>
    </div>
    <ul class="nav navbar-nav pull-right">
      <li class="active"><a [routerLink]="['/user']">login/Register</a></li>
      
    </ul>
  </div>
</nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
