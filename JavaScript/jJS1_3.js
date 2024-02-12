// Вариант 2

// Задание 1
let d = true;

if (d){
    console.log(d)
} else if (~d) {
    console.log(~d)
} else {
    console.log("underfind")
}

switch (d) {
    case d:
        console.log(d)
        break
    case (~d):
        console.log(~d)
        break
    default:
        console.log("underfind")
        break
}

(d) ? console.log(d) : (~d) ? console.log(~d) : console.log("underfind")




// Задание 2
let array = [5, -3, 'Apple', 10]

for (let i in array) {
    console.log(`number ${array[i]}!`)
}

for (let i of array){
    console.log(`number ${ i}!`)
}


// Задание 3
let login = '';
(login == 'Сотрудник') ? console.log('Привет') : (login == 'Директор') ? console.log('Здравствуйте') : (login == '') ? console.log('Нет логина') : console.log('');

// Задание 4
let X = 4; // точка
let arr = [3,4,5,6,7] // диапозон [3;7] включительно

for (let num of arr){
    if (X === num) {
        console.log(`Число ${X} принадлежит отрезку ${arr}`);
        break;
    }
}


// Задание 5
let arrMount = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let num = 12;
switch (num) {
    case 1:
        console.log(`Месяц ${arrMount[num-1]} : 31 день`);
        break;
    case 2:
        console.log(`Месяц ${arrMount[num-1]} : 28-29 дней`);
        break;
    case 3:
        console.log(`Месяц ${arrMount[num-1]} : 31 день`);
        break;
    case 4:
        console.log(`Месяц ${arrMount[num-1]} : 30 дней`);
        break;
    case 5:
        console.log(`Месяц ${arrMount[num-1]} : 31 день`);
        break;
    case 6:
        console.log(`Месяц ${arrMount[num-1]} : 30 дней`);
        break;
    case 7:
        console.log(`Месяц ${arrMount[num-1]} : 31 день`);
        break;
    case 8:
        console.log(`Месяц ${arrMount[num-1]} : 31 день`);
        break;
    case 9:
        console.log(`Месяц ${arrMount[num-1]} : 30 дней`);
        break;
    case 10:
        console.log(`Месяц ${arrMount[num-1]} : 31 день`);
        break;
    case 11:
        console.log(`Месяц ${arrMount[num-1]} : 30 дней`);
        break;
    case 12:
        console.log(`Месяц ${arrMount[num-1]} : 31 день`);
        break;
}
