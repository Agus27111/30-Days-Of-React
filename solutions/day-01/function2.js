// Exercises: Level 2
// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a, b, c) {
  // Calculate the discriminant
  const discriminant = b ** 2 - 4 * a * c;

  // Check if the discriminant is positive, negative, or zero
  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2]; // Two distinct real roots
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root]; // One real root (double root)
  } else {
    return []; // No real roots (complex roots)
  }
}

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}
//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
myArr = [1, 2, 3, 4];
printArray(myArr);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; //month is zero index
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}

showDateTime();
// 08/01/2020 04:08
// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  // Use a temporary variable to swap values
  const temp = x;
  x = y;
  y = temp;

  console.log(`x => ${x}, y => ${y}`);
}
swapValues(3, 4); // x => 4, y=>3
swapValues(4, 5); // x = 5, y = 4
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  let reverse = arr.reverse();
  return reverse;
}
console.log(reverseArray(myArr));
console.log(reverseArray([1, 2, 3, 4, 5]));
// //[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
// //['C', 'B', 'A']
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
  let cap = arr.map((item) => item.toUpperCase());
  return cap;
}
console.log(capitalizeArray(["x", "y", "z"]));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(array, item) {
  array.push(item);
  return array;
}
let myAry = [1, 2, 3];
console.log(addItem(myAry, 4));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(array, index) {
  array.splice(index, 1); //array.splice(startIndex, deleteCount, item1, item2, ...); item1, item2, ...: Elements to add to the array at the specified startIndex
  return array;
}
console.log(removeItem(myAry, 2));

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(num) {
  let evens = 0;
  let odds = 0;

  do {
    if (num % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
    num = Math.floor(num / 10);
  } while (num > 0);

  console.log(`The number of odds are ${odds}`);
  console.log(`The number of evens are ${evens}`);
}

evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Write a function which takes any number of arguments and return the sum of the arguments
function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sum(1, 2, 3)); // -> 6
console.log(sum(1, 2, 3, 4)); // -> 10

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}

console.log(userIdGenerator());

// 41XTDbE
