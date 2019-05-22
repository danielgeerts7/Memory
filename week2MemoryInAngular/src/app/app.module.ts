import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameService } from './game.service';

import { BoardModule } from './board/board.module';
import { MainbarModule } from './mainbar/mainbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BoardModule,
    MainbarModule,
    SidebarModule,
  ],
  bootstrap: [ AppComponent ],
  providers: [ GameService ]
})
export class AppModule { }
