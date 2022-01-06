export class RobotAttacker {
   private name: string;
   private driver: string;
   constructor(name: string, driver: string) {
      this.name = name;
      this.driver = driver;
   }
   fireRocket() {
      console.log(`Robot ${this.name} fire rocket`);
   }

   driveForward() {
      console.log(`Robot  ${this.name} is driving forward by ${this.driver}`);
   }
}
