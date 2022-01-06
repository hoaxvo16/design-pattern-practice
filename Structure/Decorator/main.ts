import { PlainPizza } from './PlainPizza';
import { Chicken } from './Chicken';
import { Tomato } from './Tomato';
function main() {
   const pizza = new Tomato(new Chicken(new PlainPizza()));
   console.log(pizza.getDescription());
   console.log(pizza.getPrice());
}
main();
