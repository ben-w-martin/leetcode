/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let mergedArr = [];

  const longer = word1.length > word2.length ? word1 : word2;

  [...longer].map((w, i, arr) => {
    if (word1[i]) mergedArr.push(word1[i]);

    if (word2[i]) mergedArr.push(word2[i]);
  });

  return mergedArr.join("");
};

console.log(mergeAlternately("turkey", "bean"));
