// 1

var firstArray = ['a', 'b', 'c'],
    secondArray = [1,2,3];
var concatArray = firstArray.concat(secondArray);
console.log('task 1 --->>>', concatArray);

// 2

var reverseArray = secondArray.reverse();
console.log('task 2 --->>>', reverseArray);

// 3

var thirdArray = [3, 4, 1, 2, 7];
var sortArray = thirdArray.sort();
console.log('task 3 --->>>', sortArray);

// 4

var fourthArray = [3, 4, 1, 2, 7];
var evenArray = fourthArray.filter(function (value){
    if(value % 2 === 0){
        return value;
    }
})
console.log('task 4 --->>>', evenArray);