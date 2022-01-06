import { Car } from './Car';
import { NormalCarBuilder } from './NormalCarBuilder';
import { LuxuryCarBuilder } from './LuxuryCarBuilder';

function main() {
   const car: Car = new NormalCarBuilder()
      .buildChair('black chair')
      .buildEngine('600 ft')
      .buildWheel('50 radius')
      .getCar();

   console.log(car);

   const luxuryCar: Car = new LuxuryCarBuilder()
      .buildGoldBody(5)
      .buildEngine('700ft')
      .getCar();
   console.log(luxuryCar);
}

main();
