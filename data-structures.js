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

strings.splice(2, 1, "g"); //
