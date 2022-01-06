export class AccountIDCheck {
   private accountID: string = 'ABC1234';
   checkAccountID(id: string) {
      if (id === this.accountID) {
         return true;
      }
      console.log('Wrong account id');
      return false;
   }
}
