//A list of error codes form server
//E01: invalid username or password
//E02: Too many attempts(thử)
//E03: Missing data(Dữ liệu bị loi)
//Other code: Something went wrong(Đã xảy ra sự cố)
//Write a function that take errorCode and return the according message
//(Viết hàm lấy mã lỗi và trả về thông báo tương ứng)

// function getErrorMessage(errorCode) {
//   let message = '';

//   switch (errorCode) {
//     case 'E01': {
//       message = 'invalid username or password';
//       break;
//     }

//     case 'E02': {
//       message = 'Too many attempts(thử)';
//       break;
//     }

//     case 'E03': {
//       message = 'Missing data(Dữ liệu bị loi)';
//       break;
//     }
//   }
//   return message;
// }

// console.log(getErrorMessage('E01'));
// console.log(getErrorMessage('E02'));
// console.log(getErrorMessage('E03'));
// console.log(getErrorMessage('E04'));

//cach viet gon hon

function getErrorMessage(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts(thử)',
    E03: 'Missing data(Dữ liệu bị loi)',
  };
  const message = errorMap[errorCode] || 'something went wrong';
  return message;
}

console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));


