var isSubsequence = function (s, t) {
  let result = false;
  let count = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] == s[count]) count++;
  }

  if (s.length == count) result = true;

  return result;
};

isSubsequence("axc", "ahbgdc");
