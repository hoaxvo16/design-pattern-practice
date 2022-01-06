import { EventMessage } from './EventMessage';
export interface DBEventListener {
   update(data: EventMessage): void;
}
