// 1. Reverse a String

const reverseString = str => str.split('').reverse().join('');



let a = {x: 1};
let b = a;
b.x = 2;
a = {x: 3};
console.log(a.x, b.x); // 3, 2

console.log("1234".split('')); // [ '1', '2', '3', '4' ]