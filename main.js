"use strict";
exports.__esModule = true;
var demoShelf_1 = require("./demoShelf");
var bookShelf = new demoShelf_1.Shelf();
bookShelf.addItemToCollection("Harry Potter");
bookShelf.addItemToCollection("Fast n Furious");
bookShelf.addItemToCollection("Alice in Wonderland");
bookShelf.addItemToCollection("Bond 007");
bookShelf.logCollection();
// or conversely use in built array type
var favSingers = [];
favSingers.push("Ethan Hunt");
favSingers.push("Bruno");
favSingers.toString();
