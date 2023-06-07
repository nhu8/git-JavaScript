/**
 * 1. Write a function to calculate the are of a rectangle _hình chữ nhật
Viết hàm tính diện tích hình chữ nhật
2. Write a function to calculate the are of a perimeter _chu vi
Viết hàm tính chu vi

3. Write a function to calculate the are of a circle _hình tròn
Viết hàm tính diện tích hình tròn
 */

// function calcAreaOfREctangle(a, b) {
//   //checking
//   if (a <= 0 || b <= 0) return -1;

//   return a * b;
// }
// console.log(calcAreaOfREctangle(2, 5));

// function calcAreaOfPerimeter(a, b) {
//   //checking
//   if (a <= 0 || b <= 0) return -1;

//   return (a + b) * 2;
// }
// console.log(calcAreaOfPerimeter(2, 5));

function calcAreaOfCircle(r) {
  //checking
  if (r <= 0) return -1;

  return Math.PI * r * r;
}
console.log(calcAreaOfCircle(2));
