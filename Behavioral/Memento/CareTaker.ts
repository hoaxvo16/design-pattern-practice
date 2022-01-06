import { Memento } from './Memento';

export class CareTaker {
   private history: Memento[] = [];
   private currentState: number = -1;
   addMemento(memento: Memento) {
      const temp = new Memento(memento.getContent());
      this.history.push(temp);
      this.currentState++;
   }

   getMemento(index: number) {
      return this.history[index];
   }

   undo() {
      if (this.currentState >= 0) {
         this.currentState--;
      }
      return this.history[this.currentState];
   }

   redo() {
      if (this.currentState < this.history.length - 1) {
         this.currentState++;
      }
      return this.history[this.currentState];
   }
   getMementoArr() {
      return this.history;
   }
}
