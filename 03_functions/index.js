'use strict';

/**
 * Функції в деталях
 * @author Miroslav
 */

/**
 * Оголошення та виклик
 */

// let name = 'Oleg';
//
// function sayHi(name) {
//     // let text = ''
//     console.log(`Hi ${name}`);
// }
//
// sayHi();
// sayHi('Mike');

/**
 * Директива "return"
 */

// const names = ['Oleg', 'John'];
//
// const arr = names.map((name) => {
//     return name.toUpperCase();
// })
//
// console.log(arr);

// function add(num1, num2) {
//     return num1 + num2;
// }
// const num = add(2, 2);
//
// console.log(add(2, 2));

/**
 * У функції може бути багато "return"
 */

// function calc(num1, num2, operand) {
//     if (operand === '-') {
//         return num1 - num2;
//     }
//     if (operand === '+') {
//         return num1 + num2;
//     }
// }
//
// console.log(calc(10, 2, '+'));

/**
 * Function Declaration
 */

// console.log(add(2, 3));
//
// function add(num1, num2) {
//     return num1 + num2;
// }

// if (true) {
//     function add(num1, num2) {
//         return num1 + num2;
//     }
// }

/**
 * Function Expression
 */

// const add = function add(num1, num2) {
//     return num1 + num2;
// }
//
// console.log(add(2, 3));

/**
 * Arrow Functions
 */

// const add = (num1, num2) => num1 + num2;

// console.log(add(2, 5));

/**
 * IIFE
 */

// (() => {
//
// })();


// (function () {
//     console.log('Hi!');
// })();

// function test() {
//     console.log(arguments);
// }
//
// test('one', 'two');


/**
 * Рекурсія
 */

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
//
// console.log(pow(2, 3));

// ітеративне рішення pow
// function pow(x, n) {
//     let result = x;
//
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
