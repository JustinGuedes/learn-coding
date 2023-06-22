/*
    ARRAY EXERCISE
*/
/*
    QUESTION 1: Prime Numbers
    Find all prime numbers in an array of numbers.
*/
function findPrimeNumbers(numbers) {
    var myNumber = 0;
    var result = []; // Replace this with the answer
    for (var index = 0; index < numbers.length; index++) {
        if (numbers[index] / numbers[index] == 1) {
            myNumber = numbers[index] % numbers[index];
            if (myNumber / 1 == 1) {
                result.push(numbers[index]);
            }
        }
    }
    return result;
}
check("Question 1 - Prime Numbers", [1, 3, 5, 7, 11, 13], findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
/*
      QUESTION 2: Mapping
      Convert the array of strings to numbers and double each value.
  */
function convertAndDouble(strings) {
    var result = [];
    return result;
}
check("Question 2 - Mapping", [4, 8, 12, 16, 20], convertAndDouble(["2", "4", "6", "8", "10"]));
/*
      QUESTION 3: Find Max
      Find the max value from an array of numbers.
  */
function findMax(numbers) {
    var result = 0;
    return result;
}
check("Question 3 - Find Max", -5, findMax([-18, -99, -42, -5, -33, -7.45]));
/*
      QUESTION 4: Count Repeating
      Count the repeating 'element' in an array of strings.
  */
function findRepeating(strings, element) {
    var result = 0;
    return result;
}
check("Question 4 - Count Repeating", 2, findRepeating("find the repeating element in the array of strings".split(" "), "the"));
/*
      QUESTION 5: Average Numbers
      Find the average of a list of numbers.
  */
function average(numbers) {
    var result = 0;
    return result;
}
check("Question 5 - Average Numbers", 30.68, average([5, 9, 69, 4.6, 35, 61.48]));
/*
      DO NOT TOUCH BELOW
  */
function check(question, expected, answer) {
    var isCorrect = answer == expected;
    console.log("".concat(question, ": ").concat(isCorrect ? "CORRECT" : "INCORRECT"));
}
