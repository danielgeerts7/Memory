export class Card {

  constructor(private className:string, private innerHTML:string, private chr:string) {
    console.log(className + ' ' + chr);
  }

  getChar(){
    return this.chr;
  }

  getClass(){
    return this.className;
  }
}
