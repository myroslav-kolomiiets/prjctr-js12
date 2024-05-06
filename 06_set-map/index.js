// 'use strict';
//
// // const byteArray = new ArrayBuffer(10);
//
// /**
//  * Why cloning objects using "JSON. parse (JSON. stringify())" is not a good idea?
//  */
//
// // const cloneByJSONParse = JSON.parse(JSON.stringify(obj1));
// //
// // console.log(cloneByJSONParse);
// // console.log(cloneByJSONParse === obj1);
//
// /**
//  * Optional chaining (?.)
//  */
//
// // console.log(obj1.none?.some || 'default');
// // console.log(obj1.none?.none || 'default');
// // console.log(obj1.none?.());
//
// /**
//  * Object.assign()
//  */
//
// // const clone = Object.assign({}, obj1);
// //
// // console.log(clone);
// // console.log(clone.innerObj === obj1.innerObj);
//
// /**
//  * structuredClone()
//  */
//
// // const clone2 = structuredClone(obj1);
// //
// // console.log(clone2);
// // console.log(clone2.innerObj === obj1.innerObj);
//
// // Transfer objects
// // const clone = structuredClone(byteArray, { transfer: [byteArray] });
// //
// // console.log(byteArray);
// // console.log(clone);
//
// /**
//  * Let's make some custom function
//  */
// const obj1 = {
//     key4: NaN,
//     key7: null,
//     key: 'value',
//     key5: Infinity,
//     key2: undefined,
//     regExpObject: /.*/,
//     byteArray: new ArrayBuffer(10),
//     key3: Symbol('Some description'),
//     dateObject: new Date('2019-12-31T23:59:59'),
//     method: function() {
//         return 'Tada!';
//     },
//     innerObj: {
//         innerObjKey: 'innerObjValue',
//         obj: {
//             array: [1, 2, 3, 4, 5],
//         },
//     },
// };
//
// console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
//
// const cloneObject = (obj) => {
//     let innerObj = {};
//     for (let key in obj) {
//         // if (Array.isArray(obj[key])) {
//         //
//         // }
//         if (typeof obj[key] === 'object') {
//             innerObj[key] = cloneObject(obj[key]);
//         } else {
//             innerObj[key] = obj[key];
//         }
//     }
//
//     return innerObj;
// };
//
// const cloneByCustomFunc = cloneObject(obj1);
//
// console.log(cloneByCustomFunc.innerObj === obj1.innerObj);
// console.log(typeof null);
// console.log(cloneByCustomFunc.innerObj.obj.array === obj1.innerObj.obj.array);
// console.log(cloneByCustomFunc);
//
// /**
//  * Map
//  */
//
// // const testMap = new Map();
// //
// // testMap.set('key', 'value');
// // testMap.set([], 'value2');
// // testMap.set({ key: 'value' }, 'value2');
// // testMap.set(null, 'value3');
// // testMap.set(NaN, 'value4');
// // testMap.set(undefined, 'value5');
// // testMap.set(undefined, 'value6');
// //
// // const value = testMap.get(undefined);
// //
// // console.log(testMap);
// // console.log(value);
//
// /**
//  * Map, Set, WeakMap, WeakSet
//  * @author Miroslav
//  */
//
// /**
//  * Map
//  */
//
// // const map = new Map();
//
// // map.set('1', 'str1');   // рядок як ключ
// // map.set(1, 'num1');     // цифра як ключ
// // map.set(true, 'bool1'); // булеве значення як ключ
// // console.log(map.get(1));   // 'num1'
// // console.log(map.get('1')); // 'str1'
// // console.log(map.has('1')); // true
// // console.log(map.has(NaN)); // false
// // console.log(map.size); // 3
// // map.delete('1');
// // console.log(map.size); // 2
// // map.clear();
// // console.log(map.size); // 0
//
// /**
//  * Map, об'єкт як ключ
//  */
//
// // const user = {
// //     name: 'john',
// //     age: 42,
// //     role: 'admin',
// // };
// //
// // let visitsCountMap = new Map();
// //
// // visitsCountMap.set(user, 42);
// //
// // console.log(visitsCountMap.get(user)); // 42
//
// /**
//  * Map, варіанти перебору
//  */
//
// // let bills = new Map([
// //     ['bill1', 100],
// //     ['bill2', 1200],
// //     ['bill3', 600],
// // ]);
// //
// // const billsKeys = bills.keys();
// // for (let bill of billsKeys) {
// //     console.log(bill);
// // }
// //
// // const billsValues = bills.values();
// // for (let amount of billsValues) {
// //     console.log(amount);
// // }
// //
// // const billsEntries = bills.entries();
// // for (let entry of billsEntries) {
// //     console.log(entry);
// // }
//
// // bills.forEach((value, key, map) => {
// //     console.log(`${key}: ${value}`);
// // });
//
// /**
//  * Set
//  */
// // const arr = ['test','test','test','test'];
//
// // const usersSet = new Set();
// //
// // const user1 = { name: 'User1' };
// // const user2 = { name: 'User2' };
// // const user3 = { name: 'User3' };
// //
// // usersSet.add(user1);
// // usersSet.add(user2);
// // usersSet.add(user3);
// // usersSet.add(user1);
// // usersSet.add(user2);
// //
// // console.log( usersSet.size ); // 3
// //
// // for (let user of usersSet) {
// //     console.log(user.name);
// // }
//
// /**
//  * Set, варіанти перебору
//  */
//
//
// // for (let value of usersSet) {
// //     console.log(value);
// // }
//
// // usersSet.forEach((value) => {
// //     console.log(value);
// // });
//
// /**
//  * WeakMap
//  */
//
// // const weakMap = new WeakMap();
// //
// // const obj = {};
// //
// // weakMap.set(obj, 'some value');
// // weakMap.set('obj', 'some value'); // Error
