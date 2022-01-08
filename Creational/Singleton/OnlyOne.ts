export class OnlyOne {
   private static instance: OnlyOne;
   private name: string = 'Iam not change';

   private constructor() {}

   public static getInstance() {
      if (this.instance) {
         return this.instance;
      } else {
         return new OnlyOne();
      }
   }
   public getName() {
      return this.name;
   }
}
