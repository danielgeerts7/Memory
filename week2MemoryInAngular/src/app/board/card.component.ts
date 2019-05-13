import { Component } from '@angular/core';

@Component({
  selector: 'card',
  template: `
    <li class="card">
      {{ symbol }}
    </li>
  `
})
export class CardComponent {
    symbol = '*'
}
