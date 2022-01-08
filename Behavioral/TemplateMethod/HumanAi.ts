import { GameAI } from './GameAI';

export class HumanAi extends GameAI {
   constructor(hp: number) {
      super(hp);
   }
   public useShield() {
      console.log('Human use Shield');
   }
}
