// 1

var numbersArray = [4, -5, 16, -3, 0, -20, 25, 9, 36];

var filterArray = numbersArray.filter(function (value) {
    if (typeof value === "number" && value >= 0){
        return value;
    }
});
var newArray = filterArray.map(function (item) {
        return Math.sqrt(item)
})
console.log('task 1 --->>>', 'До извлечения корня:', filterArray, 'После: ', newArray);

// 2

var taskTwoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var quantity = [];
var result = taskTwoArray.reduce(function (calc, item) {
    var newItem = calc + item;
    if(newItem > 10){
        quantity.push(taskTwoArray.indexOf(item) + 1);
    }
    return newItem;
}, 0);
console.log('task 2 --->>>', 'Количество :',quantity[0]);