/**
 * @param {number} init
 * @return { Object }
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 * The three functions are:
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 */
const createCounter = function(init) {
    let count = init;
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        reset(){
            return count = init;
            // return count;
        }
    }
};

const counter = createCounter(5);
console.log(createCounter(5)); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
