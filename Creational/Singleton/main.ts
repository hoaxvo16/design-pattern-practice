import { OnlyOne } from './OnlyOne';
function main() {
   const one = OnlyOne.getInstance();
   console.log(one.getName());
}

main();
