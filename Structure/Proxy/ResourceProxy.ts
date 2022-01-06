import { IResource } from './ResourceInterface';
import { Resource } from './Resource';
import { NetWorkAccess } from './NetWorkAccess';
export class ResourceProxy implements IResource {
   private allowIP: string = '192.1.1.8';
   private resource = new Resource();

   getResource(netWork: NetWorkAccess) {
      if (netWork.getIp() === this.allowIP) {
         return this.resource.getResource();
      }
      console.log('This ip is not allow to access  this resource');
      return 'Empty';
   }
}
