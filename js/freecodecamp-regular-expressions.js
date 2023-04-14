// 1. Using the Test Method
// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
// If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.
// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// testRegex.test(testStr);

// The test method here returns true.

// Apply the regex myRegex on the string myString using the .test() method.

// task
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex; // Change this line

// solution
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
// "что ищем".test("где ищем");
// console.log("result", result);


// You should use .test() to test the regex.
// Your result should return true.




// 2. Match Literal Strings
// In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:

// let testStr = "Hello, my name is Kevin.";
// let testRegex = /Kevin/;
// testRegex.test(testStr);

// This test call will return true.
// Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.

// let wrongRegex = /kevin/;
// wrongRegex.test(testStr);

// This test call will return false.
// A future challenge will show how to match those other forms as well.

// Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

// task
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /search/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);

// solution
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/;
// let result = waldoRegex.test(waldoIsHiding);
// console.log("result", result);

// Your regex waldoRegex should find the string Waldo
// Your regex waldoRegex should not search for anything else.
// You should perform a literal string match with your regex.





// 3. Match a Literal String with Different Possibilities
// Using regexes like /coding/, you can look for the pattern coding in another string.
// This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.
// This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.
// You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.
// Complete the regex petRegex to match the pets dog, cat, bird, or fish.

// task
// let petString = "James has a pet cat.";
// let petRegex = /change/; // Change this line
// let result = petRegex.test(petString);

// solution
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/;
// let result = petRegex.test(petString);
// console.log("result", result);

// console.log(petRegex.test("John has a pet dog")); // should return true
// console.log(petRegex.test("Emma has a pet rock")); // should return false
// console.log(petRegex.test("Emma has a pet bird")); // should return true
// console.log(petRegex.test("Liz has a pet cat")); // should return true
// console.log(petRegex.test("Kara has a pet dolphin")); // should return false
// console.log(petRegex.test("Alice has a pet fish")); // should return true
// console.log(petRegex.test("Jimmy has a pet computer")); // should return false



// 4. Ignore Case While Matching
// Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.
// Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.
// You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

// // task
// let myString = "freeCodeCamp";
// let fccRegex = /change/; // Change this line
// let result = fccRegex.test(myString);

// solution
// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i; // буква i игнорирует регистр
// let result = fccRegex.test(myString);

// Your regex should match the string freeCodeCamp
// Your regex should match the string FreeCodeCamp
// Your regex should match the string FreecodeCamp
// Your regex should match the string FreeCodecamp
// Your regex should not match the string Free Code Camp
// Your regex should match the string FreeCOdeCamp
// Your regex should not match the string FCC
// Your regex should match the string FrEeCoDeCamp
// Your regex should match the string FrEeCodECamp
// Your regex should match the string FReeCodeCAmp




// 5. Extract Matches
// So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

// Here's an example:

// "Hello, World!".match(/Hello/);
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);
// Here the first match would return ["Hello"] and the second would return ["expressions"].

// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

// 'string'.match(/regex/);
// /regex/.test('string');

// Apply the .match() method to extract the string coding.

// task
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /change/; // Change this line
// let result = extractStr; // Change this line

// solution
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);  
// console.log("result", result);
// "где ищем".match("что ищем") - match() - синтаксис противоположен методу test() 
// "что ищем".test("где ищем")  - test()
    
// The result should have the string coding
// Your regex codingRegex should search for the string coding
// You should use the .match() method.