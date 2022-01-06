import { Car } from './Car';
import { NormalCarBuilder } from './NormalCarBuilder';

export interface ICarBuilder {
   buildEngine: (engine: string) => NormalCarBuilder;
   buildWheel: (wheel: string) => NormalCarBuilder;
   buildChair: (chair: string) => NormalCarBuilder;
   getCar: () => Car;
}
