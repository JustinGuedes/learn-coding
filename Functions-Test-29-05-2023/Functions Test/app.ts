/////////////////////////////////
///  TEST 1
///////////

function add(num1: number, num2: number): number {
  const answer: number = num1 + num2;
  return answer;
}

// Test: Create a function called 'add' that accepts two numbers and returns the addition of the two numbers.
function test1() {
  const answer = add(2, 4);

  if (answer != 6) throw Error("Failed test 1");
  console.log(`Answer in test 1 is = ${answer}`);
}

test1();

//////////////////////////////////
//  TEST 2
/////////

function calculate(
  num1: number,
  num2: number,
  callback: (num1: number, num2: number) => number
) {
  const answer = callback(num1, num2);
  return answer;
}

// Test: Create a function called 'calculate' that accepts two numbers and another function and returns the result of the function

function test2() {
  const first = calculate(2, 4, add);
  const answer = calculate(first, 2, minus);

  if (answer != 4) throw Error("Failed test 2");
  console.log(`Answer in test 2 is = ${answer}`);
}

test2();

//////////////////////////////////
///  TEST 3
///////////

//my way
function power(num1: number, num2: number) {
  let answer = 1;
  for (let i = 0; i < num2; i++) {
    answer = answer * num1;
  }
  return answer;
}

//another way:

function power2(num: number, exponent: number): number {
  let answer = num;
  let counter = 0;
  while (counter < exponent) {
    answer *= num;
    counter++;
  }
  return answer;
}

// LeJustin way (recursion)

function power3(num: number, exponent: number): number {
  if ((exponent = 0)) {
    return 1;
  }
  return num * power3(num, exponent - 1);
}

// Test: Create a function called 'power' that accepts two numbers and powers the first number by the second. DO NOT USE THE BUILT IN POW FUNCTION.
function test3() {
  const answer = power(5, 3);
  if (answer != 125) throw Error("Failed test 3");
  console.log(`Answer in test 3 is = ${answer}`);
}

test3();

///////////////////////////////////////
///   DO NOT SCROLL BEYOND HERE
///////////////////////////////

function minus(x: number, y: number): number {
  return x - y;
}
