import { BankTransactionFacade } from './BankTransactionFacade';
function main() {
   const ABCBank: BankTransactionFacade = new BankTransactionFacade(
      'ABC1234',
      '1234'
   );

   ABCBank.drawMoney(10000);
   ABCBank.drawMoney(200000);
   ABCBank.addMoney(500);
}
main();
