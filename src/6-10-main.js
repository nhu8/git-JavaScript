//1. convert hour to seconds_giay:
//1h = 60phut -> 1 phut = 60giay -> 1h = 60*60 =3600s

function convertHourToSecond(hour) {
  if (hour < 0) return -1;
  if (hour === 0) return 0;

  const SECOND_PER_HOUR = 3600;
  return hour * 3600;
}
console.log(convertHourToSecond(3));

/**
 * Given 3 number , find max
 * ta sd 1 ky thuat: linh canh // tuc la di kiem tra tung so
 *  */
function findMax(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

console.log(findMax(2, 4, 7));

/**
 * Given 3 numbers, find max even number
 *
 */
function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY; //so am

  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;

  return max;
}
console.log(findMaxEven(7, 10, 14));


