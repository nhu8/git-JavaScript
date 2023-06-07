//every

// function checkIfAllEven(numberList) {
//   if (!Array.isArray(numberList)) return false;
//   //dat co

//   let isValid = true;

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];

//     if (number % 2 !== 0) {
//       isValid = false;
//       break;
//     }
//   }
//   return isValid;
// }

// console.log(checkIfAllEven([2, 4, 6]));

function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 != 0) return false;
  }
  return true;
}
console.log(checkIfAllEven(1, 4, 6));
