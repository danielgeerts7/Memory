import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { GameinfoComponent } from './gameinfo.component'
import { TimerComponent } from './timer.component'

@NgModule({
  declarations: [
    GameinfoComponent,
    TimerComponent,
  ],
  exports: [
    GameinfoComponent,
    TimerComponent,
  ],
  imports: [
    CommonModule,
 ]
})
export class MainbarModule { }
