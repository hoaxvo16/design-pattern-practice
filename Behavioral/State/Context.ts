import { IState } from './IState';
export abstract class Context {
   protected name: string = '';
   protected state: IState;
   constructor(state: IState) {
      this.state = state;
   }

   handle() {
      this.state.handle(this);
   }

   changeState(state: IState) {
      this.state = state;
   }

   getName() {
      return this.name;
   }
}
