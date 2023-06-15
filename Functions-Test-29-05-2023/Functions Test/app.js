/////////////////////////////////
///  TEST 1
///////////
function add(num1, num2) {
    var answer = num1 + num2;
    return answer;
}
// Test: Create a function called 'add' that accepts two numbers and returns the addition of the two numbers.
function test1() {
    var answer = add(2, 4);
    if (answer != 6)
        throw Error("Failed test 1");
    console.log("Answer in test 1 is = ".concat(answer));
}
test1();
//////////////////////////////////
//  TEST 2
/////////
function calculate(num1, num2, callback) {
    var answer = callback(num1, num2);
    return answer;
}
// Test: Create a function called 'calculate' that accepts two numbers and another function and returns the result of the function
function test2() {
    var first = calculate(2, 4, add);
    var answer = calculate(first, 2, minus);
    if (answer != 4)
        throw Error("Failed test 2");
    console.log("Answer in test 2 is = ".concat(answer));
}
test2();
//////////////////////////////////
///  TEST 3
///////////
function power(num1, num2) {
    var answer = 1;
    for (var i = 0; i < num2; i++) {
        answer = answer * num1;
    }
    return answer;
}
// Test: Create a function called 'power' that accepts two numbers and powers the first number by the second. DO NOT USE THE BUILT IN POW FUNCTION.
function test3() {
    var answer = power(5, 3);
    if (answer != 125)
        throw Error("Failed test 3");
    console.log("Answer in test 3 is = ".concat(answer));
}
test3();
///////////////////////////////////////
///   DO NOT SCROLL BEYOND HERE
///////////////////////////////
function minus(x, y) {
    return x - y;
}
