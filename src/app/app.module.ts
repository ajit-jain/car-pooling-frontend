import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders} from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthenticateComponent } from './shared/authenticate/authenticate.component';
import { AutheticateService } from './services/autheticate.service';
import {LocalStorageService} from './services/localStorage.service';
import { RegisterDetailsComponent} from './components/register-details/register-details.component';
import { EmployeeComponent } from './components/register-details/components/employee/employee.component';
import { BusinessOwnerComponent } from './components/register-details/components/business-owner/business-owner.component';
import { UserdetailsComponent } from './components/register-details/components/userdetails/userdetails.component';
const rootRoutes:ModuleWithProviders=RouterModule.forRoot([
  
  { path:'user', component:AuthenticateComponent },
  { path:'register_details', component:RegisterDetailsComponent}
  ])
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuthenticateComponent,
    RegisterDetailsComponent,
    EmployeeComponent,
    BusinessOwnerComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,rootRoutes,ReactiveFormsModule
  ],
  providers: [AutheticateService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
