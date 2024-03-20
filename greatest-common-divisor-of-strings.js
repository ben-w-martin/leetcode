console.log(
  "greatest common divisor of strings ************************************************************"
);

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  let gcd = "";
  let pattern = "";
  let longer = str1.length > str2.length ? str1 : str2;
  let shorter = str1.length < str2.length ? str1 : str2;

  const longerL = longer.length;
  const shorterL = shorter.length;

  let patternL = 0;

  // PATTERN FINDER *****
  for (let i = 0; i < longerL; i++) {
    if (longer[i] === shorter[i]) pattern += shorter[i];

    let patternBuild = "";
    patternL = pattern.length;
    const quotient = longerL / patternL;

    let p = 0;
    while (p < quotient) {
      patternBuild += pattern;
      p++;
    }

    if (patternBuild === longer) {
      console.log(
        "BREAK: Pattern build is equal to longer string. Pattern:::",
        pattern
      );
      break;
    } else if (patternL >= shorterL) {
      pattern = "";
      break;
    }
  }
  //END PATTERN FINDER *****

  if (pattern) {
    gcd = pattern;
    console.log(
      shorterL % (gcd.length + patternL) != 0 &&
        longerL % (gcd.length + patternL) != 0
    );
    while (
      shorterL % (gcd.length + patternL) != 0 &&
      longerL % (gcd.length + patternL) != 0
    ) {
      gcd += pattern;
      console.log(gcd);

      //   break;
    }
  }

  return gcd;
};

console.log("RETURN: ", gcdOfStrings("ABABABAB", "ABAB"));
