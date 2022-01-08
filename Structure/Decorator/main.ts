import { PlainPizza } from './PlainPizza';
import { Chicken } from './Chicken';
import { Tomato } from './Tomato';
function main() {
   let pizza = new PlainPizza();
   pizza = new Tomato(pizza);
   pizza = new Chicken(pizza);
   console.log(pizza);
   console.log(pizza.getDescription());
   console.log(pizza.getPrice());
}
main();
