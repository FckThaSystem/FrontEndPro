const secret = {
    "!": [17],
    " ": [5,10],
    "e": [1,15],
    "o": [4,8],
    "h": [0],
    "l": [2,3,13,14,16],
    "f": [6],
    "r": [7],
    "m": [9],
    "H": [11],
    "i": [12],
}
var newArr = [];
for (let i in secret){
    for (var item = 0; item < secret[i].length; item++){
        newArr[secret[i][item]] = i;
    }
}
console.log(newArr.join(''));