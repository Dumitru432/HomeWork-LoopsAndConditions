// 1) A function for conveying the shift on both axis. It takes an object and by how many units to move it for both X and Y axis.

// keys = ['height', 'width'...]
// values = [10, 23 ...]

/* const rectangle = {
    height: 10, 
    width: 23, 
    coordX: 12, 
    coordY: 7
}
rectangle.color = 'red'
rectangle.area = 12 */
// delete rectangle.height;

//iteratia 1: property = 'height'
//iteratia 2: property = 'width'

/* for (let property in rectangle){
    if (property === 'height' && property === "width") {
        rectangle[property] = rectangle[property] + 5; 
    } if (property === 'coordX' && property === "coordY") {
        rectangle[property] = rectangle[property] - 1 ; 
    }
}
    */

/*const myObjectKeys = Object.keys(rectangle);
for (let i = 0; i < myObjectKeys.length; i++) {
    console.log(i + 1, myObjectKeys[i]);
}*/

/* console.log(rectangle)  */

// 1. Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

/* let inputNumber = prompt("enter your number");
let result = 0;
for (let i = 0; i <= inputNumber; i++) {
  result = result + i;
}
console.log(`the summation from 1 to ${inputNumber} is: ${result}`); */

// 2. Request two numbers and find only their largest common divisor.

/* let inputNumber1 = prompt("enter first number:");
let inputNumber2 = prompt("enter your second number: ");
let commonDivisor = 1;

for (let i = 1; i <= inputNumber1 && i <= inputNumber2; i++) {
  if (inputNumber1 % i === 0 && inputNumber2 % i === 0) {
    commonDivisor = i;
  }
}
console.log(
  `the largest common divisor of ${inputNumber1} and ${inputNumber2} is : ${commonDivisor}`
); */

// 3. Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

/* let inputNumber = prompt("enter your number");
let divisors = [];

for (let i = 1; i <= inputNumber; i++) {
  if (inputNumber % i === 0) {
    divisors.push(i);
  }
}
console.log(`the divisors of: ${inputNumber} are ${divisors}`); */

// 4. Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

/* let number = prompt('enter a number')
console.log(`the number of digits in: ${number} is ${number.length}`) */

// 5. Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user.
/* 
let inputNumber = prompt("enter 10 numbers separated by comma");
let numbersArray = inputNumber.split(",").map(Number);

console.log(numbersArray);

let negativeNumber = [];
let positiveNumber = [];
let evenNumber = [];
let oddNumber = [];

for (let i = 0; i <= numbersArray.length; i++) {
  if (numbersArray[i] < 0) {
    negativeNumber.push(numbersArray[i]);
  } else if (numbersArray[i] > 0) {
    positiveNumber.push(numbersArray[i]);
  } /* else if (numbersArray[i] % 2 === 0) {
    evenNumber.push(numbersArray[i]);
  } else if (numbersArray[i] % 2 === 1) {
    oddNumber.push(numbersArray[i]);
  } */
/* }
for (let i = 0; i <= numbersArray.length; i++) {
  if (numbersArray[i] % 2 === 0) {
    evenNumber.push(numbersArray[i]);
  } else if (numbersArray[i] % 2 === 1) {
    oddNumber.push(numbersArray[i]);
  }
}
console.log(
  `aici sunt numerele negative:  ${negativeNumber} iar aici cele pozitive ${positiveNumber} aici trebuie sa fie numerele pare: ${evenNumber} iar aici trebuie sa fie numerele impare ${oddNumber}`
); */

// 6. Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more. The loop continues until the user refuses.
/* let continueLoop = true;
while (continueLoop) {
  let inputNumber1 = +prompt("enter first number");
  let inputNumber2 = +prompt("enter second number");
  let inputSign = prompt("enter a sign");

  let result;

  switch (inputSign) {
    case "+":
      result = inputNumber1 + inputNumber2;
      break;
    case "-":
      result = inputNumber1 - inputNumber2;
      break;
    case "/":
      result = inputNumber1 / inputNumber2;
      break;
    case "*":
      result = inputNumber1 * inputNumber2;
      break;
    default:
      console.log("invalid operator");
      continue;
  }
  console.log(result);
  const choice = prompt(
    "do you want to perform another calculation? yes or no?"
  );

  if (choice === "yes") {
    continueLoop = true;
  } else {
    continueLoop = false;
  }
}
console.log("calculator program ended");
 */

// 7. Request a number from a user and ask by how many digits to move it. Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).

/* const inputNumber = prompt('enter your number'); 
const digitsToMove = prompt('enter the number of digits to move')

//convert the number to string 

const numberToString = inputNumber.toString()

const lengthOfInputNumber = numberToString.length

const startPosition = digitsToMove % lengthOfInputNumber; 

const movedNumber = numberToString.slice(startPosition) + numberToString.slice(0, startPosition)

console.log(`result: ${movedNumber}`) */

// 8. Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.

let day = prompt("enter the day");
let showNext = confirm("would you like to see the next day?");

while (showNext) {
  let nextDay = "";

  switch (day.toLocaleLowerCase()) {
    case "monday":
      nextDay = "tuesday";
      break;
    case "tuesday":
      nextDay = "wednseday";
      break;
    case "wednseday":
      nextDay = "thursday";
    case "thursday":
      nextDay = "friday";
      break;
    case "friday":
      nextDay = "saturday";
      break;
    case "saturday":
      nextDay = "sunday";
      break;
    case "sunday":
      nextDay = "monday";
      break;
    default:
      nextDay = "invalid input";
      break;
  }
  alert("the neext day is " + nextDay);
  showNext = confirm("would you like to see the next day?");
  if (showNext) {
    day = nextDay;
  }
}

// 9 Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10.

for (var i = 2; i <= 9; i++) {
  console.log("multiplication table " + i + ":");
  for (var j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
  console.log("\n");
}

// 10 “Guess the number” game.
//Suggest a user to think of a number from 0 to 100 and guess it in the following way:
//every loop iteration needs to divide the range of numbers in half,
// you represent the result as N and ask the user “Your number > N, < N or == N?”
//Depending on what the user said, narrow down the range. So the starting range is 0 to 100,
//divided in half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on,
// until the user chooses == N.

function guessNumber() {
  let min = 0;
  let max = 100;

  while (true) {
    // Guess the middle number
    let guess = Math.floor((max + min) / 2);

    // Ask the user for a comparison
    let response = prompt(
      "Is your number > " + guess + ", < " + guess + ", or == " + guess + "?"
    );

    if (response === ">" || response === "<" || response === "==") {
      if (response === ">") {
        min = guess + 1;
      } else if (response === "<") {
        max = guess - 1;
      } else {
        console.log("Your number is: " + guess);
        break;
      }
    } else {
      // Invalid response, ask again
      console.log("Please enter a valid response ('>', '<', or '==').");
    }
  }
}

guessNumber();

/* Create an array of 10 random numbers and write a few functions for working with it. 
1) A function takes the array and displays it on the screen. 
2) A function takes the array and only puts out even elements. 
3) A function takes the array and returns the sum of all array elements.
4) A function takes the array and returns its max element.
5) A function for adding a new element to the array via given index.
6) A function for removing an element from the array via given index */

// array ul nostru cu care lucram
const randomNumbers = [12, 345, 2, 54, 44, 34, 990, 100, 123, 5];

// 1) A function takes the array and displays it on the screen.
function showArray(arr) {
  console.log(arr);
}
//showArray(randomNumbers);

//  2) A function takes the array and only puts out even elements.

function showEvenNumbers(arr) {
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

showEvenNumbers(randomNumbers);

// aceeasi functie ca mai sus doar ca aplicam filter pentru fiecare element din array ul de mai sus randomNumbers
function showEvenNumbersWithFilter(arr) {
  function filterEvenNumbers(element) {
    return element % 2 === 0;
  }
  console.log(arr.filter(filterEvenNumbers)); // parcurge array ul meu si verifica conditia filterEvenNumbers pentru fiecare element din array ul meu randomNumbers
}
showEvenNumbersWithFilter(randomNumbers);

// 3) A function takes the array and returns the sum of all array elements.

// [12, 345, 2, 54, 44, 34, 99, 100, 123, 5]
function calculateArraySum(arr) {
  let resultSum = 0;
  for (let i = 0; i < arr.length; i++) {
    //resultSum = arr[i] + resultSum;
    resultSum += arr[i];
    // console.log(arr[i])
  }
  return resultSum;
}
console.log(calculateArraySum(randomNumbers));

// 4) A function takes the array and returns its max element.
// [12, 2, 7, 98, 39, 101]
function maxElementArray(arr) {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

maxElementArray(randomNumbers);
console.log(maxElementArray(randomNumbers));

// 5) A function for adding a new element to the array via given index.

function addingNewElementToArray(arr, index, element) {
  let newArrayPart1 = [];
  let newArrayPart2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < index) {
      newArrayPart1.push(arr[i]);
    } else {
      newArrayPart2.push(arr[i]);
    }
  }
  newArrayPart1.push(element);
  for (let i = 0; i < newArrayPart2.length; i++) {
    newArrayPart1.push(newArrayPart2[i]);
  }
  return newArrayPart1;
}
console.log(addingNewElementToArray(randomNumbers, 3, 12345));

// 6) A function for removing an element from the array via given index

function removingElementFromArray(arr, index) {
  let newArrayPart1 = [];
  let newArrayPart2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < index) {
      newArrayPart1.push(arr[i]);
    } else {
      newArrayPart2.push(arr[i]);
    }
  }
  newArrayPart1.pop();
  for (let i = 0; i < newArrayPart2.length; i++) {
    newArrayPart1.push(newArrayPart2[i]);
  }
  return newArrayPart1;
}
console.log(removingElementFromArray(randomNumbers, 9));

// 1) A function takes 2 arrays and returns a new array with all the elements of those two without repetition.

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [4, 5, 6, 7, 8];

function mergeArrays(arrayOne, arrayTwo) {}
