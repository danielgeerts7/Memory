import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MemoryComponent } from './memory.component';
import { BoardModule } from '../board/board.module';
import { MainbarModule } from '../mainbar/mainbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { RouterModule, Routes } from '@angular/router';

const loginRoutes:Routes = [
     { path:'', loadChildren: './board/board.module#BoardModule' },
     { path:'', loadChildren: './board/mainbar.module#MainbarModule' },
     { path:'', loadChildren: './board/sidebar.module#SidebarModule' },

]

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
