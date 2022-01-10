export interface IMiddleware {
   setNext(middleware: IMiddleware);
   execute(body: any);
}
