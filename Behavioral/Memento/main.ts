import { CareTaker } from './CareTaker';
import { Memento } from './Memento';
import { Original } from './Original';
function main() {
   const original = new Original();
   const careTaker = new CareTaker();
   careTaker.addMemento(original.save('Phase 1'));
   careTaker.addMemento(original.save('Phase 2'));
   careTaker.addMemento(original.save('Phase 3'));

   console.log(original.getContent());
   original.restore(careTaker.undo());
   console.log(original.getContent());
   original.restore(careTaker.redo());
   console.log(original.getContent());
}

main();
