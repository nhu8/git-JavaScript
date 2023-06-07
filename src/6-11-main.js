// 1.  Get the ones of number having 3 digits
//lay hang don vi

// function axTractTheOnes(n) {
//   if (n.toString().length !== 3) return -1;

//   return n % 10; //chia lay du
// }
// console.log(axTractTheOnes(123)); //3

//2.  get the tens of a number having 3 digits
//lấy hàng chục của số có 3 chữ số
//123: de lay ra hang chuc vi thi: ta chia lay du cho 100
//-> 223 %100 = 2,23;-> tuc la 23 //de lay dung con so o hang tram thoi thi ta chia cho 10 va bo phan thap phan
//23 /10 = 2.3  --> khi ma ra so thap phan thi bo di duoi phan thap phan sd trunc()

// function extractTheTens(n) {
//   if (n.toString().length !== 3) return -1;

//   return Math.trunc((n % 100) / 10);
// }
// console.log(extractTheTens(123));

//3. get the hundreds of a number having 3 digits
//lấy số hàng trăm có 3 chữ số:

function axTractTheHundreds(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc(n / 100);
}
console.log(axTractTheHundreds(123));

function sumDigit(n) {
  if (n.toString().length !== 3) return -1;

  const ones = n % 10;
  const tens = Math.trunc((n % 10) % 10);
  const hundreds = Math.trunc(n / 100);

  return ones + tens + hundreds;
}
console.log(sumDigit(123));
