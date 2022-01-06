import { LuxuryCar } from './LuxuryCar.';
import { NormalCarBuilder } from './NormalCarBuilder';

export class LuxuryCarBuilder extends NormalCarBuilder {
   car: LuxuryCar = new LuxuryCar();
   buildGoldBody(gram: number) {
      this.car.setGoldGram(gram);
      return this;
   }
   getCar() {
      return this.car;
   }
}
