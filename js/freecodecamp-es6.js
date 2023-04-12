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





//    ???????????????????????????????????????????????????????




// 12. Use Destructuring Assignment to Assign Variables from Arrays
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

//task
// let a = 8, b = 6;
// Only change code below this line

// solution





// The value of a should be 6, after swapping.
// The value of b should be 8, after swapping.
// You should use array destructuring to swap a and b.







// 13. Destructuring via rest elements
// Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

// task
// function removeFirstTwo(list) {
//   // Only change code below this line
//   const shorterList = list; // Change this line
//   // Only change code above this line
//   return shorterList;
// }

// solution
// function removeFirstTwo(list) {
//   const [, , ...shorterList] = list;
//   console.log("shorterList", shorterList);
//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

// removeFirstTwo([1, 2, 3, 4, 5]) // should be [3, 4, 5]
// removeFirstTwo() // should not modify list
// Array.slice() // should not be used.
// Destructuring on list should be used.






// 14. Use Destructuring Assignment to Pass an Object as a Function's Parameters
// Use destructuring assignment within the argument to the function half to send only max and min inside the function.

// task
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// const half = (stats) => (stats.max + stats.min) / 2.0;
// // Only change code above this line

// solution
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// const half = ({ max, min }) => (max + min) / 2.0;
// console.log("half(stats)", half(stats));


// stats should be an object.
// half(stats) should be 28.015
// Destructuring should be used.
// Destructured parameter should be used.






// 15. Create Strings using Template Literals
// Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

// Use an iterator method (any kind of loop) to get the desired output (shown below).

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

// task
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };

// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   // Only change code above this line\
//   return failureItems;
// }
// const failuresList = makeList(result.failure);

// solution
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };

// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = arr.map(item =>`<li class="text-warning">${item}</li>`);
//   // Only change code above this line
// console.log("failureItems", failureItems)
//   return failureItems;
// }

// const failuresList = makeList(result.failure);


// failuresList should be an array containing result failure messages.
// failuresList should be equal to the specified output.
// Template strings and expression interpolation should be used.
// An iterator should be used.




// 16. Write Concise Object Literal Declarations Using Object Property Shorthand
// Use object property shorthand with object literals to create and return an object with name, age and gender properties.

// task
// const createPerson = (name, age, gender) => {
//   // Only change code below this line
//   return {
//     name: name,
//     age: age,
//     gender: gender
//   };
//   // Only change code above this line
// };

// solution
// const createPerson = (name, age, gender) => {
//     console.log("result", {
//         name, age, gender});
//   return {
//     name,
//     age,
//     gender
//   };
// };

// createPerson("Zodiac Hasbro", 56, "male") // should return {name: "Zodiac Hasbro", age: 56, gender: "male"}.
// // Your code should not use key:value.





// 17. Write Concise Declarative Functions with ES6
// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

// task
// Only change code below this line
// const bicycle = {
//   gear: 2,
//   setGear: function(newGear) {
//     this.gear = newGear;
//   }
// };
// Only change code above this line

// solution
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//       this.gear = newGear;
//       console.log("this.gear", this.gear);
//   }
// };

// Traditional function expression should not be used.
// setGear should be a declarative function.
// bicycle.setGear(48) // should change the gear value to 48.






// 18. Use class Syntax to Define a Constructor Function
// Use the class keyword and write a constructor to create the Vegetable class.
// The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

// task
// Only change code below this line
 // Only change code above this line
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'

// solution
// class Vegetable{
//   constructor(name){
//     this.name = name;
//   }
// }
// // Only change code above this line

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'

// Vegetable should be a class with a defined constructor method.
// The class keyword should be used.
// Vegetable should be able to be instantiated.
// carrot.name should return carrot.




// 19. Use getters and setters to Control Access to an Object
// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
// In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.
// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
// Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
// This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
// In other words, you are abstracting implementation details from the user.

// task
// Only change code below this line
// Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in

// solution
// class Thermostat{
//   constructor(temperature){
//     this._temperature = temperature;
//   }
//     get temperature() {
//       // преобразует и выдает результат в градусах цельсия
//      return 5/9 * (this._temperature - 32) ;
//   }
//     set temperature(data) {
//       // данные вводятся в градусах по цельсиию, преобразуются и записываются по фаренгейту
//     this._temperature = data * 9.0 / 5 + 32;
//   }
// }

// // данные температуры вводятся по Фаренгейту
// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// console.log("thermos", thermos);
// let temp = thermos.temperature; // 24.44 in Celsius
// console.log("temp", temp);
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius
// console.log("temp", temp);



// Thermostat should be a class with a defined constructor method.
// class keyword should be used.
// Thermostat should be able to be instantiated.
// When instantiated with a Fahrenheit value, Thermostat should set the correct temperature.
// A getter should be defined.
// A setter should be defined.
// Calling the setter with a Celsius value should set the temperature.






// 20. Create a Module Script
// Add a script to the HTML document of type module and give it the source file of index.js

// task
{/* <html>
  <body>
    <!-- Only change code below this line -->
    <!-- Only change code above this line -->
  </body>
</html> */}

// solution
{/* <html>
  <body>
  .....
  .....
    <script type="module" src="filename.js"></script>
  </body>
</html> */}

// You should create a script tag.
// Your script tag should have the type attribute with a value of module.
// Your script tag should have a src of index.js.





// 21. Use export to Share a Code Block
// There are two string-related functions in the editor. Export both of them using the method of your choice.

// task
// const uppercaseString = (string) => {
//   return string.toUpperCase();
// }
// const lowercaseString = (string) => {
//   return string.toLowerCase()
// }

// solution
// const uppercaseString = (string) => {
//   return string.toUpperCase();
// }
// const lowercaseString = (string) => {
//   return string.toLowerCase()
// }
// export {uppercaseString, lowercaseString};

// You should properly export uppercaseString.
// You should properly export lowercaseString.






// 21. Reuse JavaScript Code Using import
// Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.

// task
// Only change code above this line
// uppercaseString("hello");
// lowercaseString("WORLD!");

// solution
// import { uppercaseString, lowercaseString } from './string_functions.js';
// uppercaseString("hello");
// lowercaseString("WORLD!");

// You should properly import uppercaseString.
// You should properly import lowercaseString.





// 22. Use * to Import Everything from a File
// The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.

// task
// Only change code above this line
// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");

// solution
// import * as stringFunctions from './string_functions.js'
// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");

// Your code should properly use import * as syntax.
