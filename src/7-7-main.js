/**
 * split : tach ra // string to array: split()
 * join: gep lai //array[] to string: join()
 * 1. write a function to transform a string
 * 2. The first in lowercase
 * p1. toLowerCase()
 * p2. toUppercase()
 * p1.p2
 *
 */

function capitalize(str) {
  if (str === '') return '';

  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}

console.log(capitalize(''));
console.log(capitalize('ABC'));
console.log(capitalize('EasSy froNTEnD'));
