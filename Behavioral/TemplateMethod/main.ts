import { MonsterAI } from './MonsterAI';
import { HumanAi } from './HumanAi';
function main() {
   const human = new HumanAi(100);
   const monster = new MonsterAI(200);
   human.increaseHeight(10);
   human.useShield();
   monster.decreaseHeight(10);
   monster.useMedic();
   monster.decreaseHeight(300);
   console.log(human);
   console.log(monster);
}

main();
