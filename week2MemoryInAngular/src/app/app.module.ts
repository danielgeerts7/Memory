import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { RouteRoutingModule } from './route/route-routing.module'

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    LoginModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
