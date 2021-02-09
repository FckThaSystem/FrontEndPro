// 1

var firstArray = ['a', 'b', 'c'];
firstArray.push(1, 2, 3);
console.log('task 1 -->>', firstArray);

//2

var secondArray = [1,2,3];
secondArray.unshift(4,5,6)
console.log('task 2 -->>', secondArray);

//3

var thirdArray = ['js', 'css', 'jq'];
console.log('task 3 -->>', thirdArray[0]);

//4

console.log('task 4 -->>', thirdArray[thirdArray.length - 1]);

//5

var lastArray = [1,2,3,4,5];
var newArray = lastArray.slice(0, 3);
console.log('task 5 -->>', newArray);