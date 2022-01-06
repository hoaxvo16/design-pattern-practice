export class NetWorkAccess {
   private ip: string;
   constructor(ip: string) {
      this.ip = ip;
   }

   getIp() {
      return this.ip;
   }
}
