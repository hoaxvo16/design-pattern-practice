import { Forest } from './Forest';

function main() {
   const forest = new Forest();

   for (let i = 0; i < 100; i++) {
      forest.addTree(i, i + 1, 'green', 'BigTree');
   }

   forest.draw();
}

main();
