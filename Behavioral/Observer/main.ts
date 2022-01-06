import { DBEventListener } from './DBEventListener';
import { WriteEvent } from './WriteEvent';
import { ReadEvent } from './ReadEvent';
import { DBEventManager } from './DBEventManager';
import { EventMessage } from './EventMessage';

function main() {
   const eventManager: DBEventManager = new DBEventManager();

   const readEvent: DBEventListener = new ReadEvent();

   const writeEvent: DBEventListener = new WriteEvent();

   eventManager.subscribe('read', readEvent);
   eventManager.subscribe('write', writeEvent);

   eventManager.notify('read', new EventMessage('John', 'ID=5', 'Address'));
   eventManager.notify(
      'write',
      new EventMessage('John', 'ID=5', 'Address', 'Texas')
   );
}

main();
