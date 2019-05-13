import { Component } from '@angular/core';

@Component({
  selector: 'gameinfo',
  template: `
    <h2>Javascript memory</h2>
    <div>Verlopen tijd: <span id="tijd">0</span> seconden.<br/>
    Gevonden kaart-paren: <span id="gevonden">0</span><br>
    </div>
  `
})
export class GameinfoComponent { }
