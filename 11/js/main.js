var elem = document.getElementById('elem');
// Task 1
function funcBind(surname, name) {

    console.log('task1---->>>>', this.value + ', ' + surname + ' ' + name);

}
var newFunc = funcBind.bind(elem)
newFunc('Иван', 'Иванов')
newFunc('Петр', 'Петров')

// Task 2

function funcCall() {
    console.log('task 2 ---->>>>', this.value);
}
funcCall.call(elem)