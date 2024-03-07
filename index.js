console.log('bobbyhadz.com');

/**
 * Setting session variables
 */

sessionStorage.setItem('first', 'bobby');
sessionStorage.setItem('last', 'hadz');

const arr = ['dev', 'test', 'ship'];

sessionStorage.setItem('tasks', JSON.stringify(arr));

// -----------------------------------

/**
 * Accessing session variables
 */

console.log(sessionStorage.getItem('first')); // 👉️ bobby
console.log(sessionStorage.getItem('last')); // 👉️ hadz

const parsed = JSON.parse(sessionStorage.getItem('tasks'));
console.log(parsed); // 👉️ ['dev', 'test', 'ship']
