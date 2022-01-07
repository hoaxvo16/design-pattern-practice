import { Context } from './Context';
import { IState } from './IState';
export class RejectState implements IState {
   handle(context: Context) {
      console.log(context.getName(), 'rejected');
   }
}
