//String exercise
//check if a string contains an email address with '@gmail.com'or not

//viet 1 ham tra ve true or false xem trong 1 do co duoi @gmailcom hay ko
//indexOf : se tra ve vi tri dau tien ma no nhin thay

//lastIndexOf
//includes

function hasEmail(str) {
  //   return str.includes('@gmail.com');
  //   return str.indexOf('@gmail.com') >= 0;
  return str.lastIndexOf('@gmail.com') >= 0;
}
console.log(hasEmail('abc abc@gmail.com def'));
console.log(hasEmail('abc abc@gmail def'));
