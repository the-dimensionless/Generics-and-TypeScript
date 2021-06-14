"use strict";
exports.__esModule = true;
exports.Shelf = void 0;
var Shelf = /** @class */ (function () {
    function Shelf() {
        this._items = [];
    }
    Shelf.prototype.addItemToCollection = function (newItem) {
        // code to append in array
        this._items.push(newItem);
    };
    Shelf.prototype.removeItemFromCollection = function (oldItem) {
        // code to remove from array
        var index = this._items.indexOf(oldItem);
        if (index >= 0) {
            this._items = this._items.splice(index, 1);
        }
    };
    Shelf.prototype.logCollection = function () {
        this._items.forEach(function (item) {
            console.log(item);
        });
    };
    return Shelf;
}());
exports.Shelf = Shelf;
