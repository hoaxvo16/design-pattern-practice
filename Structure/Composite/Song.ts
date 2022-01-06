import { SongComponent } from './SongComponent';
export class Song extends SongComponent {
   private name: string;
   private author: string;
   constructor(name: string, author: string) {
      super();
      this.author = author;
      this.name = name;
   }
   getSongComponent() {
      return this;
   }
}
