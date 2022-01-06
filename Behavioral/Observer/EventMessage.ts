export class EventMessage {
   user: string;
   row: string;
   col: string;
   data: string = '';
   constructor(user: string, row: string, col: string, data?: string) {
      this.user = user;
      this.row = row;
      this.col = col;
      if (data) {
         this.data = data;
      }
   }
}
