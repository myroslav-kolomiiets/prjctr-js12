'use strict';

/**
 * Асинхронне програмування (2)
 * @author Miroslav
 */

/**
 * Приклад створення promise та обробки успішного запиту
 */

// const promise = new Promise(function(resolve, reject) {
//     // some code
//     setTimeout(() => resolve("done"), 1000);
// });
//
// promise.then((res) => console.log(res));

// const promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error('rejected')), 1000);
// });
//
// promise
//     .then((res) => console.log(res), (error) => console.log(error))
//     .catch((error) => error)
//     .finally(() => console.log('finally'));

/**
 * Приклад створення promise та обробки помилки
 */

// const errorPromise = new Promise(function(resolve, reject) {
// 	const data = ... // якась асинхронна операція - запит до БД, API тощо
// 	reject(new Error('якась помилка')); // переводимо в стан 'rejected' і віддаємо назовні помилку
// })

/**
 * Метод .then
 * псевдокод
 */

// const id = 45;

// fetch(`https://swapi.dev/api/films/${id}/`)
// 	.then((movies => getActors(movies))
// 	.then((actors => renderActors(actors))


/**
 * Метод .catch
 * псевдокод
 */

// fetch(`https://swapi.dev/api/films/${id}/`)
//     .then((movies) => getActors(movies))
//     .then((actors) => renderActors(actors))
//     .then((actors) => renderActors(actors))
//     .catch((error) => renderErrorMessage(error))
//     .then((actors) => renderActors(actors))
//     .then((actors) => renderActors(actors))
//     .then((actors) => renderActors(actors))
//     .then((actors) => renderActors(actors))
//     .then((actors) => renderActors(actors))
//     .catch((error) => renderErrorMessage(error))

/**
 * Метод .finally
 * псевдокод
 */

// let isLoading = true
// fetch(`https://swapi.dev/api/films/${id}/`)
//
// .finally(function () {
//   isLoading = false;
// })

/**
 * Приклад для оптимізації
 */

// let isLoading = true
// sendForm()
// 	.then((res) => {
// 	    isLoading = false
// 	    alert('ok')
// 	})
// 	.catch((err) => {
// 	    isLoading = false
// 	    alert(`Помилка: ${err.message}`)
// 	})

// let isLoading = true
// sendForm()
// 	.then((res) => {
// 	    alert('ok')
// 	})
// 	.catch((err) => {
// 	    alert(`Помилка: ${err.message}`)
// 	})
// 	.finally(() => {
// 	    isLoading = false
// 	})

/**
 * Приклад для ланцюжків
 */

// fetch('https://www.anapioficeandfire.com/api/houses?region=Dorne')
// 	.then(function(response) {
// 		return response.json();
// 	})
// 	.then(function(result) {
// 		console.log('result -->', result);
// 		return fetch(result[5].overlord)
// 	})
// 	.then(function(response) {
// 		return response.json();
// 	})
// 	.then(function(overlord) {
// 		console.log('overlord name -->', overlord.name);
// 	})
// 	.catch(function(error) {
// 		console.log(`Щось пішло не так: ${error.message}`)
// 	})

/**
 * Створення асинхронної функції з promise
 */

// function earnAllMoney() {
// 	return new Promise(function (resolve, reject) {
// 	    const result = tryEarnAllMoney() // асинхронна операція
// 	    if (result.ok) {
// 	      resolve(result) // успіх → переводимо проміс в fulfilled і передаємо результат
// 	    } else {
// 	      reject(new Error(result)) // помилка → переводимо проміс в rejected
// 	    }
//   	})
// }
//
// earnAllMoney()
// .then()
// .catch()

/**
 * fetch
 */

// fetch('http://jsonplaceholder.typicode.com/posts', {
// 	method: 'POST',
// 	body: //,
// 	headers:
// })

// fetch('http://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch()

/**
 * Приклад з обєктом options
 */

// const newPost = {
//   title: 'Мої плани на вечір',
//   body: 'поспати',
//   userId: 1,
// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST', // тут можуть бути GET, PUT, DELETE
//   body: JSON.stringify(newPost), // Тіло запиту в JSON-форматі
//   headers: {
//     // Додаємо необхідні заголовки
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   credentials: 'include'
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })

// fetch('https://jsonplaceholder.typicode.com/there-is-no-such-route')
// .then((response) => {
// 	// перевіряємо успішність запиту і викидаємо помилку
// 	if (!response.ok) {
// 	  throw new Error('Error occurred!')
// 	}

// 	return response.json()
// })
// // Тепер попадемо сюди, бо повернулась помилка
// .catch((err) => {
// 	console.log(err)
// }) // Error: Error occurred!

/**
 * Скасування запиту
 */

// const controller = new AbortController()
//
// function fetchData() {
//   return fetch('http://jsonplaceholder.typicode.com/posts', {
//     signal: controller.signal,
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((e) => {
//       console.log(e)
//     })
// }
//
// fetchData()
//
// // Якщо запит ще не був завершений, то він буде перерваний
// // перерваний fetch поверне проміс з помилкою
// controller.abort()

/**
 * Завантаження з результатом прогресу
 */

// fetch('https://i.imgur.com/C5QXZ7u.mp4').then(async (response) => {
//   let received = 0
//
//   // Отримуємо потік у змінну
//   const reader = response.body.getReader()
//
//   // Зчитуємо загальну кількість данних
//   const contentLength = parseInt(response.headers.get('Content-Length'), 10)
//
//   while (true) {
//     // Після виклику read() повертається об'єкт, в якому
//     // done - boolean-значення про те чи закінчилася інформація
//     // value - масив байтів, які прийшли цього разу
//     const { done, value } = await reader.read()
//
//     if (done) {
//       console.log('Отримано 100%');
//       break
//     }
//
//     received += value.length/contentLength;
//
//     console.log(`Отримано ${received*100}%`)
//   }
// })

/**
 * JSON
 */

// {
//   "brand": "Apple",
//   "model": "iPhone 11 Pro",
//   "isAvailable": true,
//   "display": 5.8,
//   "memories": [64, 256, 512],
//   "features": {
//     "tripleCamera": true,
//     "faceId": true,
//     "touchId": false,
//     "eSIM": true
//   }
// }

//

// const json =
//   '{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male"}'
// const jedi = JSON.parse(json)

// console.log(jedi.name)

// console.log(jedi.gender)

// console.log(jedi.birth_year)

// const JSONedJedi = JSON.stringify(jedi);

// console.log(JSONedJedi)
