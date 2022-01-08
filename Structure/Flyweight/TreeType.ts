import { Tree } from './Tree';

export class TreeType {
   private color: string;
   private name: string;

   constructor(c: string, n: string) {
      this.color = c;
      this.name = n;
   }

   draw(tree: Tree) {
      console.log('Draw', this.color, this.name, tree.xCoord, tree.yCoord);
   }
}
