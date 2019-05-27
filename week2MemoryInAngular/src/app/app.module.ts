import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BoardModule } from './board/board.module';
import { MainbarModule } from './mainbar/mainbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BoardModule,
    MainbarModule,
    SidebarModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
