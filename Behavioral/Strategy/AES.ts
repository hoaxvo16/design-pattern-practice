import { IEncryptAgo } from './IEncryptAgo';
export class AES implements IEncryptAgo {
   encrypt(content: string): string {
      return content + 'AES Encrypt';
   }
}
