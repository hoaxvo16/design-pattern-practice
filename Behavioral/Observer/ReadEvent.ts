import { DBEventListener } from './DBEventListener';
import { EventMessage } from './EventMessage';
export class ReadEvent implements DBEventListener {
   update(data: EventMessage): void {
      console.log(data.user, 'read on', data.row, data.col);
   }
}
