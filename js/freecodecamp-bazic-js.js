// // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection


// // 95. Record Collection
// // You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

// // The updateRecords function takes 4 arguments represented by the following function parameters:

// // records - an object containing several individual albums
// // id - a number representing a specific album in the records object
// // prop - a string representing the name of the album’s property to update
// // value - a string containing the information used to update the album’s property
// // Complete the function using the rules below to modify the object passed to the function.

// // Your function must always return the entire records object.
// // If value is an empty string, delete the given prop property from the album.
// // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// // If prop is tracks and value isn't an empty string, add the value to the end of the album's tracks array. You need to create this array first if the album does not have a tracks property.
// // Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.


// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };


// function updateRecords(records, id, prop, value) {
//     const newRecords= {...records}
//     const idArr = Object.keys(newRecords);
//     console.log("idArr", idArr);
//     const neededRecord = idArr.find(item => Number(item) === id);
//     console.log("neededRecord", neededRecord);


//     // Если value равно пустой строке, удалите данное свойство prop из альбома.
//     if (value === "") {
//         console.log("newRecords.neededRecord", newRecords[neededRecord]);
//         delete newRecords[neededRecord][prop];
//     }

//     // Если prop не является tracks, а value не является пустой строкой, присвойте value prop этого альбома.
//     if (prop !== "tracks" && value !== "") {
//     console.log("newRecords.neededRecord", newRecords[neededRecord]);
//     newRecords[neededRecord][prop] = value;
//     }
    
//     // Если prop — это tracks, а значение не является пустой строкой, добавьте value в конец массива tracks альбома. Сначала необходимо создать этот массив, если альбом не имеет свойства tracks.
//   if (prop === "tracks" && value !== "") {
//     const hasProperty = newRecords[neededRecord].hasOwnProperty('tracks');
//     console.log("hasProperty", hasProperty);
//     if (!hasProperty) {
//       newRecords[neededRecord][prop] = [];
//       console.log("создаем пустой массив");
//     }
//     newRecords[neededRecord][prop].push(value);
//     console.log("добавляем элемент в существующий массив");
//     }

//     console.log(" finish newRecords", newRecords);
//   return newRecords;
// }


// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// updateRecords(recordCollection, 2548, "artist", "")
// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
// updateRecords(recordCollection, 2468, "tracks", "Free")
// updateRecords(recordCollection, 2548, "tracks", "")
// updateRecords(recordCollection, 1245, "albumTitle", "Riptide")







// 103. Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

//   function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

//   function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }
// The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

// function sum(arr, n) {
//     if (n <= 0) {
//         console.log("return 0");
//         return 0;
//     }
//     else {
//         console.log("sum(arr, n-1)+arr[n-1]", sum(arr, n - 1) + arr[n - 1]);
//         return sum(arr, n - 1) + arr[n - 1]
//     }
// }



// // sum([1], 0) // should equal 0.
// // sum([2, 3, 4], 1) //should equal 2.
// sum([2, 3, 4, 5], 3) // should equal 9

// Алгоритм выполнения рекурсии для sum(arr, n) на примере sum([2, 3, 4, 5], 3):
// при n = 3
// sum(arr, n - 1) + arr[n - 1]
// sum([2, 3, 4, 5], 2) + arr[2] - становится в стэк
// при n = 2
// sum([2, 3, 4, 5], 1) + arr[1] - становится в стэк
// при n = 1
// sum([2, 3, 4, 5], 0) + arr[0] - становится в стэк
// при n = 0
// sum([2, 3, 4, 5], 0) - возвращает 0 (строка 122) и возвращается в стэк за ф-ей со стр 143:
// sum([2, 3, 4, 5], 0) + arr[0] = 0 + 2 - возвращает 2 и возвращается в стэк за ф-ей со стр 141:
// sum([2, 3, 4, 5], 1) + arr[1] = 2 + 3 - возвращает 5 и возвращается в стэк за ф-ей со стр 139:
// sum([2, 3, 4, 5], 2) + arr[2] = 5 + 4 - возвращает 9 - алгоритм завершен








// 104. Profile Lookup
// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.


// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//     // The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
//     let errorMessage = "";
//     const neededContact = contacts.find(contact => contact.firstName === name)
//     console.log(neededContact);
//     // If name does not correspond to any contacts then return the string No such contact.
//     if (!neededContact) {
//         errorMessage = `No such contact`;
//         console.log(errorMessage);
//         return errorMessage;
//     }
    
//     const hasProperty = neededContact.hasOwnProperty(prop);
//     console.log("hasProperty", hasProperty);
//     // If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
//     if (!hasProperty) {
//         errorMessage = "No such property";
//         console.log(errorMessage);
//         return errorMessage;
//     }
//     // If both are true, then return the "value" of that property.
//     console.log(neededContact[prop]);

//     return neededContact[prop];
// }


// lookUpProfile("Akira", "likes"); // should return ['Pizza', 'Coding', 'Brownie Points']
// lookUpProfile("Kristian", "lastName") // should return the string Vos
// lookUpProfile("Sherlock", "likes") // should return ["Intriguing Cases", "Violin"]
// lookUpProfile("Harry", "likes") // should return ['Hogwarts', 'Magic', 'Hagrid']
// lookUpProfile("Bob", "number") // should return the string No such contact
// lookUpProfile("Bob", "potato") // should return the string No such contact
// lookUpProfile("Akira", "address") // should return the string No such property







// 105. Generate Random Fractions with JavaScript
// Random numbers are useful for creating random behavior.
// JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.
// Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.
// Change randomFraction to return a random number instead of returning 0.


// function randomFraction() {
//     let randomNumber = Math.random();
//     console.log(randomNumber);
//   return randomNumber;
// }


// randomFraction();
// randomFraction should return a random number.
// The number returned by randomFraction should be a decimal.
// You should be using Math.random to generate the random decimal number.




// 106. Generate Random Whole Numbers with JavaScript
// It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

// Use Math.random() to generate a random decimal.
// Multiply that random decimal by 20.
// Use another function, Math.floor() to round the number down to its nearest whole number.
// Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

// Putting everything together, this is what our code looks like:

// Math.floor(Math.random() * 20);
// We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.

// Use this technique to generate and return a random whole number between 0 and 9.


// function randomWholeNum() {

//     // 1-st solution
//     const decimalNumber = Math.random();
//     // console.log("decimalNumber", decimalNumber);
//     const number = decimalNumber * 10;
//     // console.log("number", number);
//     const result = Math.floor(number)
//     // console.log("result", result);


//     // 2-nd solution
//     // const result = Math.floor(Math.random() * 10)


//   return result;
// }

// randomWholeNum()


// The result of randomWholeNum should be a whole number.
// You should use Math.random to generate a random number.
// You should have multiplied the result of Math.random by 10 to make it a number that is between zero and nine.
// You should use Math.floor to remove the decimal part of the number.





// 107. Generate Random Whole Numbers within a Range
// Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.
// To do this, we'll define a minimum number min and a maximum number max.
// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
// Math.floor(Math.random() * (max - min + 1)) + min
// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.


// function randomRange(myMin, myMax) {
//   // Only change code below this line
//     const result = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
//     console.log("result", result);
//   return result;
//   // Only change code above this line
// }


// randomRange(0,10)


// The lowest random number that can be generated by randomRange should be equal to your minimum number, myMin.
// The highest random number that can be generated by randomRange should be equal to your maximum number, myMax.
// The random number generated by randomRange should be an integer, not a decimal.
// randomRange should use both myMax and myMin, and return a random number in your range.







// 108. Use the parseInt Function
// The parseInt() function parses a string and returns an integer. Here's an example:
// const a = parseInt("007");
// The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.
// Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.


// function convertToInteger(str) {
//     console.log("str", str);
//         console.log("typeOf(str)", typeof(str));

//     const result = parseInt(str);
//     console.log("result", result);
//     console.log("typeOf(result)", typeof(result));
//     return result;
// }

// convertToInteger("56");


// convertToInteger should use the parseInt() function
// convertToInteger("56") // should return a number
// convertToInteger("56") // should return 56
// convertToInteger("0077") // should return 77
// convertToInteger("JamesBond") // should return NaN







// // 109. Use the parseInt Function with a Radix
// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
// The function call looks like:
// parseInt(string, radix);
// And here's an example:
// const a = parseInt("11", 2);
// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.
// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.


// function convertToInteger(str) {
//     const result = parseInt(str, 2);
//     console.log("result", result);
//     return result;
// }


// convertToInteger("10011");


// convertToInteger should use the parseInt() function
// convertToInteger("10011") // should return a number
// convertToInteger("10011") // should return 19
// convertToInteger("111001") // should return 57
// convertToInteger("JamesBond") // should return NaN





// 110. Use the Conditional (Ternary) Operator
// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
// The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
// The following function uses an if/else statement to check a condition:

// function findGreater(a, b) {
//   if(a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater or equal";
//   }
// }
// This can be re-written using the conditional operator:

// function findGreater(a, b) {
//   return a > b ? "a is greater" : "b is greater or equal";
// }
// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.


// function checkEqual(a, b) {
//     const result = a === b ? "Equal" : "Not Equal";
//     console.log("result", result);
//     console.log(`${a} ${result} ${b}`);

//     return result;
// }


// // checkEqual should use the conditional operator
// checkEqual(1, 2) // should return the string Not Equal
// checkEqual(1, 1) // should return the string Equal
// checkEqual(1, -1) // should return the string Not Equal
// checkEqual('m', "M")
// checkEqual("K", "K") // should return the string Equal







// 111. Use Multiple Conditional (Ternary) Operators
// In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.
// The following function uses if, else if, and else statements to check multiple conditions:

// function findGreaterOrEqual(a, b) {
//   if (a === b) {
//     return "a and b are equal";
//   }
//   else if (a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater";
//   }
// }
// The above function can be re-written using multiple conditional operators:

// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal"
//     : (a > b) ? "a is greater"
//     : "b is greater";
// }
// It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
// }
// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.


// function checkSign(num) {
//     const result = (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
//     console.log(`${num} is ${result}`);
//     return result;
// }


// checkSign should use multiple conditional operators
// checkSign(10)  //should return the string positive. Note that capitalization matters
// checkSign(-12) // should return the string negative. Note that capitalization matters
// checkSign(0) // should return the string zero. Note that capitalization matters






// 112. Use Recursion to Create a Countdown
// In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

// As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

// For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));
// The value [1, 2, 3, 4, 5] will be displayed in the console.

// At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.


// // Only change code below this line
// function countdown(n) {
//     let countArray = []
//     if (n < 1) {
//         console.log("n < 1", countArray);
//         return countArray;
//     }
//         else {
//         countArray = countdown(n - 1);
//         countArray.unshift(n);
//         console.log("countArray", countArray);
//         return countArray;
//     }
// }
// Only change code above this line


// countdown(-1) // should return an empty array.
// countdown(10) // should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// countdown(5) // should return [5, 4, 3, 2, 1]

// Your code should not rely on any kind of loops (for, while or higher order functions such as forEach, map, filter, and reduce).
// You should use recursion to solve this problem.
// Global variables should not be used to cache the array.




// 113. Use Recursion to Create a Range of Numbers
// Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.


function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        console.log("result []");
        return [];
    }
    else {
       const newArray = rangeOfNumbers(startNum, endNum - 1);
        newArray.push(endNum);
        console.log("newArray", newArray);
        return newArray;
    }
};


// Алгоритм выполнения рекурсии для rangeOfNumbers(startNum, endNum) на примере rangeOfNumbers(1, 5):
// rangeOfNumbers(1, 5) - становится в стэк
// rangeOfNumbers(startNum, endNum - 1)
// rangeOfNumbers(1, 4) - становится в стэк
// rangeOfNumbers(startNum, endNum - 1)
// rangeOfNumbers(1, 3) - становится в стэк
// rangeOfNumbers(startNum, endNum - 1)
// rangeOfNumbers(1, 2) - становится в стэк
// rangeOfNumbers(startNum, endNum - 1)
// rangeOfNumbers(1, 1) - становится в стэк
// rangeOfNumbers(startNum, endNum - 1)
// rangeOfNumbers(1, 0) - из if возвращает пустой массив, и возвращается в стэк за ф-ей со стр 567:
// rangeOfNumbers(1, 1) - пушит 1 в массив [] и возвращается в стэк за ф-ей со стр 565
// rangeOfNumbers(1, 2) - пушит 2 в массив [1] и возвращается в стэк за ф-ей со стр 563
// rangeOfNumbers(1, 3) - пушит 3 в массив [1, 2] и возвращается в стэк за ф-ей со стр 561
// rangeOfNumbers(1, 4) - пушит 4 в массив [1, 2, 3] и возвращается в стэк за ф-ей со стр 559
// rangeOfNumbers(1, 5) - пушит 5 в массив [1, 2, 3, 4] . в стэке больше нет ф-ий, операция завершается 


// Your function should return an array.
//Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).
// rangeOfNumbers should use recursion (call itself) to solve this challenge.
// rangeOfNumbers(5, 1) // should return [].
// rangeOfNumbers(1, 5) // should return [1, 2, 3, 4, 5].
// rangeOfNumbers(6, 9) // should return [6, 7, 8, 9].
// rangeOfNumbers(4, 4) // should return [4].
// Global variables should not be used to cache the array.