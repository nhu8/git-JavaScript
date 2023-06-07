/**
 * 
 * @param {*} n 
 * 1. Wirte a function to check if a number is odd/even_số chẳn
Viết hàm kiểm tra xem một số có lẻ/chẵn không

 */
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(5));

function isOdd(n) {
  return n % 2 === 1;
}
console.log(isOdd(2));
console.log(isOdd(3));
console.log(isOdd(4));
console.log(isOdd(5));

/**
 * 2. Wirte a function to check if a number is divisible_chia hết by 5
Viết hàm kiểm tra một số có chia hết không

 */
function isDivisibleBy5(n) {
  return n % 5 === 0;
}
console.log(isDivisibleBy5(5));
console.log(isDivisibleBy5(6));
console.log(isDivisibleBy5(7));

/**
 * 3. Write a function to chek if a number  is perfect square_số chính phương
Viết hàm kiểm tra xem một số có phải là số chính phương hay không
- so chinh phuong la: binh phuong cua 1 so tu nhien
-> n = a*a -> tuc la lay can bac 2 cua n 
*/

function isPerfectSquare(n){
    if(n<0) return false;

    const sqrtN = Math.sqrt(n);//can bac 2 // 
    const sqrtNInt = Math.trunc(sqrtN); //chi lay phan nguyen
    
    return sqrtNInt * sqrtNInt === n;
}

console.log(isPerfectSquare(2));
console.log(isPerfectSquare(6));
console.log(isPerfectSquare(8));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(20));
console.log(isPerfectSquare(25));

