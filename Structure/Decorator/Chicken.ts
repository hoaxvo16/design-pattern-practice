import { IPizza } from './IPizza';
import { ToppingDecorator } from './ToppingDecorator';

export class Chicken extends ToppingDecorator {
   pizza: IPizza;

   constructor(pizza: IPizza) {
      super(pizza);
      console.log('Add chicken');
   }
   getDescription() {
      return this.pizza.getDescription() + ' with chicken';
   }

   getPrice() {
      return this.pizza.getPrice() + 0.8;
   }
}
