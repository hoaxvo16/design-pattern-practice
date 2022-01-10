import { AccessDB } from './AccessDB';
import { FilterIP } from './FilterIP';
import { Authentication } from './Authentication';
function main() {
   const request1 = {
      ip: '192.168.1.1',
      name: 'admin',
      password: '1234',
      role: 'SuperAdmin',
   };

   const request2 = {
      ip: '192.168.1.2',
      name: 'admin',
      password: '1235',
      role: 'SuperAdmin',
   };

   const request3 = {
      ip: '192.168.1.1',
      name: 'admin',
      password: '1234',
      role: 'User',
   };
   const request4 = {
      ip: '192.168.1.1',
      name: 'admin',
      password: '1235',
      role: 'User',
   };
   const authen = new Authentication();
   const ip = new FilterIP();
   const dbAccess = new AccessDB();
   authen.setNext(dbAccess);
   ip.setNext(authen);
   ip.execute(request1);
   ip.execute(request2);
   ip.execute(request3);
   ip.execute(request4);
}

main();
