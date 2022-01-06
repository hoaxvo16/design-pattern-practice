import { IPizza } from './IPizza';

export class ToppingDecorator implements IPizza {
   pizza: IPizza;

   constructor(pizza: IPizza) {
      this.pizza = pizza;
   }
   getDescription() {
      return this.pizza.getDescription();
   }

   getPrice() {
      return this.pizza.getPrice();
   }
}
