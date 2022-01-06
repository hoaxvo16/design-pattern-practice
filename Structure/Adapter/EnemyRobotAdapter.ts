import { RobotAttacker } from './RobotAttacker';
import { EnemyAttacker } from './EnemyAttacker';
export class EnemyRobotAdapter implements EnemyAttacker {
   private robot: RobotAttacker;

   constructor(robot: RobotAttacker) {
      this.robot = robot;
   }

   moveForward() {
      this.robot.driveForward();
   }

   shoot() {
      this.robot.fireRocket();
   }
}
