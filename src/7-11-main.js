/**
 * 1. create an object student with name is Easy Frontend
 * and age is 18
 */

// const student = {
// };

// student.name = 'Easy Front';
// student.age = 18;

// console.log(student);
const student = {
  name: 'HN',
  name: 'Easy Frontend',
  age: 18,
};
console.log(student);

/**
 * check if an object is empty (mean have no keys)
 * { } --> no keys --> keys length of key list is 0
 *  */

// let data = {};
// data = {id:1};
// data.id

// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }
// console.log(isEmpty(''));
// console.log(isEmpty('hello'));
// console.log(isEmpty({ id: 1 }));
// console.log(isEmpty({}));

/**
 * Get average mark of an object
 * avg=sum / length
 * toFix: lam tron 1 chu so
 */

function CalcAvgMark(mark) {
  if (!mark) return -1;

  //length of object
  const lenOb = Object.keys(mark).length;

  //sum of value
  let sumOV = 0;
  for (const key in mark) {
    const value = mark[key];
    sumOV += value;
  }
  return (sumOV / lenOb).toFixed(2);
}
console.log(CalcAvgMark({ math: 9.6, IT: 9.8899 }));
