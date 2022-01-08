import { WordList } from './WordList';
function main() {
   const wordList = new WordList();
   wordList.add('hello');
   wordList.add('world');
   wordList.add('iam');
   wordList.add('hoa');
   const iterator = wordList.getIterator();
   while (iterator.hasNext()) {
      console.log(iterator.getNext());
   }
}
main();
