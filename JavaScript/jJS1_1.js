// let p_1_x = 1;
// let p_1_y = 4;
// let p_2_x = 5;
// let p_2_y = 1;

// let res = (((p_1_x - p_2_x) ** 2) + ((p_1_y - p_2_y) ** 2)) ** 0.5;
// console.log(res);


// let num = 324;

// let n1 = Math.floor(num / 100);
// let n2 = Math.floor((num % 100) / 10);
// let n3 = num % 100 % 10;
// console.log(n1 + n2 + n3);
// console.log(n1 * n2 * n3);


// let num = 31;

// let n1 = Math.floor(num / 10);
// let n2 = num % 10;

// num = n2 * 10 + n1;
// console.log(num);


// let n1 = 3.22;
// let n2 = 4.234;

// let res = ((n1 + n2) / 2);
// // res = res.toFixed(4);
// let r1 = Math.floor(res);
// res = res - r1
// console.log(res);


let n1 = 3;
let n2 = 5;
let n3 = 10;

let r1 = ((Math.abs(n1 ** 3) + Math.abs(n2 ** 3) + Math.abs(n3 ** 3)) / 3);
let r2 = (((n1 ** 2) * (n2 ** 2) * (n3 ** 2)) ** (1/3)); 

console.log(r1);
console.log(r2);