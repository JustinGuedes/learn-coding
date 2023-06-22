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
ask("ayo");

// DO NOT EDIT BELOW!
function ask(question: string): string | null {
  const userInput = prompts(question + " ");
  return userInput;
}
