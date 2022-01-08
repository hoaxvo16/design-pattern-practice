import { IEncryptAgo } from './IEncryptAgo';
export class SHA implements IEncryptAgo {
   encrypt(content: string): string {
      return content + 'SHA Encrypt';
   }
}
