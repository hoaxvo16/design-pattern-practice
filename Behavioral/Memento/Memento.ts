export class Memento {
   private content: string;

   constructor(content: string) {
      this.content = content;
   }
   getContent() {
      return this.content;
   }
   setContent(content: string) {
      this.content = content;
   }
}
