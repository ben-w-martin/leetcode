/*
 * >>> What is a Data Structure?
 *       A way to store data
 *       Blockchain in bit coin is a data structure
 *       Arrays / Objects are data structures
 *       Data structures involve payoffs, some are better in different cases
 *
 *
 * >>> Two Questions
 *       How to Build data structures?
 *       How to use data structues?
 *
 *
 * >>> Variables are stored in RAM, use up computer memory.
 * "Storage" is persistant
 * "Memory" is removed / added to constantly. Lost upon restart.
 *
 * Storage is slow, Memory is fast
 *
 * RAM is a storage area with "Shelves" that store information
 * "Addresses" reference these shelves.
 *   An Address holds a Byte in an 8 bit system
 *
 *   CPU is connected to memory controller
 *   This Reads/Writes to memory
 *   RAM can access any shelf instantly or "randomly" as it
 *       has direct pathways to each shelf.
 *       There is no travel or iteration to access addresses
 *       However, shelves closer together to each other can be accessed more quickly in a call than those who are further apart.
 *
 *   CPU has a "cache" of extremely recent actions. In CPU memory
 *
 *
 *   var a = 1 would take up 32 bits, 4 shelves of memory
 *   var b = 7 would take up the next shelf, now
 */

console.log(Math.pow(6, 1000));

/*
 * ========================
 *
 * Each data type is worth a different amount of memory
 *
 * Data Structures allow us to think through
 *
 * ==DATA STRUCTURES=======
 *
 *   Arrays
 *   Stacks
 *   Queues
 *   Linked List
 *   Trees
 *   Tries
 *   Graphs
 *   Hash tables
 *
 *
 * Each language has it's own data types.
 * Each language has Data Structures to organize it's data types
 *
 * ==========================
 * What actions can you perform on data structures?
 *  Insertion
 *  Deletion
 *  Traversal
 *  Searching
 *  Sorting
 *  Access
 *
 *
 * We should be able to examine a needed operation and select a data structure to use to achieve a certain purpose.
 *
 *  ============================
 *  ARRAYS
 *
 *      lookup - O(1) // array[n]
 *      Push - O(1) // array.push(n)
 *      insert - O(n)
 *      delete O(n)
 *
 *  The best choice if iteration is necessary.
 */

const strings = ["a", "b", "c", "d"];
// 4 items.
// 32 bit system
// 4 * 4 bytes of storage

strings[2]; // this will grab straight from memory using addresses w/o iteration. O(1)

strings.push("e"); // adds to the end. O(1)

strings.pop(); // 'pops' item off end of array. O(1)

strings.unshift("x"); // adds item to beginning of an array. O(n)
// shifts every item to a new index by iterating
// Arrays may not be the best when you need to add items to the beginning

strings.splice(2, 1, "alien"); // O(n)

console.log(strings);

// if you add to the beginning or the body, O(n)
// if you push to the end, O(1)

/* =========================================
 *  How to build / How to use
 *
 * Arrays in JS are Objects with int based keys
 */

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new myArray();
newArray.push("hi");
newArray.push("hello");
newArray.push("you");
newArray.push("are");
newArray.push("nice");
newArray.push("!");
// newArray.pop();
newArray.delete(2);
console.log(newArray);

// as soon as you start deleting/shifting, you have to
// loop and therefor that method becomes O(n)

// TREAT STRING QUESTIONS AS ARRAY QUESTIONS

// Create a function that reverses a string:

function reverse(s) {
  if (!s || typeof s !== "string" || s.length < 2) return "try again";

  const backwards = [];
  const totalItems = s.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(s[i]);
  }

  return backwards.join("");
}

console.log(reverse("hello"));

function reverseBetter(s) {
  if (!s || typeof s !== "string" || s.length < 2) return "try again";

  //   return s.split("").reverse().join("");
}

console.log(reverseBetter("Mamamia"));

const reverseGooder = (s) => [...s].reverse().join("");

console.log(reverseGooder("this is a string"));

// ARRAY INTERVIEW QUESTION

// Merge two sorted arrays as a larger sorted array

console.log("*******************************************");

const mergeSortedArrays = (arr1, arr2) => {
  if (arr1.length < 1 && arr2.length > 0) return arr2;
  if (arr2.length < 1 && arr1.length > 0) return arr1;

  arr1 = arr1.concat(arr2);

  console.log("arr2", arr2);
  return arr1.sort((a, b) => a - b);
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

const mergeSortedArrays2 = (arr1, arr2) => {};
