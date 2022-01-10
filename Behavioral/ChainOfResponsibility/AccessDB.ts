import { IMiddleware } from './IMiddleware';
export class AccessDB implements IMiddleware {
   private next: IMiddleware;
   setNext(middleware: IMiddleware) {
      this.next = middleware;
   }
   execute(body: any) {
      if (body.role === 'SuperAdmin') {
         console.log('DB accessed');
         if (this.next) {
            this.next.execute(body);
         }
      } else {
         console.log("User can't access DB");
      }
   }
}
