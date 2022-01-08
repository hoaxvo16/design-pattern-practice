import { IEncryptAgo } from './IEncryptAgo';

export class Message {
   private content: string;
   private encryptAlgo: IEncryptAgo;

   constructor(content: string) {
      this.content = content;
   }

   setAlgo(algo: IEncryptAgo) {
      this.encryptAlgo = algo;
   }

   encrypt() {
      this.content = this.encryptAlgo.encrypt(this.content);
   }

   print() {
      console.log(this.content);
   }
}
