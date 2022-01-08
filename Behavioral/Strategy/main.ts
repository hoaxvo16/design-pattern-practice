import { AES } from './AES';
import { Message } from './Message';
import { SHA } from './SHA';

function main() {
   const message = new Message('hello');
   message.setAlgo(new SHA());
   message.encrypt();
   message.setAlgo(new AES());
   message.print();
   message.encrypt();
   message.print();
}

main();
