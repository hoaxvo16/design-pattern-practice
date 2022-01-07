import { Context } from './Context';
import { IState } from './IState';
export class WaitingState implements IState {
   handle(context: Context) {
      console.log(context.getName(), 'waiting');
   }
}
