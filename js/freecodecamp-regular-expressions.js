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




// 6. Find More Than the First Match
// So far, you have only been able to extract or search a pattern once.

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// testStr.match(ourRegex);
// Here match would return ["Repeat"].

// To search or extract a pattern more than once, you can use the global search flag: g.

// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// And here match returns the value ["Repeat", "Repeat", "Repeat"]

// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
// You can have multiple flags on your regex like /search/gi

// task
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /change/; // Change this line
// let result = twinkleStar; // Change this line

// solution
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi;
// let result = twinkleStar.match(starRegex);

// Your regex starRegex should use the global flag g
// Your regex starRegex should use the case insensitive flag i
// Your match should match both occurrences of the word Twinkle
// Your match result should have two elements in it.




// 7. Match Anything with Wildcard Period
// Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .
// The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr);
// huRegex.test(hugStr);
// Both of these test calls would return true.

// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

// task
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /change/; // Change this line
// let result = unRegex.test(exampleStr);

//solution
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/;
// let result = unRegex.test(exampleStr);

// You should use the .test() method.
// You should use the wildcard character in your regex unRegex
// Your regex unRegex should match run in the string Let us go on a run.
// Your regex unRegex should match sun in the string The sun is out today.
// Your regex unRegex should match fun in the string Coding is a lot of fun.
// Your regex unRegex should match pun in the string Seven days without a pun makes one weak.
// Your regex unRegex should match nun in the string One takes a vow to be a nun.
// Your regex unRegex should match bun in the string She got fired from the hot dog stand for putting her hair in a bun.
// Your regex unRegex should not match the string There is a bug in my code.
// Your regex unRegex should not match the string Catch me if you can.




// 8. Match Single Character with Multiple Possibilities
// You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.
// You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
// For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex);
// bagStr.match(bgRegex);
// bugStr.match(bgRegex);
// bogStr.match(bgRegex);
// In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
//  Be sure to match both upper- and lowercase vowels.

// task
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /change/; // Change this line
// let result = vowelRegex; // Change this line

// solution
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result = quoteSample.match(vowelRegex);

// Waiting:You should find all 25 vowels.
// Waiting:Your regex vowelRegex should use a character class.
// Waiting:Your regex vowelRegex should use the global flag.
// Waiting:Your regex vowelRegex should use the case insensitive flag.
// Waiting:Your regex should not match any consonants.




// 9. Match Letters of the Alphabet
// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

// Inside a character set, you can define a range of characters to match using a hyphen character: -.

// For example, to match lowercase letters a through e you would use [a-e].

// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// catStr.match(bgRegex);
// batStr.match(bgRegex);
// matStr.match(bgRegex);
// In order, the three match calls would return the values ["cat"], ["bat"], and null.

// Match all the letters in the string quoteSample.
// Be sure to match both uppercase and lowercase letters.

// task
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /change/; // Change this line
// let result = alphabetRegex; // Change this line

//solution
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi;
// let result = quoteSample.match(alphabetRegex) ;

// Your regex alphabetRegex should match 35 items.
// Your regex alphabetRegex should use the global flag.
// Your regex alphabetRegex should use the case insensitive flag.





// 10. Match Numbers and Letters of the Alphabet
// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

// Also, it is possible to combine a range of letters and numbers in a single character set.

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// jennyStr.match(myRegex);

// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

// task
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /change/; // Change this line
// let result = myRegex; // Change this line

// solution
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi;
// let result = quoteSample.match(myRegex);

// Your regex myRegex should match 17 items.
// Your regex myRegex should use the global flag.
// Your regex myRegex should use the case insensitive flag.




// 11. Match Single Characters Not Specified
// So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

// For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

// task
// let quoteSample = "3 blind mice.";
// let myRegex = /change/; // Change this line
// let result = myRegex; // Change this line

//solution
// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9aeiou]/gi;
// let result = quoteSample.match(myRegex);

// Your regex myRegex should match 9 items.
// Your regex myRegex should use the global flag.
// Your regex myRegex should use the case insensitive flag.





// 12. Match Characters that Occur One or More Times
// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
// You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].
// If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

// task
// let difficultSpelling = "Mississippi";
// let myRegex = /change/; // Change this line
// let result = difficultSpelling.match(myRegex);

// solution
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g;
// let result = difficultSpelling.match(myRegex); // выдает массив значений 1 буквы, общее кол-во которых в слове больше 1

// Your regex myRegex should use the + sign to match one or more s characters.
// Your regex myRegex should match 2 items.
// The result variable should be an array with two matches of ss





// 13. Match Characters that Occur Zero or More Times
// The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// // символ g - обязательное наличие, а символ o - необязательное наличие
// console.log(soccerWord.match(goRegex));
// console.log(gPhrase.match(goRegex));
// console.log(oPhrase.match(goRegex));

// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

// For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

// task
// // Only change code below this line
// let chewieRegex = /change/; // Change this line
// // Only change code above this line
// let result = chewieQuote.match(chewieRegex);

// solution
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/;
// let result = chewieQuote.match(chewieRegex);
// console.log(result);

// Your regex chewieRegex should use the * character to match zero or more a characters.
// Your regex should match the string A in chewieQuote.
// Your regex should match the string Aaaaaaaaaaaaaaaa in chewieQuote.
// Your regex chewieRegex should match 16 characters in chewieQuote.
// Your regex should not match any characters in the string He made a fair move. Screaming about it can't help you.
// Your regex should not match any characters in the string Let him have it. It's not wise to upset a Wookiee.





// 14. Find Characters with Lazy Matching
// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
// You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
// Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

// However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

// Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

// task
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/; // Change this line
// let result = text.match(myRegex);

// solution
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; 
// let result = text.match(myRegex);
// console.log(result);

// The result variable should be an array with <h1> in it
// myRegex should use lazy matching
// myRegex should not include the string h1