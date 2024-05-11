'use strict';

/**
 * Просунута робота з функціями 2
 * @author Miroslav
 */

/**
 * Замикання
 * кейс перший - простий
 */

// let test = 666;
//
// function a() {
//     console.log(test);
// }
//
// function b() {
//     let test = 777;
//     console.log(test);
// }
//
// test = 888;
//
// a();
// b();

/**
 * Кейс другий - складніший
 */

// let test = 666;
//
// function a() {
//     console.log(test);
// }
//
// function b() {
//     let test = 777;
//     a();
// }
//
// b(); // 666, 666


/**
 * Кейс третій - складніший
 */

// let test = 666;
//
// function b() {
//     let test = 777;
//
//     function a() {
//         console.log(test);
//     }
//
//     a();
// }
//
// b(); // 777, 777, 777

/**
 * setTimeout
 */

// function sayHi(phrase, who) {
//     console.log(phrase + ', ' + who);
// }
//
// setTimeout(sayHi, 0, "Hello", "Petro");
//
// setTimeout((phrase, who) => {
//     console.log(phrase + ', ' + who);
// }, 5000, "Hello", "Petro");

/**
 * приклад clearTimeout
 */

// function sayHi(phrase, who) {
//     console.log(phrase + ', ' + who);
// }
//
// let delay = 2000;
//
// let timerId = setTimeout(sayHi, delay, "Hello", "Petro");
// // console.log('timerId -', timerId);
// clearTimeout(timerId);

/**
 * setInterval
 */

// function sayHi(phrase, who) {
//     console.log(phrase + ', ' + who);
// }

// let timerId = setInterval(sayHi, 2000, "Hello", "Petro");

// setTimeout(() => {
//     clearInterval(timerId);
//     console.log('stop');
// }, 10000);

// альтернатива - вкладений setTimeout

/**
 * setTimeout простий приклад
 */

// let timerId = setTimeout(function tick() {
//     console.log('ping');
//     timerId = setTimeout(tick, 2000); // ось вкладений setTimeout
// }, 2000);

/**
 * setTimeout практичний приклад - сервіс з гнучкою витримкою часу запитів на бекенд
 */

// let delay = 5000; // витримка часу по якій будуть робитись запити
//
// let timerId = setTimeout(function request() {
// // логіка яка робить запит на бекенд
//
//     if (/* якась помилка запиту на бекенд */) {
//         // збільшуємо витримку часу
//         delay *= 2;
//     }
//
//     timerId = setTimeout(request, delay);
//
// }, delay);

/**
 * Частковий приклад - setTimeout з нульовою затримкою.
 * Це планує виклик func настільки швидко, наскільки це можливо.
 * Але планувальник викликатиме функцію лише після завершення виконання поточного коду.
 */

// let num = 5;

// const getNum = () => {
//     return num;
// }

// setTimeout(() => {
//     num = 20;
// });

// console.log(num);
// setTimeout(() => console.log(num));

/**
 * Задача №1
 * Яка буде послідовність console.log?
 */

// setTimeout(() => console.log(1));
// setTimeout(() => console.log(2));
// console.log(3)
// setTimeout(() => console.log(4));

/**
 * Методи об'єктів
 */

/**
 * Приклади написання методів об'єктів
 * варіант 1
 */

// const user = {
//     name: 'Helga',
//     gender: 'female',
//     age: 43,
//     say() {
//         return true;
//     }
// };

// user.say();

// user.sayPhrase = function (phrase) {
//     console.log(phrase);
// }

// user.sayPhrase('Привіт!');

/**
 * Приклади написання методів об'єктів
 * варіант 2
 */

// const user = {
//     name: 'Helga',
//     gender: 'female',
//     age: 43
// };
//
// function sayPhrase(phrase) {
//     console.log(phrase);
// }
//
// user.sayPhrase = sayPhrase;
//
// user.sayPhrase('Здоров!');

/**
 * Приклади написання методів об'єктів
 * варіант 3
 */

// const user = {
//     name: 'Helga',
//     gender: 'female',
//     age: 43,
//     sayPhrase: function (phrase) {
//         console.log(phrase);
//     }
// }
//
// user.sayPhrase('Що там?');

/**
 * Приклади написання методів об'єктів
 * варіант 4
 */

// const user = {
//     name: 'Helga',
//     gender: 'female',
//     age: 43,
//     sayPhrase(phrase) {
//         console.log(phrase);
//     }
// }
//
// user.sayPhrase('Як там?');

/**
 * Ключове слово`this`
 */

// const user = {
//     name: 'Helga',
//     gender: 'female',
//     age: 43,
//     introduce() {
//         console.log(`My name is ${this.name}!`);
//     }
// }
//
// user.introduce();

/**
 * Приклад чому не варто використовувати пряме посилання
 */

// let user = {
//     name: 'Helga',
//     gender: 'female',
//     age: 43,
//     introduce() {
//         console.log(`My name is ${this.name}!`);
//     }
// }
//
// let anotherUser = user;
// user = null;
//
// anotherUser.introduce();

/**
 * "this" не є фіксованим, воно обчислюється залежно від місця виконання коду
 */

// let user = {
//     name: 'Helga',
//     gender: 'female',
//     age: 43,
//     introduce() {
//         console.log(`My name is ${this.name}!`);
//     }
// }
//
// let anotherUser = {
//     name: 'Derek',
//     gender: 'male',
//     age: 35,
//     introduce() {
//         console.log(`My name is ${this.name}!`);
//     }
// };
//
// user.introduce();
// anotherUser.introduce();

/**
 * "this" відсутній у стрілкових функцій, вони беруть this з оточення
 */

// let user = {
//     name: "Derek",
//     gender: 'male',
//     roles: ["admin", "user", "husband"],
//     age: 35,
//     introduce() {
//         const func = function() {
//             console.log(this);
//         }
//         func();
//         // let arrow = () => console.log(`My name is ${name}!`);
//         // arrow();
//     },
//     showRoles() {
//         this.roles.forEach(role => console.log(`One of my roles - \'${role}\'`));
//     },
// };

// user.introduce();
// user.showRoles();

/**
 * Контекст виконання
 * Проблема втрати контексту
 */

// Якщо метод передавався окремо від об'єкта – this втрачається
// let user = {
//     firstName: "Василь",
//     sayHi() {
//         console.log(`Мене звати ${this.firstName}!`);
//     }
// };
//
// user.sayHi();
//
// setTimeout(user.sayHi, 1000)

/**
 * Ненадійне рішення - використання функцій-обгорток
 */

// let user = {
//     firstName: "Василь",
//     sayHi() {
//         console.log(`Мене звати ${this.firstName}!`);
//     }
// };
//
// setTimeout(function () {
//     user.sayHi()
// }, 1000)

// або

// let user = {
//     firstName: "Василь",
//     sayHi() {
//         console.log(`Мене звати	${this.firstName}!`);
//     }
// };
//
// setTimeout(() => user.sayHi(), 1000)

/**
 * Демонстрація ненадійності
 */

// let user = {
//     firstName: "Василь",
//     sayHi() {
//         console.log(`Мене звати ${this.firstName}!`);
//     }
// };
//
// setTimeout(() => user.sayHi(), 1000)
//
// user = {
//     sayHi() {
//         console.log('Nope!')
//     }
// }

/**
 * Надійне рішення - bind
 */

// let user = {
//     firstName: "Василь",
//     sayHi() {
//         console.log(`Мене звати ${this.firstName}!`);
//     }
// };
//
// let bindedSayHi = user.sayHi.bind(user);
//
// setTimeout(bindedSayHi, 1000)
//
// user = {
//     sayHi() {
//         console.log('Nope!')
//     }
// }

/**
 * При потребі можемо прив'язувати аргументи
 */

// let user = {
//     firstName: "Василь",
// };
//
// function sayPhrase(phrase) {
//     console.log(`${phrase} ${this.firstName}!`);
// }
//
// let bindedSayHi = sayPhrase.bind(user, 'Привіт');
// let bindedSayBye = sayPhrase.bind(user, 'Бувай');
//
// setTimeout(bindedSayBye, 1000)
//
// bindedSayHi();

/**
 * Задача №3
 * Як ми можемо задати значення аргументу "phrase"?
 * І в якого методу пріоритет?
 */

// let user = {
//     firstName: "Василь",
// };
//
// function say(phrase) {
//     console.log(`${phrase} ${this.firstName}`);
// }
//
// let bindedSay = say.bind(user);
//
// bindedSay();

/**
 * call / apply
 */

const book1 = {
    title: 'Brave New World',
    author: 'Aldous Huxley',
}

const book2 = {
    title: '1984',
    author: 'George Orwell',
}
//
// function summary() {
//     console.log(`${this.title} was written by ${this.author}.`)
// }
//
// summary.bind(book1)();
//
// const func = summary.bind(book1);
// func();
//
// summary.bind(book2)();
//
// summary.call(book1);
// summary.apply(book2);

/**
 * call / apply - відмінності в передачі аргументів
 */

// function longerSummary(genre, year) {
//     console.log(
//         `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
//     )
// }
//
// longerSummary.call(book1, 'dystopian', 1932)
//
// longerSummary.apply(book2, ['dystopian', 1948])

