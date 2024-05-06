/**
 * @param {Array} arr
 * @return {Array}
 */
function unique(arr) {
    return Array.from(new Set(arr));
}

const users = ['user1', 'user1', 'user2', 'user3', 'user3', 'user3'];

const uniqueUsers = unique(users);

console.log(uniqueUsers); // ['user1', 'user2', 'user3']
console.log(uniqueUsers === users); // false
