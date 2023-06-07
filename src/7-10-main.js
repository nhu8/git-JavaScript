//ellipsis la 1 ki tu "..."
//ellipsis code is 8230. String.formCodePoint(8230);
// UTF=16 '\u2026' --> '...'
// Easy -> truncate ('Easy Frontend_lenght', 4_maxLenght );--> 'Eas...'

//Neu length <= maxLength  -> showFull
// length > maxLength -> truncate           (maxLenght -1) ;

function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;

  const shortStr = text.slice(0, maxLength - 1);
  return `${shortStr}\u2026`;
}

console.log(truncate('Easy FrontEnd', 4));
console.log(truncate('Eas', 4));
