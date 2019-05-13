import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ConfigComponent } from './config.component'
import { PickcolorComponent } from './pickcolor.component'
import { StartgameComponent } from './startgame.component'
import { TopfiveComponent } from './topfive.component'

@NgModule({
  declarations: [
    ConfigComponent,
    PickcolorComponent,
    StartgameComponent,
    TopfiveComponent,
  ],
  exports : [
    ConfigComponent,
    PickcolorComponent,
    StartgameComponent,
    TopfiveComponent,
  ],
  imports: [
      CommonModule,
   ]
})
export class SidebarModule { }
