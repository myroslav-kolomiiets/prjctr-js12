/**
 * Write a function expect that helps developers test their code.
 * It should take in any value val and return an object with the following two functions:
 * - toBe(val) accepts another value and returns true if the two values === each other.
 * If they are not equal, it should return "Not Equal".
 * - notToBe(val) accepts another value and returns true if the two values !== each other.
 * If they are equal, it should return "Equal".
 * @param {string, number} val
 * @return {Object}
 */
const expect = val => (
    {
        toBe: innerVal => val === innerVal || 'Not Equal',
        notToBe: innerVal => val !== innerVal || 'Equal'
    });

console.log(expect(5).toBe(5)); // true
console.log(expect(5).toBe(4)); // "Not Equal"
console.log(expect(5).notToBe(5)); // "Equal"
console.log(expect(5).notToBe(4)); // true

// Example 1:
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:
// Input: func = () => expect(5).toBe(null)
// Output: {"value": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:
// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.
