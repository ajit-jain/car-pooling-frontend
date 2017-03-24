import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <cp-header></cp-header>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app works!';
}
