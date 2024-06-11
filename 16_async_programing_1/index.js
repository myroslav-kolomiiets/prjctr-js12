'use strict';

/**
 * Асинхронне програмування (1)
 * @author Miroslav
 */

// setTimeout(function greet() {
//   console.log('Good day, user!');
// }, 5000);
//
// console.log("I'm being called before greet function.");

// - чому код в 12 рядку виконався раніше за 9
// - куди поділось виконання коду з рядка 9
// - як воно розуміє що треба виводити код з 9 рядка

/**
 * Стек викликів
 */

// function outer() {
//     function inner() {
//         console.log('Hello!') // 3
//     };
//
//     inner(); // 2
// }
//
// outer(); // 1

// -------
// outer()
// outer() inner()
// outer() inner() console.log()
// outer() inner()
// outer()
// -------

/**
 * Приклад асинхронного коду і його стеку
 */

// function main() {
//   setTimeout(function greet() {
//     console.log('Hello!') // 3
//   }, 2000)
//
//   console.log('Bye!'); // 2
// }
//
// main(); // 1

// ------
// main()
// main() setTimeout
// main() console.log()
// main()
// ------
// 2 s
// greet()
// greet() console.log()
// greet()
// ------

/**
 * Цикл подій
 */

// СТЕК                                        WEB API                                 Черга задач

/**
 * Пекло колбеків
 */

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       setTimeout(() => {
//         console.log('Hello!')
//       }, 5000)
//     }, 5000)
//   }, 5000)
// }, 5000)


// function request(url, onSuccess) {
//   /*...*/
// }

// request('/api/users/1', function (user) {
//   request(`/api/photos/${user.id}/`, function (photo) {
//     request(`/api/crop/${photo.id}/`, function (response) {
//       console.log(response)
//     })
//   })
// })

/**
 * fetch
 */

// const textEditorState = {
//   lastModified: "2023-01-09T12:15:00",
//   blocks: [
//     {
//       type: "heading",
//       data: {
//         text: "Плани на 2023"
//       }
//     },
//     {
//       type: "paragraph",
//       data: {
//         text: "Перемога"
//       }
//     }
//   ]
// }
//
// const response = await fetch('/api/save-text', {
//    method: 'POST',
//    body: JSON.stringify(textEditorState),
// })

/**
 * REST
 */

// Наприклад, метод та адреса для створення користувача
// могли б виглядати так:
// POST /api/users

// Для отримання конкретного користувача:
// GET /api/users/1
// (Де 1 - це ID користувача.)

// Для редагування даних про користувача:
// PATCH /api/users/1

// Для видалення даних:
// DELETE /api/users/1
