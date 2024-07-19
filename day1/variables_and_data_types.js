// task 1 : Declare a variable using `var` , assign it a number, and log its value to console

var myNumber = 99

console.log(myNumber) // logs: 99

// task 2 : Declare a variable using `let` , assign it a string, and log its value to console

let book = "The Conspiracy Club"

console.log(book) // logs: The Conspiracy Club


/* Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console. */

const isTrue = true;
console.log(isTrue);


/* Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator. */

let myNumber = 42;
let myString = "Hello";
let myBoolean = true;
let myObject = { name: "John Doe" };
let myArray = [1, 2, 3];

console.log(typeof myNumber);  // Output: "number"
console.log(typeof myString);  // Output: "string"
console.log(typeof myBoolean); // Output: "boolean"
console.log(typeof myObject);  // Output: "object"
console.log(typeof myArray);   // Output: "object"


/* Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console. */

let myVariable = 10;
console.log(myVariable); // Output: 10

myVariable = "new value";
console.log(myVariable); // Output: "new value"


/* Task 6: Try reassigning a variable declared with const and observe the error. */

const myConstant = 5;
myConstant = 10; // This will cause an error: "TypeError: Assignment to constant variable."
