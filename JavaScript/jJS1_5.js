// Задача. Дан массив с числами. Создайте из него новый массив, где останутся лежать только
// положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая
// параметром будет принимать число и возвращать true, если число положительное, и false -
// если отрицательное.

let array = [1, 2, 3, -1, -2, -3];
function isPositive(num) {
    if (num >= 0)
        return true
    else
        return false
}
function filterArray(arr) {
    let newArray = []
    for (let item of arr) {
        if (isPositive(item)) {
            newArray.push(item)
        }
    }
    return newArray
}
console.log(filterArray(array))

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и
// меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange, которая
// параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так -
// пусть функция возвращает true, если не так - false.

let array_2 = [1, 2, 3, -1, -2, -3, 11, 12, 10, 4];
function isNumberInRange(num){
    if (num > 0 && num < 10) 
        return true
    else
        return false
}
function numberRange(arr){
    let newArr = []
    for (let item of arr) {
        if (isNumberInRange(item))
            newArr.push(item)
    }
    return newArr
}
console.log(numberRange(array_2))

// 1. Напишите функцию, которая очищает массив от нежелательных
// значений, таких как false, undefined, пустые строки, ноль, null.
// 2. Напишите функцию, которая убирает повторяющиеся значения.

function removeUnwantedValues(arr){
    newArray = [];
    for (i of arr){
        if (Boolean(i)){
            newArray.push(i)
        }
    }
    return newArray;
}


function removeRepetitions(arr){
    newArray = [];
    for (let i of arr){
        if (!newArray.includes(i)){
            newArray.push(i);
        }
    }
    return newArray;
}

// 1. Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние
// возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый).
// Например. 33 - зрелый

// function child(item){
//     if (item >= 1 && item <= 17){
//         return true
//     } else {
//         return false
//     }
// }
// function young(item){
//     if (item >= 18 && item <= 30){
//         return true
//     } else {
//         return false
//     }
// }
// function mature(item){
//     if (item >= 30 && item <= 55){
//         return true
//     } else {
//         return false
//     }
// }
// function old(item){
//     if (item >= 55){
//         return true
//     } else {
//         return false
//     }
// }
// function person_name(){
//     arrAge = []
//     for (let i = 1; i <= 100; i++){
//         switch(true) {
//             case (child(i)):
//                 console.log(`${i} ребенок`)
//                 break
//             case (young(i)):
//                 console.log(`${i} молодой`)
//                 break
//             case (mature(i)):
//                 console.log(`${i} зрелый`)
//                 break
//             case (old(i)):
//                 console.log(`${i} старый`)
//                 break
//         }
//     }
// }

// person_name()

