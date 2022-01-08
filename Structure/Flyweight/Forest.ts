import { Tree } from './Tree';

export class Forest {
   private trees: Array<Tree> = [];

   public addTree(x: number, y: number, c: string, n: string) {
      this.trees.push(new Tree(x, y, c, n));
   }

   public draw() {
      this.trees.forEach(tree => {
         tree.draw();
      });
   }
}
