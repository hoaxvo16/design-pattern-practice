import { Car } from './Car';

export class LuxuryCar extends Car {
   private goldGram: number = 0;

   setGoldGram(gold: number) {
      this.goldGram = gold;
   }
}
