const reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const sToArr = [...s];
  const indexes = [];
  const includedVowels = [];

  sToArr.map((char, i, arr) => {
    if (vowels.includes(char)) {
      indexes.push(i);
      includedVowels.push(char);
    }
  });

  includedVowels.reverse();

  indexes.map((idx, i, arr) => {
    sToArr[indexes[i]] = includedVowels[i];
  });

  return sToArr.join("");
};

console.log(reverseVowels("leetcode"));
