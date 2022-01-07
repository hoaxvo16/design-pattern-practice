import { Context } from './Context';
import { IState } from './IState';
export class AcceptState implements IState {
   handle(context: Context) {
      console.log(context.getName(), 'Accepted');
   }
}
