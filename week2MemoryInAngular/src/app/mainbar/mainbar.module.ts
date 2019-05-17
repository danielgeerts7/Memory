import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MainbarComponent } from './mainbar.component'
import { GameinfoComponent } from './gameinfo.component'
import { TimerComponent } from './timer.component'

@NgModule({
  declarations: [
    MainbarComponent,
    GameinfoComponent,
    TimerComponent,
  ],
  exports: [
    MainbarComponent
  ],
  imports: [
    CommonModule,
 ]
})
export class MainbarModule { }
