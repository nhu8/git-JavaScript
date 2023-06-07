// function findLongWordI(wordList) {
//   if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

//   let longestWord = wordList[0];
//   for (i = 0; i < wordList.length; i++) {
//     const currentWord = wordList[i];

//     if (currentWord.length > longestWord.length) {
//       longestWord = currentWord;
//     }
//   }
//   return longestWord;
// }

// const wordList = ['easy', 'frontend'];

// console.log(findLongWordI(wordList));

//sd forEach

// function findLongestWordFE(wordList) {
//   if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

//   let longestWord = wordList[0];
//   wordList.forEach((currentWord) => {
//     if (currentWord.length > longestWord.length) {
//       longestWord = currentWord;
//     }
//   });
//   return longestWord;
// }

// const wordList = ['easy', 'frontend'];
// console.log(findLongestWordFE(wordList));

//sd reduce de lay ra do dai cua chuoi trong array[]

function findLongestWordRD(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord
  );
}
const wordList = ['easy', 'frontend'];
console.log(findLongestWordRD(wordList));
