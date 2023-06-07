/**
 * Write a function to classify student(phân loại học sinh) 
Receive mark as a number, output as below :(Nhận đánh dấu dưới dạng số, xuất ra như sau:)

mark >8 --> 'Excellence':xuất sắc
7 <= mark <= --> good
4 <= mark <=8 --> not good 
mark <4   --> bad
 */

function classifyStudent(mark) {
  let result;

  switch (mark) {
    case 1:
    case 2:
    case 3: {
      result = 'Bad';
      break;
    }
    case 4:
    case 5:
    case 6: {
      result = 'Not Good';
      break;
    }

    case 7:
    case 8: {
      result = 'Good';
      break;
    }

    case 9:
    case 10: {
      result = 'Good';
      break;
    }
    default: {
      result = 'Excellence';
    }
  }
  return result;
}

console.log(classifyStudent(12));
// console.log(classifyStudent(10));
// console.log(classifyStudent(7));
// console.log(classifyStudent(5));
// console.log(classifyStudent(2));



