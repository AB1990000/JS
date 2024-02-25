//Создание объекта
// let obj = {};
// console.log(obj);

// let obj2 = {
//   name: "Ivan",
//   age: 19,
// };
// console.log(obj2);
// console.log(obj2.age);

// let name = "Елена";
// let surname = "Avdeeva";
// let me = {
//   name: name,
//   surname,
//   age: 40,
//   birthDate: { year: 1981, month: 11, day: 11 },
//   "kovid test": null,
//   array: [1, 3, 2],
// };

// console.log(me.birthDate.day)

// // изменяем существующее свойство объекта
// me.age = 34;
// me.obr = "высшее";
// console.log(me);
// // обратиться к свойству объекта
// console.log(me.birthDate.year)

// // Для свойств, имена которых состоят из нескольких слов, доступ к значению «через точку» не работает:
// me["kovid test"] = false
// console.log(me['kovid test'])

// удаление свойства объекта
// delete me["kovid test"];
// delete me.age;
// console.log(me);

// // Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения.
// // Квадратные скобки позволяют взять ключ из переменной. Например, имя свойства может храниться в переменной
// // Мы отправляем в функцию название свойства, которое необходимо вывести

// let man = {
//   name: "Ivan",
//   surname: "Ivanov",
//   age: 39,
//   birthDate: { year: 1989, month: 10, day: 21 },
//   "kovid test": false,
// };

// function test1(ob, name_ob) {
//   console.log(ob);
//   console.log(name_ob);

//   console.log(ob[name_ob]);
// }
// test1(man, "kovid test");
// test1(man, 'age');

//Проверка существования свойства в объекте, оператор «in» ("key" in obj)
// console.log("age" in man); //true
// console.log("ageeeee" in man); //false

//Задание 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;


// //Задание 2
// // Вывести зарплату Коли
// let obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };
// console.log(obj.Коля)

// //Задание 2.1
// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст и возвращает массив, где каждый элемент представляет из себя строку "Иван 23 года".

// let employee = [
//     {
//         name: "Иван",
//         age: 23,
//     },
//     {
//         name: "Anna",
//         age:28,
//     },
//     {
//         name: "Bob",
//         age: 25
//     }

// ]

// function infoEmployee(array) {
//     new_arr = []

//     for (let i in array){
//         new_arr.push(`${array[i].name} ${array[i].age} года.`)
//     }

//     return new_arr
// }

// console.log(infoEmployee(employee))

// //Задание 3
// Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.
// Удалите из массива объектов, задание 3, объект с name == "Anna".

// let user = [{
//             name: "John",
//             age: 30
//         },
//         {
//             name: "Bob",
//             age: 21
//         },
//         {
//             name: "Anna",
//             age: 19
//         }
//       ]
// let n;
// for (let item in user){
//     if (user[item].name == "Bob") {
//         n = user[item].name
//         break
//     }
    
// }
// console.log(n)
// for (let item in user){
//     if (user[item].name == "Anna") {
//         delete user[item].name
//         break
//     }
    
// }
// console.log(user)

//Методы
// Функцию, которая является свойством объекта, называют методом этого объекта
// let main = {
//   name: "Petrov",
//   surname: "Ivan",
//   hi: function () {
//     console.log("Привет всем");
//   },
// };

// main.name;
// main.hi();


// Ключевое слово «this» в методах
// Свойства функции могут делать всё тоже самое что и обычные функции, но плюс к тому они имеют доступ ко всему объекту, в котором они определены
// Для доступа к информации внутри объекта метод может использовать ключевое слово this

// let main = {
//   name: "Petrov",
//   surname: "Ivan",
//   hi: function () {
//     console.log("Привет,", main.name, this.surname);
//   },
// };
// main.hi();
// console.log(main.name);
// console.log(main);
// console.log(main.hi());

//  Сокращённая запись метода
// let main = {
//     name: 'Petrov',
//     surname: 'Ivan',
//     hi() {
//         console.log('Привет,', main.name, this.surname)
//     }
// }
// main.hi()

// Задача 4
// Создать объект, свойствами которого будут 2 переменные и функция, которая выводит в консоль имя и фамилию из переменных
// Добавить свойство, значением которого будет функция, которая выводит сообщение в консоль 'My name ... '
// удалить первую функцию
// let name = "a"
// let surname = "b"
// let obj = {
//     name,
//     surname,
//     info: function() {console.log(`My name ${this.name}, my surname ${this.surname}`)}
// }
// obj.info()

//Задача 5
//Создать функцию, входными параметрами которой будут 2 числа.
// Создайте объект calculator (калькулятор) с двумя свойствами, значениями которых будут входные параметры функции и с двумя методами:
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// function calculator(num1, num2) {
//     let calt = {
//         num1,
//         num2,
//         sum: function() {
//             console.log(this.num1 + this.num2)
//         },
//         mul: function() {
//             console.log(this.num1 * this.num2)
//         }
//     }
// }

// Для перебора всех свойств объекта используется цикл for..in.

// for (let key in object) {
//     //     key - свойство объекта
//     //     object[key] - значение свойства объекта
//     // тело цикла выполняется для каждого свойства объекта
// }

//Например
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// for (let prop in salaries) {
//   // console.log(prop);
//   console.log(salaries[prop]);
// }

//Задание 6
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// function sum(obj) {
//     let sum = 0;
//     for (let i in obj) {
//         sum += obj[i]
//     }
//     return sum
// }  
// console.log(sum(salaries))

// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Другие способы перебора объектов
// сначала преобразовать объект в массив. Затем вы перебираете массив.
// Преобразовать объект в массив тремя способами:
// Object.keys - создает массив, содержащий свойства объекта
// Object.values - создает массив, содержащий значения каждого свойства объекта
// Object.entries - создает массив массивов. Каждый внутренний массив имеет два элемента. Первый элемент — это свойство; второй элемент - это значение свойства.

// const fruits = {
//   apple: 28,
//   orange: 17,
//   pear: 54,
// };

// let keys = Object.keys(fruits);
// let values = Object.values(fruits);
// let entries = Object.entries(fruits);
// console.log(keys);
// console.log(values);
// console.log(entries);

//Задание 7
// У нас есть следующий объект:
// let user = {
//     name: "John",
//     age: 30
// };
// Проверьте программно, что этот объект не пустой и что в нем есть ключ age.
// console.log("age" in user)

// typeof и система типов

//простые
// console.log(typeof 10) // "number"
// console.log(typeof "10") // "string"
// console.log(typeof true) // "boolean"
// console.log(typeof Symbol("id")) // "symbol"
//     // console.log(typeof 1 n) // "bigint"

// // составные
// console.log(typeof Math) // "object"  (1)
// console.log(typeof {}) // "object"
// console.log(typeof []) // "object"
// console.log(typeof
//         function() {}) // "function"

// // нулевые
// console.log(typeof null) // "object"  (2)
// console.log(typeof undefined) // "undefined"

// Задание 9
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//     for(let i in obj) {
//         if (typeof obj[i] == "number") {
//             obj[i] = obj[i] * 2
//         }
//     }
//     return obj
// }
// menu = multiplyNumeric(menu)
// console.log(menu)