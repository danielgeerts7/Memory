import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { RowModule } from './row/row.module'
import { BoardComponent } from './board.component'

@NgModule({
  declarations: [
    BoardComponent,
  ],
  exports : [
    BoardComponent,
  ],
  imports: [
    CommonModule,
    RowModule,
  ]
})
export class BoardModule { }
