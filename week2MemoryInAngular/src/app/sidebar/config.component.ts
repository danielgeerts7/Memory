import { Component } from '@angular/core';

@Component({
  selector: 'config',
  template: `
  <b>Gemiddelde speeltijd:</b> <span id="gemiddeld">0s (+0s)</span><br/><br/>
  <b>Karakter op kaarten:</b>
    <select name="character" id="character">
      <option value="*">*</option>
      <option value="#">#</option>
      <option value="@">@</option>
      <option value="&">&</option>
      <option value="%">%</option>
      <option value="X">X</option>
    </select>
  <br>
  <b>Afmeting bord:</b><select name="size" id ="size">
      <option value=2>2</option>
      <option value=4>4</option>
      <option value=6 selected>6</option>
  </select>
  `
})
export class ConfigComponent { }
