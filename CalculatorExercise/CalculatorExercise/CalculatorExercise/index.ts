const prompts = require("prompt-sync")({ sigint: true });

/*
Run this command to start calculator:

~> npm test

Output should look like this:

Calculator
==========

Enter number: 5

Answer: 5 // Optional: If no operation is done then don't show this line

Enter operation: add

Enter number: 3

Answer: 8

Enter operation: minus

Enter number: 2

Answer: 6

Enter operation: clear

Answer: 0

Enter operation: exit

HINTS
=====

* Use a form of indefinite loop
* Use Number(<answer>) to convert to a Number

Example of using the ask function:

    const answer = ask("Enter number:");

    console.log("User entered: " + answer);

*/

// WORK HERE

let myNumber: number = 0;
let answer: number = 0;

let userOperation: string = "empty string :p ";
// start();
ask("ayo?");
function start() {
  myNumber = 0;
  answer = 0;
  myNumber = prompts("Enter a number: ");
  userOperations();
  askOperation(userOperation);
}

askOperation(userOperation);
function askOperation(letter: string) {
  switch (userOperation) {
    case "a": {
      addition();
      break;
    }
    case "s": {
      subtraction();
      break;
    }
    case "m": {
      multiplication();
      break;
    }
    case "d": {
      division();
      break;
    }
    case "c": {
      clearCalculator();
    }
    default:
      console.log(
        'You did not enter either "a", "s", "m", "d", "c" for resetting!'
      );
  }
}

function addition() {
  while (userOperation == "a") {
    console.log("You are about to perform addition of two numbers!");
    const number2 = prompts(
      `What is the number you would like to add to ${myNumber}?: `
    );
    answer = +myNumber + +number2;
    console.log(`${myNumber} + ${number2} = ${answer}`);
    myNumber = answer;
    userOperations();

    askOperation(userOperation);
  }
}
function subtraction() {
  while (userOperation == "s") {
    console.log("You are about to perform subtraction a number numbers!");
    const number2 = prompts(
      `What is the number you would like to subtract from ${myNumber}?: `
    );
    answer = +myNumber - +number2;
    console.log(`${myNumber} - ${number2} = ${answer}`);
    myNumber = answer;
    userOperations();

    askOperation(userOperation);
  }
}
function multiplication() {
  while (userOperation == "m") {
    console.log("You are about to perform multiplication of two numbers!");
    const number2 = prompts(
      `What is the number you would like to multiply ${myNumber} by?: `
    );
    answer = +myNumber * +number2;
    console.log(`${myNumber} x ${number2} = ${answer}`);
    myNumber = answer;
    userOperations();

    askOperation(userOperation);
  }
}
function division() {
  while (userOperation == "d") {
    console.log("You are about to perform division on a number!");
    const number2 = prompts(
      `What is the number you would like to divide ${myNumber} by?: `
    );
    answer = +myNumber / +number2;
    console.log(`${myNumber} / ${number2} = ${answer}`);
    myNumber = answer;
    userOperations();
    askOperation(userOperation);
  }
}

function clearCalculator() {
  start();
}

function userOperations() {
  userOperation = prompts(
    `What mathematical operation would you like to perform on the number ${answer} ?Type "a" for addition, "s" for subtraction, "m" for multiplication, "d" for division, "c" to reset the calculator! Your answer: `
  );
}

function exit() {}

// DO NOT EDIT BELOW!
function ask(question: string): string | null {
  const userInput = prompts(question + " ");
  return userInput;
}
