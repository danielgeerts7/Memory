import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MemoryComponent } from './memory.component';
import { BoardModule } from '../board/board.module';
import { MainbarModule } from '../mainbar/mainbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [
    MemoryComponent ],

    imports: [
      BoardModule,
      MainbarModule,
      SidebarModule,
    ],
    })
    export class MemoryModule { }
