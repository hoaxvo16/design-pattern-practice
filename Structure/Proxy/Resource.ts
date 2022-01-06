import { IResource } from './ResourceInterface';
export class Resource implements IResource {
   private resource: string = 'A resource ';
   getResource() {
      return this.resource;
   }
}
