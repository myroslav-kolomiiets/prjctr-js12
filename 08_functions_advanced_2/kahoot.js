'use strict';

// function makeCounter() {
//     let count = 0;
//     return function() {
//         return ++count;
//     }
// }
//
// let counter = makeCounter();

// console.log(counter());


let price1 = 1;

function simpleSum() {
    let innerPrice = 10;
    return price1 +innerPrice;
}

function complexSum() {
    let price1 = 100;
    return simpleSum();
}

price1 = 2;

console.log(complexSum()); // 12
