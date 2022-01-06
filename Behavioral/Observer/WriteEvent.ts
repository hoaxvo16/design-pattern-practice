import { DBEventListener } from './DBEventListener';
import { EventMessage } from './EventMessage';
export class WriteEvent implements DBEventListener {
   update(data: EventMessage): void {
      console.log(data.user, 'write on', data.row, data.col, data.data);
   }
}
