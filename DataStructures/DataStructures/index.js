// DATA STRUCTURES
// ARRAY
// =====
// Collection of a specific type
var array = [1, 2, 3, 4];
// Array indexes start at zero
console.log(array[0]); // 1
// Accessing a value of the array we use [] at the end of the variable name
var value = array[2];
// Whenever you reference an index that is out of bounds
// the program will crash with an exception: Array index out of bounds
console.log(array[4]); // undefined, but in other languages this would crash
// Some convenience methods for arrays
console.log("Check if value is inside array, array.includes(3)", array.includes(3));
console.log("Join two arrays together, array.concat([5, 6, 7])", array.concat([5, 6, 7]));
// Conventional way of doing a for loop
for (var index = 0; index < array.length; index++) {
    console.log("Index", index, "of array is", array[index]);
}
// For Each Loop
for (var element in array) {
    console.log("Array element is", element);
}
// High order functions with arrays
// Basically a function that takes in another function as a parameter
function operation(something) {
    // Example of high order function
}
function add(x, y) {
    return x + y;
}
operation(add);
operation(function (x, y) { return x - y; });
operation(function (x, y) {
    console.log("Multi line lambda");
    return x - y;
});
// High order functions of Arrays
// Map: Takes the type of an array and transforms/converts it to another type
// transformer: (number) => another type
var stringsArray = array.map(function (element) { return element.toString(); });
// function map(array: number[], transformer: (x: number) => string): string[] {
//     let result: string[] = []
//     for (let element in array) {
//         result.push(transformer(element))
//     }
//     return result
// }
// Filter: Takes in a predicate function to filter out elements that don't satisfy the predicate
// predicate: (number) => bool
var isEven = array.filter(function (element) { return element % 2 == 0; });
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
array.forEach(function (element) { return console.log(element); });
// function forEach(array: number[], func: (x: number) => void) {
//     for (let element in array) {
//         func(element)
//     }
// }
console.log("Demonstrate High Order Functions on Arrays");
var t = array
    .map(function (element) { return element * 2; })
    .filter(function (element) { return element % 4 == 0; })
    .map(function (element) { return element.toString(); })
    .forEach(function (element) { return console.log(element); });
// Name: doSomething
// Parameters: input - string
// Return Type: number
function doSomething(strings) {
    var result = [];
    return result;
}
