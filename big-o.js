// const nemo = ["nemo"];
// const everyone = [
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "nemo",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
//   "bobby",
// ];

// const large = new Array(100).fill("nemo");

// function findNemo(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "nemo") console.log("found NEMO!");
//   }
// }

// findNemo(large); // O(n)

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]); // O(1)
//   console.log(boxes[1]); // O(1)
// } // O(2)

// logFirstTwoBoxes(boxes);

// const logPairsOfBoxes = (boxes) => {
//   for (let i = 0; i < boxes.length; i++) {
//     if (boxes[i + 1]) console.log(boxes[i], boxes[i + 1]);
//   }
// };

// logPairsOfBoxes(boxes);

// function boo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log("boooo");
//   }
// }

// boo([1, 2, 3, 4, 5]); // What is the space complexity?

// Space complexity is concerned with Additional Space

// Space complexity = O(1)
// One variable is created w/in the function

// function arrayOfHiNtimes(n) {
//   let hiArray = [];

//   for (let i = 0; i < n; i++) {
//     hiArray[1] = "hi";
//   }
//   return hiArray;
// }

// console.log(arrayOfHiNtimes(9)); // O(n)

// Space Complexity depends upon input length

// Find first & last tweet for a given user

// const array = [
//   { tweet: "tweet", date: 2004 },
//   { tweet: "chirp", date: 2019 },
//   { tweet: "warble", date: 2014 },
// ]; // O(n^2)

// console.log(array[0]); // O(1)
// console.log(array[array.length - 1]); // O(1)

"adlkjas;ldkf".length; // This is a property of a string
// O(1)

// JAVASCRIPT LOOPS

// function findNemoAgain(arr) {
//   arr.forEach((fish) => {
//     if (fish == "nemo") console.log("HEY NEMO");
//   });
// }

// findNemoAgain(everyone);

// function findNemoAgainAgain(arr) {
//   for (let fish of arr) {
//     if (fish == "nemo") console.log("HEY NEMO");
//   }
// }

// findNemoAgainAgain(everyone);
