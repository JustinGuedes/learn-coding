// DATA STRUCTURES

// ARRAY
// =====
// Collection of a specific type

const array: number[] = [1, 2, 3, 4];

// Array indexes start at zero
console.log(array[0]); // 1

// Accessing a value of the array we use [] at the end of the variable name
let value = array[2];

// Whenever you reference an index that is out of bounds
// the program will crash with an exception: Array index out of bounds
console.log(array[4]); // undefined, but in other languages this would crash

// Some convenience methods for arrays
console.log(
  "Check if value is inside array, array.includes(3)",
  array.includes(3)
);
console.log(
  "Join two arrays together, array.concat([5, 6, 7])",
  array.concat([5, 6, 7])
);

// Conventional way of doing a for loop
for (let index = 0; index < array.length; index++) {
  console.log("Index", index, "of array is", array[index]);
}

// For Each Loop
for (let element in array) {
  console.log("Array element is", element);
}

// High order functions with arrays
// Basically a function that takes in another function as a parameter

function operation(something: (x: number, y: number) => number) {
  // Example of high order function
}

function add(x: number, y: number): number {
  return x + y;
}

operation(add);
operation((x, y) => x - y);
operation((x, y) => {
  console.log("Multi line lambda");
  return x - y;
});

// High order functions of Arrays

// Map: Takes the type of an array and transforms/converts it to another type

// transformer: (number) => another type
const stringsArray = array.map((element) => element.toString());

// function map(array: number[], transformer: (x: number) => string): string[] {
//     let result: string[] = []
//     for (let element in array) {
//         result.push(transformer(element))
//     }
//     return result
// }

// Filter: Takes in a predicate function to filter out elements that don't satisfy the predicate

// predicate: (number) => bool
const isEven = array.filter((element) => element % 2 == 0);

// function filter(array: number[], predicate: (x: number) => boolean): number[] {
//     let result: number[] = [];
//     for (let element in array) {
//         if (predicate(element)) {
//             result.push(element)
//         }
//     }

//     return result
// }

// ForEach: Iterates through elements

array.forEach((element) => console.log(element));

// function forEach(array: number[], func: (x: number) => void) {
//     for (let element in array) {
//         func(element)
//     }
// }

console.log("Demonstrate High Order Functions on Arrays");

let t = array
  .map((element) => element * 2)
  .filter((element) => element % 4 == 0)
  .map((element) => element.toString())
  .forEach((element) => console.log(element));






// Name: doSomething
// Parameters: input - string
// Return Type: number
function doSomething(strings: string[]): number[] {
  let result = [];
  return result;
}