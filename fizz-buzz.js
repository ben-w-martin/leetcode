/* Print integers one-to-N, but print "Fizz" if an integer is divisible by three, "Buzz" if an integer is divisible by five, and "FizzBuzz" if an integer is divisible by both three and five. */

const fizzBuzz2 = (num) => {
  for (let i = 1; i <= num; i++) {
    let string = i + "";

    if (i % 3 == 0 && i % 5 == 0) string += " FizzBuzz";
    else if (i % 3 == 0 && i % 5 != 0) string += " Fizz";
    else if (i % 3 != 0 && i % 5 == 0) string += " Buzz";

    console.log(string);
  }
};

console.log(fizzBuzz2(100));
