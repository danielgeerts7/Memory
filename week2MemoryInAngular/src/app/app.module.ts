import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';
import { RouteRoutingModule } from './route/route-routing.module'

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MemoryModule } from './memory/memory.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouteRoutingModule,
    BrowserModule,
    MemoryModule,
    LoginModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
