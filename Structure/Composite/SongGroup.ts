import { SongComponent } from './SongComponent';

export class SongGroup extends SongComponent {
   private songComponents: SongComponent[] = [];
   private groupName: string;
   constructor(groupName: string) {
      super();
      this.groupName = groupName;
   }
   add(songComponent: SongComponent) {
      this.songComponents.push(songComponent);
   }
   remove(songComponent: SongComponent) {
      this.songComponents = this.songComponents.filter(
         component =>
            JSON.stringify(component) !== JSON.stringify(songComponent)
      );
   }
   getSongComponent() {
      return this;
   }

   displaySong() {
      this.songComponents.forEach(component => {
         console.log(component.getSongComponent());
      });
   }
}
