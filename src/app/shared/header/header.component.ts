import { Component, OnInit } from '@angular/core';
import {AutheticateService} from  '../../services/autheticate.service';
@Component({
  selector: 'cp-header',
  template: `<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Car Pool</a>
    </div>
    <ul class="nav navbar-nav pull-right">
      <li class="active" [class.hidden]="_authService.isLoggedIn() | async"><a [routerLink]="['/user']">login/Register</a></li>
      <li class="active" [class.hidden]="!(_authService.isLoggedIn() | async)"><button class="btn custom-btn" (click)="logout()">Logout</button>
    </ul>
  </div>
</nav>
  `,
  styleUrls:['../assets/css/style.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService:AutheticateService) { }

  ngOnInit() {
  }
  logout(){
    this._authService.logoutUser();
    
  }
}
