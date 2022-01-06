import { Car } from './Car';
import { ICarBuilder } from './CarBuilder';
export class NormalCarBuilder implements ICarBuilder {
   car: Car = new Car();
   buildChair(chair: string) {
      this.car.setChair(chair);
      return this;
   }
   buildEngine(engine: string) {
      this.car.setEngine(engine);
      return this;
   }

   buildWheel(wheel: string) {
      this.car.setWheel(wheel);
      return this;
   }

   getCar() {
      return this.car;
   }
}
