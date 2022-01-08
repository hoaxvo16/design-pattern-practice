export interface Iterator {
   hasNext(): boolean;
   getNext(): string;
   reset(): void;
}
