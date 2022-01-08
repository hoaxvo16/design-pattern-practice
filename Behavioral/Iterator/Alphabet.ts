import { Iterator } from './Iterator';
import { WordList } from './WordList';
export class Alphabet implements Iterator {
   private list: WordList;
   private pos: number = 0;

   constructor(list: WordList) {
      this.list = list;
   }

   hasNext(): boolean {
      return this.list.getIndex(this.pos) !== undefined;
   }

   getNext(): string {
      return this.list.getIndex(this.pos++);
   }

   reset() {
      this.pos = 0;
   }
}
