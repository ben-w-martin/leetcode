var compress = function (chars) {
  const length = chars.length;
  let count = 1;
  let s = "";

  for (let i = 0; i < length; i++) {
    if (chars[i] == chars[i + 1]) {
      ++count;
    } else {
      if (count == 1 && chars[i] != chars[i + 1]) continue;
      s = chars[i] + count;
      chars.splice(i - (count - 1), count, ...s.split(""));
      i = i - (count - s.length);
      count = 1;
    }
  }

  return chars.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
