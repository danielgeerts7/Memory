import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar.component'

import { ConfigComponent } from './config.component'
import { PickcolorComponent } from './pickcolor.component'
import { StartgameComponent } from './startgame.component'
import { TopfiveComponent } from './topfive.component'

@NgModule({
  declarations: [
    SidebarComponent,
    ConfigComponent,
    PickcolorComponent,
    StartgameComponent,
    TopfiveComponent,
  ],
  exports : [
    SidebarComponent
  ],
  imports: [
      CommonModule,
      FormsModule
   ]
})
export class SidebarModule { }
