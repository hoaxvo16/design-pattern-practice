import { Context } from './Context';

export interface IState {
   handle: (context: Context) => void;
}
