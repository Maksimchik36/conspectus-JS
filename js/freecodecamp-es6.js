// 1. Compare Scopes of the var and let Keywords
// If you are unfamiliar with let, check out this challenge about the difference between let and var.
// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
// The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

// For example:

// var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// console.log(i);
// Here the console will display the values [0, 1, 2] and 3.

// With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:

// var numArray = [];
// var i;
// for (i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// console.log(i);
// Here the console will display the values [0, 1, 2] and 3.

// This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.

// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// Here the console will display the value 3.

// As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior:

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// console.log(i);

// Here the console will display the value 2, and an error that i is not defined.
// i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.
// Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.
// This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.

// task
// function checkScope() {
//   var i = 'function scope';
//   if (true) {
//     i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// }


// solution
// function checkScope() {
//   let i = 'function scope';
//   if (!true) {
//      i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// }


// var should not exist in code.
// The variable i declared in the if statement should equal the string block scope.
// checkScope() // should return the string function scope





// 2. Mutate an Array Declared with const
// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

// const s = [5, 7, 2];
// function editInPlace() {
//   // Using s = [2, 5, 7] would be invalid
//     s.pop();
//     s.unshift(2);
//     console.log("s =", s);
//     return s;
// }

// editInPlace(); // s = [2, 5, 7]

// You should not replace const keyword.
// s should be a constant variable (by using const).
// You should not change the original array declaration.
// s should be equal to [2, 5, 7].





// 3. Prevent Object Mutation
// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
//   // Only change code below this line
//     Object.freeze(MATH_CONSTANTS);

//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch(ex) {
//     console.log(ex);
//     }
//     console.log(MATH_CONSTANTS.PI);
//   return MATH_CONSTANTS.PI;
// }

// console.log("freezeObj()", freezeObj());


// freezeObj();
// You should not replace the const keyword.
// MATH_CONSTANTS should be a constant variable (by using const).
// You should not change the original declaration of MATH_CONSTANTS.
// PI should equal 3.14.




// 4. Use Arrow Functions to Write Concise Anonymous Functions
// Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

// task
// var magic = function() {
//   return new Date();
// };

// solution
// const magic = () => new Date();
// magic();

// You should replace the var keyword.
// magic should be a constant variable (by using const).
// magic should be a function.
// magic() should return the correct date.
// The function keyword should not be used.




// 5. Write Arrow Functions with Parameters
// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

// task
// var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };

// console.log(myConcat([1, 2], [3, 4, 5]));

// solution
// const myConcat = (arr1, arr2) => arr1.concat(arr2);



// You should replace the var keyword.
// myConcat should be a constant variable (by using const).
// myConcat should be an arrow function with two parameters
// console.log(myConcat([1, 2], [3, 4, 5])) // should return [1, 2, 3, 4, 5].
// The function keyword should not be used.






// 6. Set Default Parameters for Your Functions
// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.


// task
// Only change code below this line
// const increment = (number, value) => number + value;
// Only change code above this line


//solution
// const increment = (number, value = 1) => number + value;


// console.log(increment(5, 2)); // should be 7.
// console.log(increment(5)); // should be 6.
// A default parameter value of 1 should be used for value.





// 7. Use the Rest Parameter with Function Parameters
// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
// task
// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

// solution
// const sum = (...args) => {
//   const arr = [...args];
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += args[i];
//     }
//     console.log(total);
//   return total;
// }

// sum(0,1,2) // should be 3
// sum(1,2,3,4) // should be 10
// sum(5) // should be 5
// sum() // should be 0
// sum should be an arrow function which uses the rest parameter syntax (...) on the args parameter.





// 8. Use the Spread Operator to Evaluate Arrays In-Place
// Copy all contents of arr1 into another array arr2 using the spread operator.

// // task
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [];

// console.log(arr2);

// // solution
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];  // Change this line

// console.log(arr2);

// arr2 should be correct copy of arr1.
// ... spread operator should be used to duplicate arr1.
// arr2 should remain unchanged when arr1 is changed.





// 9. Use Destructuring Assignment to Extract Values from Objects
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

// // task
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// // Only change code below this line
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
// // Only change code above this line

// // solution
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// const {today, tomorrow} = HIGH_TEMPERATURES;
// console.log("today", today);
// console.log("tomorrow", tomorrow);

// You should remove the ES5 assignment syntax.
// You should use destructuring to create the today variable.
// You should use destructuring to create the tomorrow variable.
// today should be equal to 77 and tomorrow should be equal to 80.




// 10. Use Destructuring Assignment to Assign Variables from Objects
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

// // task
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// // Only change code below this line
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;
// // Only change code above this line

// solution
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// console.log("highToday", highToday);
// console.log("highTomorrow", highTomorrow);

// You should remove the ES5 assignment syntax.
// You should use destructuring to create the highToday variable.
// You should use destructuring to create the highTomorrow variable.
// highToday should be equal to 77 and highTomorrow should be equal to 80.




// 11. Use Destructuring Assignment to Assign Variables from Nested Objects
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

// task
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };
// // Only change code below this line
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
// // Only change code above this line

// solution
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };
// const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
// console.log("lowToday", lowToday);
// console.log("highToday", highToday);

// You should remove the ES5 assignment syntax.
// You should use destructuring to create the lowToday variable.
// You should use destructuring to create the highToday variable.
// lowToday should be equal to 64 and highToday should be equal to 77.