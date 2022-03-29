"use strict"
const str = "  Lorem ipsum dolor sit,\
            amet consectetur adipisicing elit.\
             Natus, praesentium!  ";//многострочный текст через //
console.log(str.trim());//удаляет впереди и в конце пробелы
console.log(`Доступ к 5 символу строки ${str[5]}`);
const sport = ['футбол','волейбол', 'спортивная гимнастика'];

//Методы массивов
console.log(Array.isArray(sport));
sport.forEach((item, index, array) => {
    console.log(`${item} имеет позицию ${index} в массиве`);
  });//вызывает функцию для каждого элемента массива

let olimpicSport = sport.map((item, index, array) => {
    return item + "-олимпийский вид спорта"
});
console.log(olimpicSport);//создает новый массив,выполняя функцию для каждого эл-та исходного массива
//ES6 стрелочная функция переменная = (аргументы) => {тело функции}

let result = sport.filter((item, index, array) => {
    return item.length > 6
});
console.log(result);//новый массив элементов, соответствующих условию

let type = sport.every ((item, index, array) => {
    return item.length > 3
    //return typeof(item) === String
});
console.log(type);//проверяет все значения по условию, если все соответствуют true

let volleyball = sport.indexOf('волейбол');
console.log(volleyball);//ищет значение,возвращает индекс

//JSON
let autoToJson = {
    manufacturer: 'Scoda',
    model: 'Yeti',
    year: 2014,
    color: 'white'
};
let json1 = JSON.stringify(autoToJson);
console.log(json1);
let json2 = `{"manufacturer":"Scoda","model":"Yeti","year":2014,"color":"white"}`;
let autoFromJson = JSON.parse(json2);
console.log(autoFromJson);

let auto = {
    manufacturer: 'Scoda',
    model: 'Yeti',
    year: 2014,
    color: 'white',
    get descriptionAuto(){
        return `${this.manufacturer} ${this.model} ${this.year} года производства цвет ${this.color}`;
},
}
console.log(auto);


let {manufacturer, model:m, ...rest} = auto;
console.log(m);// Деструктуризация объекта. разбивает объект со "св-во:значение" на "переменная=значение"
//rest оператор ...rest-собрал лишние параметры в массив rest
