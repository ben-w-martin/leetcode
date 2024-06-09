// Given 2 arrays, create a function that let's a user know whether these two arrays contain any common items

/* 1. When the interviewer says the question, write down the key * *points at the top (i.e. sorted
 * array). Make sure you have all the details. Show how organized you *are
 */

// 2. What are the inputs / outputs

// 3. What is the main goal of the function? time, space...?

// 4. Don't ask too many questions. Ask enough, but make sure to keep the process moving forward.

// 5. Start BRUTE FORCE APPROACH

const items = [1, 3, 5, 7, 3, 98, 54, 23, 6, 7, 6, 45, 7];
const items2 = [7, 16, 83, 23, 4, 53];

function hasCommonItemsBruteForce(arr) {
  let isSame = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) isSame = true;
    }
  }
  return isSame;
}

// O(n^2)

// 6. Why is this approach not the best?
// how would you refactor

const anArr = [1, 2, 3];
const anArr2 = [4, 5, 6];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}

console.log(containsCommonItem(anArr, anArr2));

// Can O(a * b) be sped up?

// 7. Walk through your approach, comment things and see where you may be able to break things.
// Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information
// the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on
// that. Sometimes this occurs with repeated work as well

// time complexity solution
// Convert array to an object

function containsCommonItem2(arr1, arr2) {
  //loop through first arr, create obj where properties === items in array with value of true
  // loop through arr2 and check if item exists on obj
  // O(a + b) instead of O(a * b)
  if (
    typeof arr1 === "object" &&
    typeof arr2 === "object" &&
    arr1.length > 0 &&
    arr2.length > 0
  ) {
    const arrToObj = {};

    arr1.forEach((item) => {
      if (!arrToObj[item]) arrToObj[item] = true;
    });

    for (let i = 0; i < arr2.length; i++) {
      if (arrToObj[arr2[i]]) return true;
    }
  }
  return false;
} // O(a + b) This is superior in terms of time complexity

console.log(containsCommonItem2(items, items2));

// 11. Think about error checks and how your code can be broken

// 12. Use variables that are descriptive, simple

// 13. Test for nulls, undefined, massive arrayx, async code. Ask what assumptions we can make about the code / inputs.

const containsCommonItem3 = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};

// uses built-in methods to solve problems.

console.log("v3", containsCommonItem3(items, items2));

// Be able to explain how your code compares in time complexity vs space complexity. Be able to create a different example to show

// Long, complex code and functions cost money. Write CLEAN MODULAR code, that is...
/*** Split functions into SINGLE PURPOSES ***/

// Think like an ENGINEER - Be thinking about Modularization and talk through how you would further refactor / modularize.

// PRACTICE going from naive solutions to an efficient time complex or space complex version of a function, then modularize to make it readable and maintainable.

// Like just query instead of search query.
