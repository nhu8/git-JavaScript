/**
 * //reduce(arr, calback, initialValue)
//rules:
- arr should be an array and callbackFn should be a function
   arr phải là một mảng và callbackFn phải là một hàm
- arr.length=0 and initialValue === undefined -> throw error
- arr.length=0 and initialValue !== undefined -> return initialValue_trả lại giá trị ban đầu
 *
 */

function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('Invalid parameters');
  }
  //arr is an array

  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('should have initialValue when array is empty');
    }

    return initialValue;
  }
  const hasInitialValue = initialValue !== undefined;

  const startIndex = hasInitialValue ? 0 : 1; //vi tri index
  //CurrentIndex:  TH ko co initialValue no se bat dau bang vi tri 1// neu co initialvalue thi IndexCurrent se bat dau vao tri tri 0

  //neu ta ko cung cap intialvalue thi: phan tu dau tien se duoc sd cho accumulator, neu khong thi ta lay gtri initial value day

  let accumulator = hasInitialValue ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    //chay tu so 0: initial
    accumulator = callbackFn(accumulator, arr[i], i);
  }

  return accumulator;
}

function calcSum(prevSum, number) {
  //0+2=2, tuong tu chay tiep
  return prevSum + number;
}

//day la cach hoat dong ben ngoai
reduce([2, 4, 6], calcSum, 0); //0 : initialvalue

reduce(
  [2, 4, 6],
  function (prevSum, number) {
    return prevSum + number;
  },
  0
);

console.log(reduce([2, 4, 6], (prevSum, number) => prevSum + number, 0));


