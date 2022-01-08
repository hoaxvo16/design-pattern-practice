import { TreeType } from './TreeType';

export class TreePolling {
   private static treeMap: Map<string, TreeType> = new Map();

   public static GetTreeType(c: string, n: string): TreeType {
      const temp = this.treeMap.get(`${c}+${n}`);
      if (temp) {
         console.log('Use existing tree type');
         return temp;
      } else {
         console.log('Cant find tree type create new and return');
         const newTreeType = new TreeType(c, n);
         this.treeMap.set(`${c}+${n}`, newTreeType);
         return newTreeType;
      }
   }
}
