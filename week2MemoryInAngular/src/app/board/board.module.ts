import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { BoardComponent } from './board.component'
import { CardComponent } from './card.component'

@NgModule({
  declarations: [
    CardComponent,
    BoardComponent,
  ],
  exports : [
    CardComponent,
    BoardComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class BoardModule { }
