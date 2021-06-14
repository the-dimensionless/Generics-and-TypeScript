function checkOut(item) {
    var availableItem = item;
    if (availableItem) {
        console.log('Item available : ', availableItem);
    }
    return item;
}
var log = function (value) {
    console.log(value);
};
checkOut("PaintBrush");
var multiParamSample = function (item, customer) {
    console.log('----multi params are ---', item, customer);
};
multiParamSample("userId", 5432213);
// generic function to shorten array
var shortenArray = function (data, deleteCount) {
    return data.splice(deleteCount, data.length);
};
var dummyArray = ['Visual Basic', 'Java', 'JavaScript', 'TypeScript', 'Python', 'C'];
console.log('After Shortening : ', shortenArray(dummyArray, 3));
