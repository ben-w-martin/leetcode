/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let reversedS = "";

  let sArr = s.trim().split(" ");

  let sArrNoBlanks = [];

  sArr.map((word) => word != "" && sArrNoBlanks.push(word));

  sArrNoBlanks.reverse();

  reversedS = sArrNoBlanks.join(" ");

  return reversedS;
};

console.log(reverseWords("this is      a string"));
console.log(" " === " ");
