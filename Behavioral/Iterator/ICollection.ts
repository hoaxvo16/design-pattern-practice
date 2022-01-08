import { Iterator } from './Iterator';
export interface ICollection {
   getIterator: () => Iterator;
}
