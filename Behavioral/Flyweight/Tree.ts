import { TreePolling } from './TreePolling';
import { TreeType } from './TreeType';

export class Tree {
   private x: number;
   private y: number;
   private type: TreeType;
   constructor(x: number, y: number, c: string, n: string) {
      this.x = x;
      this.y = y;
      const getTreeType = TreePolling.GetTreeType(c, n);
      this.type = getTreeType;
   }
   draw() {
      console.log('Draw tree', this.x, this.y, this.type);
   }
}
