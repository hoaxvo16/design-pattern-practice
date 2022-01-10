import { IMiddleware } from './IMiddleware';

export class FilterIP implements IMiddleware {
   private next: IMiddleware;
   setNext(middleware: IMiddleware) {
      this.next = middleware;
   }
   execute(body: any) {
      if (body.ip === '192.168.1.1' && this.next) {
         this.next.execute(body);
      } else {
         console.log('IP is blocked');
      }
   }
}
