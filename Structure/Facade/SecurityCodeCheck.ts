export class SecurityCodeCheck {
   private securityCode: string = '1234';
   checkSecurityCode(code: string) {
      if (code === this.securityCode) {
         return true;
      }
      console.log('Wrong security code');
      return false;
   }
}
