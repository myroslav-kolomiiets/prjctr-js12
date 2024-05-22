'use strict';

/**
 * Основи роботи з DOM (2)
 * @author Miroslav
 */

/**
 * Атрибути
 */

// const elem = document.querySelector('body');
// console.log(elem.attributes);
// elem.setAttribute('class', 'prjctr-js12');

// const elem = document.querySelector('body');
// elem.setAttribute('test', 'value');

// console.log(elem.hasAttribute('test'));
// console.log(elem.hasAttribute('no'));

// const attr = elem.getAttribute('test');
// console.log(attr);

// elem.removeAttribute('test');
// console.log(elem);

// console.log(elem.attributes);

/**
 * Data атрибути
 */

// const elem = document.querySelector('body');
// console.log(elem.dataset.testTag);
// console.log(elem.dataset.id);

/**
 * Основні властивості
 */

// const node = document.querySelector("h1");
// console.log(node);
// console.log(node.nodeValue);

// console.log(node.nodeType);

// console.log(node.nodeName);
// console.log(node.tagName);

// console.log(node.innerHTML);
// console.log(node.outerHTML);

// console.log(node.textContent);

// node.hidden = true;

/**
 * Події
 * приклад 1
 */

// const redButton = document.querySelector('.redButton');
// let counter = localStorage.getItem('counterLevel') || 0;
// const hatredLevel = document.querySelector('.hatredLevelCounter');
// hatredLevel.textContent = counter + '👿';
//
// function updateAndShowCounterLevel(event) {
//     console.log(event);
// 	counter++;
//     console.log(`Current counter level: ${counter}`);
//     console.log(`It is not high enough! 👿`);
//     localStorage.setItem('counterLevel', counter);
//     hatredLevel.textContent = counter+'👿';
// }
//
// redButton.addEventListener('click', updateAndShowCounterLevel);

/**
 * Події
 * приклад 2
 */

// let link = document.querySelector('a');
//
// link.addEventListener('click',function(event) {
//     console.log('clicked');
//     console.log(event);
// });
//
// let redButton = document.querySelector('.redButton');
//
// redButton.addEventListener('click', function(event) {
//     console.log(`It is not high enough! 👿`);
// });
//
// document.body.addEventListener('click',function(event) {
//     console.log('The body was clicked!');
//     console.log(`It is not high enough! 👿`);
// });

/**
 * Кастомні події
 */

// const redButton = document.querySelector('.redButton');
// const greenButton = document.querySelector('.greenButton');
//
// function highlight(elem) {
//     elem.style.backgroundColor = 'blue';
//
//     // create the event
//     let event = new CustomEvent('highlight', {
//         detail: {
//             backgroundColor: 'blue',
//         }
//     });
//     // dispatch the event
//     elem.dispatchEvent(event);
// }
//
// greenButton.addEventListener('click', () => {
//     // highlight redButton element
//     highlight(redButton);
// });
//
// redButton.addEventListener('highlight', function (event) {
//     event.target.style.border = "solid 1px red";
//
//     console.log(event);
// });

