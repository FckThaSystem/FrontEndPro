function showConsole(text, result) {
    console.log(text, result)
}

// 1

var newString = 'aaa bbb ccc';

showConsole('task 1', "_______________");
showConsole('substr:', newString.substr(4, 3));
showConsole('substring:', newString.substring(4, 7));
showConsole('slice:', newString.slice(4, 7));

// 2

var secondStr = 'я учу javascript!';
var sliceStr = secondStr.substring(0, 1);
var upperStr = sliceStr.toUpperCase();

showConsole('task 2', "_______________");
showConsole('upperCase:', secondStr.replace(sliceStr, upperStr));

// 3

var thirdStr = 'var_test_text';
var newThirdArr = [];
var thirdStrArray = thirdStr.split('_');
for (var str in thirdStrArray){
    if(str > 0){
        var subStr = thirdStrArray[str].substring(0, 1);
        var upperString = subStr.toUpperCase();
        newThirdArr.push(thirdStrArray[str].replace(subStr, upperString))
    }else{
        newThirdArr.push(thirdStrArray[str])
    }
}
showConsole('task 3', '_______________');
showConsole('newString:', newThirdArr.join(''))


// 4
showConsole('task 4', '_______________');
showConsole('random number:', Math.random() * 50)
