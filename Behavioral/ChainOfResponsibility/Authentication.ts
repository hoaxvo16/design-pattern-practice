import { IMiddleware } from './IMiddleware';
export class Authentication implements IMiddleware {
   private next: IMiddleware;
   setNext(middleware: IMiddleware) {
      this.next = middleware;
   }
   execute(body: any) {
      if (body.password === '1234' && body.name === 'admin' && this.next) {
         this.next.execute(body);
      } else {
         console.log('Fail to authen');
      }
   }
}
