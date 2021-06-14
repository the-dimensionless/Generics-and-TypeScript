import { Shelf } from "./demoShelf";

let bookShelf: Shelf<string> = new Shelf<string>();

bookShelf.addItemToCollection("Harry Potter");
bookShelf.addItemToCollection("Fast n Furious");
bookShelf.addItemToCollection("Alice in Wonderland");
bookShelf.addItemToCollection("Bond 007");

bookShelf.logCollection();

// or conversely use in built array type

let favSingers: Array<String> = [];
favSingers.push("Ethan Hunt");
favSingers.push("Bruno");

favSingers.toString();