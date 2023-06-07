//Eg: parameterize('Code JS IS Fun')-> 'code-js-is-fun'
//toLowerCase()
//p1: replaceAll()
//p2: split and join

function parameterize(str) {
  // const lowerCaseStr = str.toLowerCase();

  return str.toLowerCase().replaceAll(' ', '-');
}

console.log(parameterize('Code JS IS Fun'));

//split_tach ra and join_hop lai

function parameterize(str) {
  // const lowerCaseStr = str.toLowerCase();
  return str.toLowerCase().split(' ').join('-');
}

console.log(parameterize('Code JS IS Fun'));
