// // ПРога яка отримує задовільне чилсо і сумує суму кожної цифри в числі

// function sumOfNum(num){
//     let a = num.toString().split("");
//     let sum = a.reduce((previos, current) => {
//         return (Number(previos) + Number(current))
//     });
//     console.log(sum);
// }

// sumOfNum(754);

'use strict';

const AsyncFunction = (async () => {}).constructor;
console.log(AsyncFunction);

const asyncFunctionPrototype = Object.getPrototypeOf(async () => {});
console.log(asyncFunctionPrototype);

console.log(AsyncFunction.prototype === asyncFunctionPrototype);