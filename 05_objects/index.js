'use strict';

/**
 * Об'єкти в деталях
 * @author Miroslav
 */

// const arr1 = [1, true, {key: 'value'}];
// const arrCopy = arr1.slice(0);
//
// console.log(arr1)
// console.log(arrCopy)
// console.log(arr1[2] === arrCopy[2]);

let id = Symbol("unique person id");
let anotherId = Symbol("unique person id");
// console.log(id === anotherId);

const person = {
    name: 'Anton',
    age: 56,
    mainRole: 'admin',
    "secondary role": 'admin',
    isOnline: false,
    roles: ["user", "support", "admin"],
    sayHi: () => {
        console.log("Hello there!");
    },
    params: {
        height: 175,
        weight: 85,
        obj: {
            key: 'value',
        }
    },
    [id]: 42,
};

// console.log(person.name);

// const personClone = person;
// personClone.name = "Anna";
// console.log(person);

// person.id = 555;
// console.log(person);

// let someKey = 'mainRole';
// console.log(person[someKey])

/**
 * CRUD операції
 */

// create
// const initObject = {name: 'someName'};
// const secondObject = new Object({});

// const arr = [11];
// const arr2 = new Array(11);
// console.log(arr);

// read
// console.log(initObject)
// console.log(secondObject)

// const key = 'isOnline';
// console.log(person['key end']);

// update
// person.name = "Anna";
// person.test = 'test';
// console.log(person);

// delete
// delete person.name;
// console.log(person);

/**
 * Перевірка існування ключів
 */

// let isThereSomeHeight = 'height' in person.params;
// console.log(isThereSomeHeight);

/**
 * Робота з циклом
 */

// for (let key in person) {
// 	console.log(person[key]);
// }

/**
 * Опційний ланцюжок
 */

// const personColor = person?.params?.color;
// const personHeight = person?.params?.height;
// console.log(personColor); // false
// console.log(personHeight); // true

/**
 * Object.keys, Object.values
 */

// console.log(Object.keys(person));
// console.log(Object.values(person));

/**
 * Object.entries, Object.fromEntries
 */

// console.log(Object.entries(person));
//
// let capsPerson = Object.fromEntries(
//   Object.entries(person).map(([key, value]) => [key.toUpperCase(), value])
// );
//
// console.log(capsPerson);

// capsPerson.SAYHI();

/**
 * Примітивний тип символ
 */

// console.log(person.id);
// console.log(person[id]);

/**
 * Про що варто пам'ятати?
 */

/**
 * null теж об'єкт
 */

// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});

// if (
// 	typeof person === 'object' &&
// 	person !== null &&
// 	!Array.isArray(person)
// ) {
// 	console.log('its object');
// }

/**
 * Копіювання об'єктів через Object.assign
 */

// const personClone = Object.assign({}, person);
//
// console.log(personClone);

/**
 * Глибоке копіювання об'єктів
 */

// let anotherPerson = JSON.parse(JSON.stringify(person));
//
// anotherPerson.name = 'Oleg';
//
// anotherPerson.params.height = 180;
//
// console.log(person);
// console.log(anotherPerson);

/**
 * Як зробити об'єкт незмінним
 */

// Object.freeze(person);

// person.name = 'Nataly';

// console.log(person);

/**
 * Вбудований об'єкт Date
 */

// const date1 = new Date("2022-01-10");
// console.log(date1);
//
// const date2 = new Date(0);
// console.log(date2);
//
// const date3 = new Date(2022, 1, 10);
// console.log(date3);
//
// const date4 = new Date();
// console.log(date4);
//
// console.log(date4.getFullYear());
// console.log(date4.getDay());

/**
 * Date.now()
 */

// const start = Date.now();
// for (let i = 0; i < 1000000000; i++) {
// 	++person[id]
// }
// console.log(`Time elapsed: ${Date.now() - start} ms`);

/**
 * performance.now()
 */

// let start = performance.now();
// for (let i = 0; i < 1000000000; i++) {
// 	++person[id]
// }
// let end = performance.now();
//
// console.log(`Time elapsed: ${end - start} ms`);

/**
 * Date.parse()
 */

// console.log(Date.parse('03 Aug 1985'));

/**
 * деструктуризація масивів
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Olga"];
//
// const user1 = users[0];
// const user2 = users[1];
// const user3 = users[2];
//
// let [user1, user2, user3] = users;
//
// console.log(user1)
// console.log(user2)
// console.log(user3)

/**
 * деструктуризація об'єктів
 */

// let person2 = {
//     firstName: 'John',
//     lastName: 'Doe',
// };
//
// let firstName = person2.firstName;
// let lastName = person2.lastName;
//
// let { firstName, lastName } = person2;
//
// console.log(firstName);
// console.log(lastName);

/**
 * spread синтаксис
 */

// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
// console.log(obj);

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// const array3 = [...array1, ...array2];
// console.log(array3);


//1. Вивід парних чисел циклом for

let value = 10;

if (isNaN (value)) {
    console.log ("Помилка: введіть число");
} else {
    for (let i = value; i >= 1; i--) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
