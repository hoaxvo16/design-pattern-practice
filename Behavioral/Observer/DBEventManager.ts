import { DBEventListener } from './DBEventListener';
import { EventMessage } from './EventMessage';
export class DBEventManager {
   private eventListeners: Map<string, DBEventListener> = new Map();

   subscribe(eventType: string, event: DBEventListener) {
      this.eventListeners.set(eventType, event);
   }

   unsubscribe(eventType: string) {
      this.eventListeners.delete(eventType);
   }
   notify(eventType: string, data: EventMessage) {
      this.eventListeners.get(eventType).update(data);
   }
}
