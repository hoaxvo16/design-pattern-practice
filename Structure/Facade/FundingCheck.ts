export class FundingCheck {
   private funding: number = 2000000;
   private maxFunding: number = 2000000;
   drawMoney(money: number): boolean {
      if (this.funding > money) {
         this.funding -= money;
         console.log(`Draw success current funding is ${this.funding}$`);
         return true;
      }
      console.log(
         `Cant draw money current funding is:: ${this.funding}$ less than money you need`
      );
      return false;
   }

   addMoney(money: number) {
      if (this.funding + money < this.maxFunding) {
         this.funding += money;
         console.log(`Add success current funding is ${this.funding}$`);
         return true;
      }
      console.log(
         `Cant add money current funding is: ${this.funding}$ bigger than max funding you can have: ${this.maxFunding}$`
      );
      return false;
   }
}
