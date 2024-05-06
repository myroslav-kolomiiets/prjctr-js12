'use strict';

/**
 * Цикли, умовні конструкції, примітивні типи даних в деталях
 * @author Miroslav
 */

/**
 * Оператор взяття залишку від ділення "%"
 */

// console.log(3 % 1);  // 0
// console.log(5 % 2);  // 1
// console.log(6 % 3);  // 0
// console.log(10 % 5); // 0

/**
 * Оператор "||" та присвоєння
 */

// let data = true;
// let isFetching = undefined;
//
// const isLoaded = data || isFetching;
//
// console.log(isLoaded);

/**
 * Оператор "&&" та присвоєння
 */

// let data = null;
// let isFetching = undefined;
//
// const isLoaded = data && isFetching;
//
// console.log(isLoaded);

/**
 * Нульовий оператор злиття: "??"
 */

// console.log(null ?? true);
// console.log(undefined ?? true);
// console.log('' ?? true);
// console.log(0 ?? true);

/**
 * Цикли
 */

/**
 * цикл while
 */

// let count = 0;
//
// while (count <= 10) {
//     count++;
//     console.log(count);
// }

/**
 * цикл do...while
 */

// let count = 0;
//
// do {
//     count++;
//     console.log(count);
// } while (count <= 10);

/**
 * цикл for
 */

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

/**
 * оператор break
 */

// let count = 0;
//
// someLoop: while (count < 6) {
//     if (count === 3) {
//         break someLoop;
//     }
//     count++;
// }
//
// console.log(count);

/**
 * директива continue
 */

// let count = 0;
//
// while (count < 6) {
//     count++;
//     if (count === 3) {
//         continue;
//     }
//     console.log(count);
// }

/**
 * Умовні конструкції
 */

/**
 * if
 */

// let isLoading = false;
//
// if (isLoading) {
//     console.log('Is loading');
// } else {
//     console.log('Is not loading');
// }

// let isLoading = true;
// let isFetching = true;
//
// if (isLoading && isFetching) {
//     console.log('isLoading === true AND isFetching === true');
// }
//
// if (isLoading || isFetching) {
//     console.log('isLoading === true OR isFetching === true');
// }

/**
 * тернарний оператор "?"
 */

// let isLoading = false;

// const loadingStatusMessage = isLoading ? 'Content is loading' : 'Content doesnt loading.';
// let loadingStatusMessage;
//
// if (isLoading) {
//     loadingStatusMessage = 'Content is loading';
// } else {
//     loadingStatusMessage = 'Content doesnt loading.';
// }

// console.log(loadingStatusMessage);

/**
 * switch
 */

// const statusCode = '3000';
//
// // if (statusCode === '100') {
// //     console.log('Status code - 100.');
// // } else if (statusCode === '200') {
// //     console.log('Status code - 200.');
// // }
//
// switch (statusCode) {
//     case '100':
//         console.log('Status code - 100.');
//         break;
//     case '200':
//         console.log('Status code - 200.');
//         break;
//     case '300':
//         console.log('Status code - 300.');
//         break;
//     case '400':
//         console.log('Status code - 400.');
//         break;
//     default:
//         console.log(`Status code ${statusCode} is unknown.`);
//         // console.log("Status code " + statusCode + " is unknown.");
// }

/**
 * Примітивні типи даних в деталях
 */

/**
 * number
 */

/**
 * toString та різні системи зчислення
 */

// const number = 233;
//
// console.log(number.toString(8));
// console.log(number.toString(10));
// console.log(number.toString(16));

/**
 * parseInt
 */

// const string = '0xF';
//
// console.log(parseInt(string, 16));

/**
 * parseFloat
 */

// const string = '23.34sfvfddvd';
//
// console.log(parseFloat(string));

/**
 * Math
 */

/**
 * Math.abs, абсолютне значення числа
 */

// console.log(Math.abs("-1"));     // 1
// console.log(Math.abs(-2));       // 2
// console.log(Math.abs(null));     // 0
// console.log(Math.abs(""));       // 0
// console.log(Math.abs("string")); // NaN
// console.log(Math.abs());            // NaN

/**
 * Math.ceil, округлення вверх, до найближчого цілого значення
 */

// console.log(Math.ceil(.95));    // 1
// console.log(Math.ceil(4));      // 4
// console.log(Math.ceil(7.004));  // 8
// console.log(Math.ceil(-0.95));  // -0
// console.log(Math.ceil(-4));     // -4
// console.log(Math.ceil(-7.004)); // -7

/**
 * Math.floor, округлення вниз, до найближчого цілого значення
 */

// console.log(Math.floor(45.95));  //  45
// console.log(Math.floor(-45.95)); // -46

/**
 * .toFixed(), форматування числа, використовуючи запис з фіксованою комою
 */

// const numObj = 12345.6789;
//
// console.log(numObj.toFixed());  // '12346'
// console.log(numObj.toFixed(1)); // '12345.7'
// console.log(numObj.toFixed(6)); // '12345.678900'

/**
 * Про неточність розрахунку дробів...
 */

// console.log(0.1 + 0.2);

/**
 * ... та розв'язання проблеми через округлення
 */

// console.log((0.1 + 0.2).toFixed(2));

/**
 * String
 */

// різні варіанти запису
// const string1 = 'string1';
// const string2 = "string2";
// const string3 = `string3`;

/**
 * екранування спецсимволів
 */

// const string = 'об\'єднання';

/**
 * довжина рядка
 */

// const string = 'об\'єднання';
//
// console.log(string.length);

/**
 * звертання по індексу
 */

// const string = 'об\'єднання';

// console.log(string.charAt(0));

// console.log(string[0]);

/**
 * зміна регістру
 */

// const string = 'об\'єднання';
//
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

/**
 * пошук
 */

// const string = 'об\'єднання';
//
// console.log(string.indexOf('н'));
// console.log(string.lastIndexOf('н'));
// console.log(string.includes('Н'));
// console.log(string.startsWith('о', 1));
// console.log(string.endsWith('я'));

/**
 * отримання підрядка
 */

// const string = 'об\'єднання';
//
// console.log(string.slice(2, 4));

/**
 * обрізання зайвих пробілів
 */

// const string = '    об\'єднання    ';

// console.log(string);
// console.log(string.trim());
// console.log(string.trimStart());
// console.log(string.trimEnd());

/**
 * порівняння рядків
 */

// const string1 = "fcc"
// const string2 = "fcc"
// const string3 = "Fcc"

// console.log(string1 === string2)
// console.log(string1 === string3)
