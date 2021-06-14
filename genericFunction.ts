function checkOut<T> (item: T): T {
    let availableItem: T = item;

    if (availableItem) {
        console.log('Item available : ', availableItem);
    }

    return item;
}

const log = <T>(value: T) => {
    console.log(value);
}

checkOut<string>("PaintBrush");

const multiParamSample = <T, V>(item: T, customer: V) => {
    console.log('----multi params are ---', item, customer);
}

multiParamSample<string, number>("userId", 5432213);

// generic function to shorten array

const shortenArray = <T>(data: Array<T>, deleteCount: number): Array<T> => {
    return data.splice(deleteCount, data.length);
}

let dummyArray: string[] = ['Visual Basic', 'Java', 'JavaScript', 'TypeScript', 'Python', 'C'];
console.log('After Shortening : ', shortenArray<string>(dummyArray, 3));