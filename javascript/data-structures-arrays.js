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

// splice = O(n)

// Inserting / deleting are slow procedures in arrays

/*
 *
 * STATIC VS DYNAMIC ARRAYS
 *
 *   Static arrays have fixed lengths
 *      Can hold fixed # items
 *
 *   Dynamic arrays can be copied and built in a new location
 *   >>> C++
 *      int a[20] // array of 20 items
 *      int b[5] // array of 5 tiems
 *
 *      To add a 6th item, the array must be copied and added into
 *      the new array
 *
 *      Javascript automatically allocates memory when an
 *      array is added to.
 *
 *      C++ does not allocate memory automatically, requires
 *      the developer to specify memory.
 *
 *      "lower level vs higher level"
 *      -   Lower level are closer to the real functioning of
 *          the computer
 *      -   Higher level is further from machine code, computer
 *          true functionality
 *
 *      -   Copying an array doubles the required space.
 *      -   Making an addition to an array copies the array in memory
 *
 */

/*
 *
 *  CONTEXT & INSTANTIATION
 *
 *  If you want to make a copy of an object, make it a class
 *
 *
 *
 */

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log("Hi, I am " + this.name + " " + this.type + ".");
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log("I'm a " + this.type + " type.");
  }
}

const wiz1 = new Wizard("gandalf", "healer");

wiz1.play();

const wiz2 = new Wizard("Terran", "botanist");

wiz2.play();

// Super grants access to the constructor in the original
// class to bind "this" to a new instance of a class

// reference type, context, scope, instantiation
