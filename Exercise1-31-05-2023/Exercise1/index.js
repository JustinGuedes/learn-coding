var prompts = require("prompt-sync")({ sigint: true });
var questions = require("./questions.json");
var numberOfQuestions = questions.length;
console.log("Questionaire Survey");
console.log("===================\n");
// Iterate through the questions and ask the questions and compare it to the answers
// Keep track of the correct answers and print out if you passed or failed
// TIP: Use the ask function below to prompt the user with a question
// e.g.: const answer = ask("What is the answer");
// ====================
// START HERE
// ==========
// DO NOT EDIT BELOW!
var question = questions[0]; //access the first question
var theQuestion = questions[0].question; //the actual question
var score = 0;
function ask(question) {
    var userInput = prompts(question + " ");
    return userInput;
}
// loop through the questions
for (var questionNumber = 0; questionNumber < questions.length; questionNumber++) {
    var userAnswer = ask(questions[questionNumber].question);
    if (userAnswer == questions[questionNumber].answer) {
        score = score + 1;
    }
}
// After the test:
if ((score / questions.length / 1.0) * 100 > 80) {
    console.log("Congratulations my brazza! You passed with a score of ".concat((score / questions.length) * 100, "%"));
}
else {
    console.log("I am sorry my brazza! Your score of ".concat((score / questions.length / 1.0) * 100, "% does not meet the minimum requirements :("));
}
console.log();
