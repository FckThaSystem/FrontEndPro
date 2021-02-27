//First task

var Obj = {
    'Коля': '1000',
    'Вася': '500',
    'Петя': '200'
}
var salaryHtml = `Коля получает - ${Obj['Коля']}, Петя получает - ${Obj['Петя']}`

//Second task

var colorArr = {

    'ru':['голубой', 'красный', 'зеленый'],

    'en':['blue', 'red', 'green'],

};
    var colorHtml = `Цвет : ${colorArr['ru'][0]}`

var getSetArr = {

    'ru':['голубой', 'красный', 'зеленый'],
    get colorShow() {
           return this['ru'].join(', ')
    },
    set colorAdd (value) {
        this['ru'].push(value)
        return this['ru'].join(', ');
    }
};
document.write(`*first task* - ${salaryHtml}<br/> *second task* - ${colorHtml}<br/>  *third task* Get без Set -  ${getSetArr.colorShow}<br/>`)
getSetArr.colorAdd = 'оранжевый';
document.write(`Get после Set -  ${getSetArr.colorShow}<br/>`)