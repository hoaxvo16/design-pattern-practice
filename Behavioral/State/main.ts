import { AcceptState } from './AcceptState';
import { ContextB } from './ContextB';
import { RejectState } from './RejectState';
import { ContextA } from './ContextA';
import { WaitingState } from './WattingState';

function main() {
   const contextA = new ContextA(new WaitingState());
   const contextB = new ContextB(new WaitingState());
   contextA.handle();
   const rejectState = new RejectState();
   contextA.changeState(rejectState);
   contextB.changeState(rejectState);
   contextA.handle();
   contextB.handle();
   contextB.changeState(new AcceptState());
   contextB.handle();
}
main();
