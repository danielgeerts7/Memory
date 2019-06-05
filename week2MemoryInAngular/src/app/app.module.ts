import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';
import { RouteRoutingModule } from './route/route-routing.module'

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
    imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouteRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
