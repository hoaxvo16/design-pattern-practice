import { IPizza } from './IPizza';
export class PlainPizza implements IPizza {
   constructor() {
      console.log('Add plain pizza');
   }
   getPrice() {
      return 4.0;
   }

   getDescription() {
      return 'A pizza';
   }
}
