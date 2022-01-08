import { GameAI } from './GameAI';

export class MonsterAI extends GameAI {
   constructor(hp: number) {
      super(hp);
   }
   public useMedic() {
      this.heath += 10;
      console.log('Monster increase heath');
   }
}
