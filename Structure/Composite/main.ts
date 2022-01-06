import { Song } from './Song';
import { SongGroup } from './SongGroup';
function main() {
   const modernSong = new SongGroup('modern song');
   const pop = new SongGroup('pop music');
   modernSong.add(pop);
   const aSong = new Song('Dejavu', 'James Authur');
   pop.add(aSong);
   modernSong.displaySong();
}

main();
