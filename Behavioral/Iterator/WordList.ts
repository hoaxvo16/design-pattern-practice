import { Iterator } from './Iterator';
import { Alphabet } from './Alphabet';
import { ICollection } from './ICollection';
export class WordList implements ICollection {
   private array: Array<string> = [];
   private pos: number = 0;

   getIterator(): Iterator {
      return new Alphabet(this);
   }

   getIndex(idx: number) {
      return this.array[idx];
   }

   add(content: string) {
      this.array.push(content);
   }
}
