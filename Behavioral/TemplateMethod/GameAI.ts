export abstract class GameAI {
   protected isDied: boolean = false;
   protected heath: number;

   constructor(hp: number) {
      this.heath = hp;
   }

   public increaseHeight(amount: number) {
      this.heath += amount;
   }

   public decreaseHeight(amount: number) {
      if (this.heath - amount <= 0) {
         this.die();
      }
   }

   public die() {
      this.isDied = true;
      this.heath = 0;
   }
}
