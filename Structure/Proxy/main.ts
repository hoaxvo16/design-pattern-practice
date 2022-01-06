import { NetWorkAccess } from './NetWorkAccess';
import { ResourceProxy } from './ResourceProxy';
function main() {
   const netWork1 = new NetWorkAccess('192.1.1.8');
   const netWork2 = new NetWorkAccess('192.1.1.6');
   const proxy = new ResourceProxy();
   const res1 = proxy.getResource(netWork1);
   console.log(res1);
   const res2 = proxy.getResource(netWork2);
   console.log(res2);
}
main();
