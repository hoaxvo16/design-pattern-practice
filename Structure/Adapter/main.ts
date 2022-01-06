import { EnemyRobotAdapter } from './EnemyRobotAdapter';
import { RobotAttacker } from './RobotAttacker';
import { HumanAttacker } from './HumanAttacker';
function main() {
   const humanAttacker = new HumanAttacker('Jack');
   const robotAttacker = new RobotAttacker('AI-09', 'John');
   const enemyRobotAdapter = new EnemyRobotAdapter(robotAttacker);
   humanAttacker.moveForward();
   humanAttacker.shoot();
   enemyRobotAdapter.moveForward();
   enemyRobotAdapter.shoot();
}

main();
