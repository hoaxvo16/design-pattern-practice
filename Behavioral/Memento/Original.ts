import { Memento } from './Memento';
export class Original {
   state: Memento = new Memento('');

   save(content: string) {
      this.state.setContent(content);
      return this.state;
   }

   restore(memento: Memento) {
      this.state = memento;
   }

   getContent() {
      return this.state.getContent();
   }
}
