'use strict';

/**
 * ООП в JS (1)
 * @author Miroslav
 */

// const Fomo = {
//     name: "Ali",
//     species: "alien",
//     sayPhrase: () => console.log("I'm Ali the alien!"),
//     fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
// }
//
// const Sunny = {
//     name: "Buggy",
//     species: "bug",
//     sayPhrase: () => console.log("Your debugger doesn't work with me!"),
//     hide: () => console.log("You can't catch me now!")
// }
//
// const Human = {
//     name: "Tito",
//     species: "human",
//     sayPhrase: () => console.log("I can cook, swim and dance!"),
//     yell: () => console.log("Make humanity great again!")
// }

// Fomo.sayPhrase();
// Human.yell();

/**
 * Приклад користі ООП
 */

// class Alien {
//     constructor(name, phrase) {
//         this.name = name
//         this.phrase = phrase
//         this.species = "alien"
//     }
//
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
//     sayPhrase = () => console.log(this.phrase);
// }
//
// class Bug {
//     constructor(name, phrase) {
//         this.name = name
//         this.phrase = phrase
//         this.species = "bug"
//     }
//
//     hide = () => console.log("You can't catch me now!");
//     sayPhrase = () => console.log(this.phrase);
// }
//
// class Human {
//     constructor(name, phrase) {
//         this.name = name
//         this.phrase = phrase
//         this.species = "human"
//     }
//
//     yell = () => console.log("Make humanity great again!");
//     sayPhrase = () => console.log(this.phrase);
// }
//
// const alien1 = new Alien("Ali", "I'm Ali the alien!")
// const alien2 = new Alien("Lien", "Run for your lives!")
// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!")
// const bug2 = new Bug("Erik", "I drink decaf!")
// const human1 = new Human("Tito", "I can cook, swim and dance!")
// const human2 = new Human("John Cena", "Hasta la vista, baby!")
// alien2.sayPhrase();
// human2.sayPhrase();

/**
 * Основні принципи ООП на прикладах:
 *
 * Успадкування - можливість створювати класи з урахуванням інших класів.
 * За допомогою цього принципу можна визначати батьківський клас (з потрібними властивостями та методами),
 * а потім дочірній клас, який успадковуватиме від батьківського класу всі властивості та методи.
 */

// class Character {
//     constructor(speed) {
//         this.speed = speed
//     }
//
//     move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
// }
//
// class Enemy extends Character {
//     constructor(name, phrase, power, speed) {
//         super(speed)
//         this.name = name
//         this.phrase = phrase
//         this.power = power
//     }
//
//     sayPhrase = () => console.log(this.phrase)
//     attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
// }
//
// class Alien extends Enemy {
//     constructor(name, phrase, power, speed, birthYear) {
//         super(name, phrase, power, speed)
//         this.species = "alien"
//     }
//
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
//     howOld = () => console.log(`I was born in ${this.#birthYear}`)
//     attack = () => console.log("I'm pacifist")
// }
//
// class Bug extends Enemy {
//     constructor(name, phrase, power, speed) {
//         super(name, phrase, power, speed)
//         this.species = "bug"
//     }
//
//     hide = () => console.log("You can't catch me now!")
// }
//
// class Human extends Enemy {
//     constructor(name, phrase, power, speed) {
//         super(name, phrase, power, speed)
//         this.species = "human"
//     }
//
//     yell = () => console.log("Make humanity great again!")
// }
//
// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
// const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)
// const bug2 = new Bug("Erik", "I drink decaf!", 5, 120)
// const human1 = new Human("Tito", "I can cook, swim and dance!", 125, 30)
// const human2 = new Human("John Cena", "Hasta la vista, baby!", 155, 40)
// console.log(bug1);
// alien1.attack();

/**
 * Інкапсуляція - означає здатність об'єкта «вирішувати», яку інформацію він розкриватиме для зовнішнього світу, а яку ні.
 * Реалізується цей принцип через публічні та закриті властивості та методи.
 */

// class Character {
//     constructor(speed) {
//         this.speed = speed
//     }
//
//     move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
// }

// class Enemy extends Character {
//     constructor(name, phrase, power, speed) {
//         super(speed)
//         this.name = name
//         this.phrase = phrase
//         this.power = power
//     }
//
//     sayPhrase = () => console.log(this.phrase)
//     attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
// }

// class Alien extends Enemy {
//     #birthYear
//
//     constructor(name, phrase, power, speed, birthYear) {
//         super(name, phrase, power, speed)
//         this.species = "alien"
//         this.#birthYear = birthYear
//     }
//
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
//     howOld = () => console.log(`I was born in ${this.#birthYear}`)
//     attack = () => console.log("I'm pacifist")
// }
//
// const alien3 = new Alien("Gnu", "I'm Gnu the alien!", 11, 55, 2022);
// console.log(alien3);
// alien3.howOld();
// console.log(alien3.#birthYear);

/**
 * Поліморфізм - відображає здатність методу повертати різні значення, згідно з певними умовами.
 * Є базований на параметрах (приклад - 'sayPhrase' у класі 'Enemy').
 * Є через перевизначення батьківського методу (приклад - 'attack' у класі 'Alien').
 */

// console.log(1 + 1);
// console.log('1' + '1');

/**
 * Композиція.
 * За допомогою композиції можна надавати властивості та методи об'єктам більш гнучким способом,
 * в результаті якого вони отримують лише те, що потрібно, та нічого зайвого.
 */

// class Character {
//     constructor(speed) {
//         this.speed = speed
//     }
//
//     move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
// }
//
// class Enemy extends Character {
//     constructor(name, phrase, power, speed) {
//         super(speed)
//         this.name = name
//         this.phrase = phrase
//         this.power = power
//     }
//
//     sayPhrase = () => console.log(this.phrase)
//     attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
// }
//
// class Bug extends Enemy {
//     constructor(name, phrase, power, speed) {
//         super(name, phrase, power, speed)
//         this.species = "bug"
//     }
//
//     hide = () => console.log("You can't catch me now!")
// }
//
// const bug3 = new Bug("Bud", "Ha-ha", 35, 125)
//
// const addFlyingAbility = obj => {
//     obj.fly = () => console.log(`Now ${obj.name} can fly!`)
// }
//
// addFlyingAbility(bug3);
//
// bug3.fly();

// console.log(bug3);
