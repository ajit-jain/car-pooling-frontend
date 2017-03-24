import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthenticateComponent } from './shared/authenticate/authenticate.component';
const rootRoutes:ModuleWithProviders=RouterModule.forRoot([
  { path:'', component:HomeComponent},
  { path:'user', component:AuthenticateComponent },
  ])
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,rootRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
