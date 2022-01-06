import { EnemyAttacker } from './EnemyAttacker';
export class HumanAttacker implements EnemyAttacker {
   private name: string;
   constructor(name: string) {
      this.name = name;
   }
   moveForward() {
      console.log(`Solider ${this.name} moving forward`);
   }

   shoot() {
      console.log(`Solider ${this.name} shooting AK-47`);
   }
}
