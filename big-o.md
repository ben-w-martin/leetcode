Rules for Big O

    1. Worst Case
    2. Remove Constants
    3. Different terms for inputs
    4. Drop non-dominants.

WORST CASE - treat the function as if the the worst case scenario will happen. - If there is a 'break' statement, you will still treat it as if the target is the last elem in an array.

REMOVE CONSTANTS - No matter how great the number of constants are, if they are constant, they represent '1', and if there is already O(n) present, it becomes O(n)

DIFFERENT TERMS FOR INPUTS - What if there are multiple inputs? One array of a greater length than another? More variables are used to represent different entities.

    ex. O(a + b) where a is one arg and b is another.
    if different terms && nested >>>  O(a x b)

> > > NESTED LOOPS - O(n) x O(n) = O(n^2)

DROP NON-DOMINANTS - Drop non-dominant term. If there are multiple iterators, but one contains nested / multiple inputs and another is simpler or only represents O(n), you drop the simpler from the final Big O calculation.

    ex. O(n + n^2) >>> O(n^2)
    O(3n + 500 + n/2 + n^2) >>> O(n^2)

====================================================================

> > > Big O is a necessary concept for learning scalable algorithms.

> > > How do I use this practically ?

    -Methods of Arrays are costly because they iterate.

    >>> bigocheatsheet.com

    Data Structures are ways to store data

    Algorithms are ways to use Data

    Programs are Data Structures + Algorithms.

    Big O is used in Development to make decisions in formulating
        data structures and algorithms.

    Big O helps determine what is a good algorithm vs. a bad algorithm.

> > > What is O(n!) > Factorial time. "O no"

    NEVER is this used in real life
    Nested loop for every input.

> > > Good Code = Readable + Scalable

    Readable => Naming Conventions, best practices.
    Scalable => Speed, Memory

    >>> Three Pillars of Code

    1. Readability
    2. Speed, "Time Complexity"
    3. Memory Usage, "Space Complexity"

> > > Heap / Stack

    Heap - where we store variables

    Stack - where we keep track of function calls

    "Stack Overflow"

> > > What causes space complexity

    Variables
    Data Structures
    Function Calls
    Allocations

> > > Big O Saves money for companies by making code efficient.

        This is why it is a popular interview question.

        Measures worst case scenario for code efficiency.

> > > Optimizing for Time / Space can damage readability
