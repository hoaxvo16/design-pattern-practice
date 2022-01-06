import { IPizza } from './IPizza';
import { ToppingDecorator } from './ToppingDecorator';

export class Tomato extends ToppingDecorator {
   pizza: IPizza;

   constructor(pizza: IPizza) {
      super(pizza);
      console.log('Add tomato');
   }

   getDescription() {
      return this.pizza.getDescription() + ' with tomato';
   }

   getPrice() {
      return this.pizza.getPrice() + 0.4;
   }
}
