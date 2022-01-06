import { NetWorkAccess } from './NetWorkAccess';
export interface IResource {
   getResource: (netWork?: NetWorkAccess) => string;
}
