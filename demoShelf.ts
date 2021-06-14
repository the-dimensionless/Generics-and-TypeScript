export class Shelf<T> {

    _items: T[] = [];

    addItemToCollection(newItem: T) {
        // code to append in array
        this._items.push(newItem);
    }

    removeItemFromCollection(oldItem: T) {
        // code to remove from array
        let index: number = this._items.indexOf(oldItem);
        if (index >= 0) {
            this._items = this._items.splice(index, 1);
        }

    }

    logCollection() {
        this._items.forEach((item: T) => {
            console.log(item);
        });
    }
}