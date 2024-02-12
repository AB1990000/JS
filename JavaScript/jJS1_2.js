// Задание 1
// Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n
// и m могут быть отрицательными, а также может быть n &gt; m или n &lt; m. Выведите результат с
// помощью console.log.


// Первый цикл
// let arr = []

// let count = 100
// let n = 10
// let m = 100
// for (let i = 0; i < count; i++){
//     let arg = Math.round((Math.random() * (Math.max(m, n) - Math.min(m, n))) + Math.min(m, n)) 
//     arr.push(arg)
// }

// console.log(arr)



// Второй цикл
// let arr = []

// let count = 100
// let n = 10
// let m = 100
// let i = 0
// while (i < count){
//     let arg = Math.round((Math.random() * (Math.max(m, n) - Math.min(m, n))) + Math.min(m, n))
//     arr.push(arg)
//     i++
// }

// console.log(arr)



// Задание 2
// С помощью цикла создать перевёрнутый вариант произвольной строки. Например, строка
// «Привет, мир!» должна превратиться в «!рим ,тевирП».

// let variable = "Привет, мир!"
// let variable_res = ""  

// for (let i = variable.length-1; i >= 0; i--){
//     variable_res += variable[i]
// }
// console.log(variable_res)



// Задание 3
// Танк едет по дороге, на которой могут быть противотанковые мины. Дорога должна быть
// представлена в виде массива roadMines из 10 boolean-элементов. Если элемент равен true, то
// это мина. Движение танка должно быть представлено как цикл, в котором одна итерация —
// продвижение танка на следующий участок дороги (следующий элемент массива). При
// передвижении выводить в консоль сообщение «танк переместился на ${position}», где
// position — номер ячейки + 1. Если танк попал на мину, то нужно вывести сообщение «танк
// повреждён», если это 1-й взрыв, и «танк уничтожен», если это 2-й взрыв. После 2-го взрыва
// танк считается уничтоженным и прекращает движение.


// let roadMines = [true, false, false, false, false, false, false, false, false, true];
// let tank_health = 2;
// let roadTank = []

// console.log("Начало пути")
// for (let i = 0; i < roadMines.length; i++){
//     if (tank_health == 0){
//         break
//     }
//     console.log(`Танк переместился на позицию ${i+1}`)
//     if (roadMines[i] == true) {
//         tank_health -= 1
//         if (tank_health == 1){
            
//             console.log("Танк повреждён")
//         } else {
//             console.log("Танк уничтожен")
//         }
//     } else {
//         roadTank.push(i+1)
//     }
// }
// console.log(roadTank)


// Задание 4
// Сгенерировать массив чисел 1–31 включительно (числа месяца). Вывести с помощью
// console.log для каждого из чисел строку ${число} января, ${день недели}. День недели 1
// января должен задаваться с помощью переменной, то есть программа должна корректно
// работать для любого дня недели, с которого начинается месяц.


const week_day = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
let start_day = "Среда" // Можно поменять
for (let i = 0; i < week_day.length; i++){
    if (start_day == week_day[i]) {
        start_day = i
    }
}

let day_of_the_month = []
for (let i = 1; i < 32; i++) day_of_the_month.push(i)



for (let i = 0; i < day_of_the_month.length; i++){
    if (start_day >6) start_day = 0;
    console.log(`${day_of_the_month[i]} января, ${week_day[start_day]}`)
    start_day++
}
