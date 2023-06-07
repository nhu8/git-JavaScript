//find(callback)
//find(x => x >0)

// function findFirstEven(numberList) {
//   if (!Array.isArray(numberList)) return undefined;

//   let firstEven;

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];

//     if (number % 2 === 0) {
//       return (firstEven = number);
//       break;
//     }
//   }
//   return firstEven;
// }

// console.log(findFirstEven([0, 1, 2, 3, 4]));

// console.log(findFirstEven([2, 3, 4]));

//v2

// function findFirstEven(numberList) {
//   if (!Array.isArray(numberList)) return undefined;

//   let firstEven;

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];

//     if (number % 2 === 0) {
//       return number;
//     }
//   }
//   return firstEven;
// }
// console.log(findFirstEven([2, 3, 4]));

//viet 1 ham ko chi la %2===0 ma co the chia het cho tat ca
//v3

// function map(arr, mappingFn) {
//   if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

//   const newArray = [];

//   for (i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     const newElement = mappingFn(element, i);
//     newArray.push(newElement);
//   }
//   return newArray;
// }

// console.log(map([1, 2, 3], (x) => x + 1));
// console.log(map([1, 2, 3], (x) => x * 4));

// console.log(map([1,2,3], (x, idx)=>idx%2===0 ?x+1 :x*2 ));

function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (callbackFn(element, i)) {
      newArray.push(element);
    }
  }
  return newArray;
}

console.log(filter([1, 2, 3, 4], (x) => x > 3));

console.log(filter([1, 2, 3, 4, 5], (x, idx) => x % 2 === 0 && idx % 2 === 1));
