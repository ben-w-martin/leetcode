console.log(
  "greatest common divisor of strings ************************************************************"
);

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  let gcd;

  const str1Length = str1.length;
  const str2Length = str2.length;

  if (str1 + str2 == str2 + str1) {
    var getCommonDivisor = (reducer, divisor) => {
      if (!divisor) {
        return reducer;
      } else {
        return getCommonDivisor(divisor, reducer % divisor);
      }
    };

    const commonDivisor = getCommonDivisor(str1Length, str2Length);

    gcd = str1.slice(0, commonDivisor);
  } else {
    gcd = "";
  }

  return gcd;
};

console.log("RETURN: ", gcdOfStrings("ABABAB", "ABABABABABAB"));
