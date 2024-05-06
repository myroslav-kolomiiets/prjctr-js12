/**
 * Capitalize
 * Write a function called capitalize that takes in a string and outputs
 * the same string with the first letter capitalized.
 * @param str
 * @return {string}
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize('test')); // Test
