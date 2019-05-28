import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RowComponent } from './row.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    RowComponent,
    CardComponent,
  ],
  exports : [
    RowComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class RowModule { }
