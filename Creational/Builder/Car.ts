export class Car {
   protected engine: string = '';
   protected chair: string = '';
   protected wheel: string = '';
   setEngine(engine: string) {
      this.engine = engine;
   }
   setChair(chair: string) {
      this.chair = chair;
   }
   setWheel(wheel: string) {
      this.wheel = wheel;
   }
}
