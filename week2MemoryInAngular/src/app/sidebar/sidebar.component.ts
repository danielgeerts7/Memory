import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
  <table id="meta">
    <tr><td>
      <topfive>card loading...</topfive>
      <config>card loading...</config>
    </td></tr>
    <tr><td>
      <pickcolor>card loading...</pickcolor>
    </td></tr>
    <tr><td>
      <startgame>card loading...</startgame>
    </td></tr>
  </table>
  `
})
export class SidebarComponent { }
