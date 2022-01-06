import { FundingCheck } from './FundingCheck';
import { SecurityCodeCheck } from './SecurityCodeCheck';
import { AccountIDCheck } from './AccountIDCheck';
export class BankTransactionFacade {
   private accountID: string;
   private securityCode: string;
   private accountIDCheck: AccountIDCheck = new AccountIDCheck();
   private securityCodeCheck: SecurityCodeCheck = new SecurityCodeCheck();
   private fundingCheck: FundingCheck = new FundingCheck();
   constructor(accountID: string, securityCode: string) {
      this.accountID = accountID;
      this.securityCode = securityCode;
   }
   drawMoney(money: number) {
      const checkID = this.accountIDCheck.checkAccountID(this.accountID);
      const checkSecure = this.securityCodeCheck.checkSecurityCode(
         this.securityCode
      );

      if (checkID && checkSecure) {
         const checkFunding = this.fundingCheck.drawMoney(money);
         if (checkFunding) {
            console.log('Transaction success');
         } else {
            console.log('Transaction fail');
         }
      }
   }

   addMoney(money: number) {
      const checkID = this.accountIDCheck.checkAccountID(this.accountID);
      const checkSecure = this.securityCodeCheck.checkSecurityCode(
         this.securityCode
      );

      if (checkID && checkSecure) {
         const checkFunding = this.fundingCheck.addMoney(money);
         if (checkFunding) {
            console.log('Transaction success');
         } else {
            console.log('Transaction fail');
         }
      }
   }
}
