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


/*class Samurai{
    constructor(name){
        this.name = name
    }
    hello(){
        alert(this.name)
    }
}
console.log(Samurai.prototype);
console.log(Samurai.__proto__);
console.log(Samurai.__proto__ === Function.prototype);*/


/*Реализуйте класс Worker (Работник), который будет иметь следующие свойства: 
name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. 
И метод getFullName() - имя и фамиля работника.*/
class Worker{
    constructor(name, surname, rate, days){
        this.name = name,
        this.surname = surname,
        this.rate = rate,
        this.days = days
    }

    getSalary() {
        return this.rate * this.days
    }

    get getFullName(){
        console.log(`${this.name}  ${this.surname}`)
    }//Геттер, т.е. сво-во, поэтому вызывается как св-во без ()
};
let worker = new Worker ("Иван", "Иванов", 1500, 20);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName);
console.log(worker.getSalary());

/*Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. 
Появляется новые свойство: workers - количество работников. 
И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и 
на количество работников.*/

class Boss extends Worker {
    constructor(name, surname, rate, days, workers){
        super(name, surname, rate, days);
        this.workers = workers;
    }//

    get getFullName(){
        super.getFullName;
    }//

    getSalary() {
        return this.rate * this.days * this.workers
    }//
}

const boss = new Boss('Петр', 'Петров', 1000, 20, 20);
console.log(boss.name); 
console.log(boss.surname); 
console.log(boss.getFullName); 
console.log(boss.rate); 
console.log(boss.days); 
console.log(boss.workers); 
console.log(boss.getSalary()); 

function* numberGen(n = 10){
    for (let i = 0; i < n; i++){
        yield i
    }
};
const num = numberGen(4);
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());


