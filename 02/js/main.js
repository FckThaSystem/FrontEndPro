//2.1

var userAge = +prompt('Сколько лет?'),
    userSmoke = confirm('Куришь?');
console.log(userAge, userSmoke);
if(userAge >= 18 && userSmoke === false){
    alert('Молодец, и не надо');
}else if(userAge >= 18 && userSmoke === true){
    alert('Ну и зря');
}else if(userAge < 18 && userSmoke === false){
    alert('Так держать');
}else if(userAge < 18 && userSmoke === true){
    alert('Маме раскажу');
}

// 2.2

// var firstValue = +prompt('Первое число'),
//     secondValue = +prompt('Второе число');
//
// if(firstValue > secondValue){
//     alert(firstValue + ' больше чем ' + secondValue);
// } else if(firstValue < secondValue){
//     alert(secondValue + ' больше чем ' + firstValue);
// } else if(firstValue == secondValue){
//     alert(secondValue + ' равно ' + firstValue);
// }else{
//     alert('Что-то не так, не получается сравнить числа');
// }

//2.3

// var kilometersValue = prompt('Расстрояние в километрах'),
//     feetValue = prompt('Расстрояние в футах'),
//     feetValueNew = feetValue * 0.305;
// if(kilometersValue > feetValueNew){
//     alert(kilometersValue + ' километров' + ' больше чем ' + feetValue + ' футов');
// }else if(kilometersValue < feetValueNew){
//     alert(kilometersValue + ' километров' + ' меньше чем ' + feetValue + ' футов');
// }else if(kilometersValue < feetValueNew) {
//     alert(kilometersValue + ' километров' + ' равно ' + feetValue + ' футов');
// }else{
//     alert('Ой, что-то пошло не так');
// }

