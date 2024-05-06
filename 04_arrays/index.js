'use strict';

/**
 * Масиви в деталях
 * @author Miroslav
 */

/**
 * Створення масиву
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Nataly"];

// const arrWithDifferentElemTypes = [42, 'string', [3, 6], { key: 'someValue'} ];
//
// const nestedArr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(nestedArr[1][1]);

// const arrWithTenEmptyItems = new Array(10);
// console.log(arrWithTenEmptyItems);

/**
 * Перевірка чи є певна сутність масивом
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Nataly"];

// console.log(Array.isArray(users));

/**
 * CRUD операції
 */

// create
// const users = ["Igor", "Olga", "Petro", "Anna", "Nataly"];

// console.log(users);

// read
// const user = users[1];
// console.log(users);

// update
// users[5] = "Ivanka";
// console.log(users);

// delete
// delete users[2];
// console.log(users);

/**
 * length
 */

// length
// const users = ["Igor", "Olga", "Petro", "Anna"];

// const length =  users.length;

// console.log(length);

// console.log(users[users.length - 1]);
// console.log(users.length);

// console.log(users.at(0));

/**
 * методи масивів
 */

// const users = ["Igor", "Olga", "Petro", "Anna"];

// додати в кінець
// users.push('Ivan');
// console.log(users);

// видалити останній
// const last= users.pop();
// console.log(last);

// додати в початок
// users.unshift('Ivan');
// console.log(users);

// видалити з початку
// const first = users.shift();
// console.log(first);

/**
 * видалення елементів де завгодно через splice
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Ivanka"];
// const copy = users;

// const deletedUsers = users.splice(2, 2, "John", "Jen");
// console.log(deletedUsers);
// console.log(users);

/**
 * зріз-копія масиву через slice
 */

// const users = [{key: "value"}, "Olga", "Petro", "Anna"];
//
// const specialUsers = users.slice();
//
// specialUsers[3] = 'Ivan';
//
// console.log('users --> ', users);
// console.log('specialUsers --> ', specialUsers);

/**
 * перебір масиву
 */

// const users = [["Igor"], "Olga", "Petro", "Anna"];
//
// const copy = [];

// for(let index = 0; index < users.length; index++) {
// 	console.log(users[index]);
// }

// for (let user of users) {
// 	console.log(user);
// }

// users.forEach((user, index) => {
// 		console.log(`${user}, my number is - ${index + 1}`)
// 	});

/**
 * конкатенація масивів
 */

// const users = ["Igor", "Olga", "Petro", "Anna"];
// const specialUsers = ["Ivan", "Pavlo"];
//
// const superUsers = users.concat(specialUsers);
//
// console.log('users --> ', users);
// console.log('superusers --> ', superUsers);

/**
 * перетворення масивів через map
 */

// const users = ["Igor", "Olga", "Petro", "Anna"];
//
// const updatedUsers = users.map((name) => {
// 	return name.toUpperCase();
// });
//
// console.log('users --> ', users);
// console.log('updatedUsers --> ', updatedUsers);

/**
 * сортування масивів через sort
 */

// const numbers = [10, -5, 16, 24];

// numbers.sort();

/**
 * Пояснення
 * function compareFn(a, b) {
 *    if (a is less than b by some ordering criterion) {
 *        return -1;
 *    } else if (a is greater than b by the ordering criterion) {
 *        return 1;
 *    }
 *    // a must be equal to b
 *    return 0;
 * }
 */

// numbers.sort((a, b) => {
//     // console.log(a, b)
// 	if (a > b) {
// 		return 1;
// 	} else if( a < b) {
// 		return -1;
// 	}
//     return 0;
// });
//
// console.log('sorted numbers --> ', numbers);

/**
 * розвертання масивів через reverse
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Olga"];
//
// const copiedUsers = users.slice();
// const reversedUsers = copiedUsers.reverse();
//
// console.log('users --> ', users);
// console.log('reversedUsers --> ', reversedUsers);

/**
 * розвертання масивів в рядок і назад
 */

// let userData = ["Koval", "Ivan", "Petrovych"];
//
// const userDataString = userData.join(' ');
// const userDataArr = userDataString.split('');
//
// console.log(userDataString);
// console.log(userDataArr);

/**
 * пошук в масиві
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Olga"];

// const hasNameIvan = users.includes("Ivan");

// console.log('hasNameIvan --> ', hasNameIvan);

// const indexOfNameOlga = users.lastIndexOf("Olga");
//
// console.log('indexOfNameOlga --> ', indexOfNameOlga);

/**
 * find
 */

// const numberValues = [10, -5 , 16, 24, 100, 100, 100, -12, 7];
//
// const foundNumber = numberValues.find((number) => {
// 	return number === 100;
// });
//
// console.log('foundNumber --> ', foundNumber);

/**
 * filter
 */

// const numberValues = [10, -5 , 16, 24, 100, 100, 100, -12, 7];
//
// const filteredNumbers = numberValues.filter((number) => {
// 	return number === 100;
// });
//
// console.log('filteredNumbers --> ', filteredNumbers);

/**
 * flat
 */

// const matrix = [
// 	[24, 45, 56],
// 	[12, 56, [90]],
// 	[89, 41, 73]
// ];
//
// const flatMatrix = matrix.flat(Infinity);
// console.log('flatMatrix --> ', flatMatrix);

/**
 * reduce
 */

// const numberValues = [10, -5 , 16, 24, 100, -12, 7];
//
// const initValue = 0;
//
// const sumOfValues = numberValues.reduce(
// 	(prev, current) => {
//         console.log(prev, current);
// 		return prev + current;
// 	},
// 	initValue
// )
//
// console.log(sumOfValues);

/**
 * деструктуризація
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Olga"];

// const user1 = users[0];
// const user2 = users[1];
// const user3 = users[2];

// let [user1, user2, , user4] = users;

// console.log(user1)
// console.log(user2)
// console.log(user4)
