
//Random a number in range of [a,b] voi a <b
//so nho nhat la a
//vd : [10,100] //so nho nhat la 10 (100-10=90)-> random tu 0-90 = a -> a+ 10(so nho nhat)

function randomNumberInRange(a, b) {
  //checking args
  if (a >= b) return -1; //Khong random

  const random = Math.random() * (b - a);
  return Math.round(random) + a;
}

console.log(randomNumberInRange(10, 99));
console.log(randomNumberInRange(10, 999));
console.log(randomNumberInRange(10, 9999));
console.log(randomNumberInRange(10, 99999));
