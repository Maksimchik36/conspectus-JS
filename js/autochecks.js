// Модуль 2. Задача 9

// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   // Change code below this line
//     for (let element of arguments) {
//         console.log(element);
//         // console.log(typeof (element));
//         console.log(element[0], "первый элемент");
//         console.log(element[array.length - 1], "последний");
//         array = [element[0], element[array.length - 1]];
//          return array;
//     }
//   // Change code above this line
// }

// То , что приняла автопроверка
// function getExtremeElements(array) {
//   // Change code below this line
// for (let element of arguments){
//   array = [element[0], element[array.length - 1]];
//   return array;
// }
//   // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]); //возвращает[1, 5]
// getExtremeElements(["Earth", "Mars", "Venus"]); //возвращает ["Earth", "Venus"]
// getExtremeElements(["apple", "peach", "pear", "banana"])// возвращает ["apple", "banana"]


// Модуль 2. Задача 10
// Дополни код функции splitMessage(message, delimeter) так, чтобы она
// возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line

//     if (message.includes(delimeter)){
//       words = message.split(delimeter)
//     }

//   // Change code above this line
//   return words;
// }


// console.log(splitMessage("Mango hurries to the train", " ")) //возвращает ["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage("Mango", "")); //возвращает ["M", "a", "n", "g", "o"]
// console.log(splitMessage("best_for_week", "_")); //возвращает ["best", "for", "week"]


// Модуль 2. Задача 11
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let count = 1;
//     let total = 0;
//     for (const element of message) {
//         if (element===" ") {
//         count += 1
//         // console.log(count)
//     }
//     }
//     total = count * pricePerWord;
//     console.log(total);
//    // Change code above this line
// }


// calculateEngravingPrice("JavaScript is in my blood", 10) //возвращает 50
// calculateEngravingPrice("JavaScript is in my blood", 20) //возвращает 100
// calculateEngravingPrice("Web-development is creative work", 40) //возвращает 160
// calculateEngravingPrice("Web-development is creative work", 20) //возвращает 80


// Модуль 2. Задача 12
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string = "";
//   // Change code below this line
// string = array.join(delimeter);
//   // Change code above this line
//   console.log(string);
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") //возвращает "Mango hurries to the train"
// makeStringFromArray(["M", "a", "n", "g", "o"], "") //возвращает "Mango"
// makeStringFromArray(["top", "picks", "for", "you"], "_") //возвращает "top_picks_for_you"


// Модуль 2. Задача 13
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

// Внимание - Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLowerCase().split(" ").join("-");
//   console.log(slug);
//   // Change code above this line
// }

// slugify("Arrays for begginers") //возвращает "arrays-for-begginers"
// slugify("English for developer") //возвращает "english-for-developer"
// slugify("Ten secrets of JavaScript") //возвращает "ten-secrets-of-javascript"
// slugify("How to become a JUNIOR developer in TWO WEEKS") //возвращает "how-to-become-a-junior-developer-in-two-weeks"


// Модуль 2. Задача 14
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1, fruits.length-1) ;
// const lastThreeEls = fruits.slice(-3) ;

// console.log(firstTwoEls) // это массив ["apple", "plum"]
// console.log(nonExtremeEls) // ["plum", "pear", "orange"]
// console.log(lastThreeEls) // ["pear", "orange", "banana"]
// // Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами


// Модуль 2. Задача 15
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients =oldClients.concat(newClients) ; // Change this line

// console.log(oldClients) // это массив ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients) // это массив ["Peach", "Houston"]
// console.log(allClients) // это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Переменной allClients присвоен массив после применения метода concat с правильными аргументами


// Модуль 2. Задача 16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// Вариант 1.
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     newArray.length = maxLength
//   }
//   console.log(newArray);
//     // Change code above this line
//   }

//Вариант 2
// function makeArray(firstArray, secondArray, maxLength) {
// //     // Change code below this line
//   let newArray = firstArray.concat(secondArray);
//   newArray = newArray.slice(0, maxLength);
//   console.log(newArray);
// //     // Change code above this line
//   }



// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) // возвращает ["Mango", "Poly", "Ajax"]
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) // возвращает ["Mango", "Poly", "Houston", "Ajax"]
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) // возвращает ["Mango", "Ajax", "Chelsea"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) // возвращает ["Earth", "Jupiter"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) // возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) // возвращает []
// // Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив


// Модуль 2. Задача 17
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start ; i <= end ; i +=1 ) { // Change this line
//   console.log(i);
// }

// Начальное значение переменной i равно 3
// Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
// На каждой итерации значение переменной i увеличивается на единицу
// Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7


// Модуль 2. Задача 18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1){
//     total += i;
//   }

//   console.log(total);

//   // Change code above this line
// }

// calculateTotal(1) // возвращает 1
// calculateTotal(3) // возвращает 6
// calculateTotal(7) // возвращает 28
// calculateTotal(18) // возвращает 171
// calculateTotal(24) // возвращает 300
// calculateTotal() // со случайным числом возвращает правильное значение

// Модуль 2. Задача 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i =0; i<fruits.length ;i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// fruits это массив ["apple", "plum", "pear", "orange"]
// Объявлена переменная i - счётчик цикла
// Начальное значение переменной i равно 0
// Условие цикла приводится к true до тех пор, пока i меньше 4
// На каждой итерации значение переменной i увеличивается на единицу
// В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
// В теле цикла for используется вывод в консоль переменной fruit


// Модуль 2. Задача 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for(let i=0; i<order.length; i+=1){
//     total += order[i];
//   }

//   // Change code above this line
//   // return total;
//   console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]) // возвращает 138
// calculateTotalPrice([164, 48, 291]) // возвращает 503
// calculateTotalPrice([412, 371, 94, 63, 176]) // возвращает 1116
// calculateTotalPrice() // со случайным массивом возвращает правильное значение

// Модуль 2. Задача 21
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Change code below this line
//   let array = string.split(" ");
//   let word = array[0];

//   for (i = 1; i < array.length; i += 1){
//     if (array[i].length < word.length){
//       continue;
//     } else word = array[i];
//   }

// return word;
//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog") //возвращает jumped
// findLongestWord("Google do a roll") //возвращает Google
// findLongestWord("May the force be with you") //возвращает force
// //findLongestWord() со случайной строкой возвращает правильное значение


// Модуль 2. Задача 22
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i +=1){
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }


// createArrayOfNumbers(1, 3) // возвращает [1, 2, 3]
// createArrayOfNumbers(14, 17) // возвращает [14, 15, 16, 17]
// createArrayOfNumbers(29, 34) // возвращает [29, 30, 31, 32, 33, 34]
// В цикле for использовался метод push


// Модуль 2. Задача 23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
  
//    // Change code below this line
// let newArray = [];
//   for(const number of numbers){
//     if (number <= value){
//       continue;
//     } else newArray.push(number);
//   }

//   console.log(newArray);
//   // return newArray;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3) // возвращает [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) // возвращает [5]
// filterArray([1, 2, 3, 4, 5], 5) // возвращает []
// filterArray([12, 24, 8, 41, 76], 38) // возвращает [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) // возвращает [24, 41, 76]
// // В цикле for использовался метод push


// Модуль 2. Задача 24
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   let isContained = Boolean;
//   return isContained = fruits.includes(fruit);
// }

// // Дополни код функции так, что если:
// // фрукт есть в массиве, то функция возвращает true;
// // фрукта нет в массиве, то функция возвращает false.
// checkFruit("plum") // возвращает true
// checkFruit("mandarin") // возвращает false
// checkFruit("pear") // возвращает true
// checkFruit("Pear") // возвращает false
// checkFruit("apple") // возвращает true
// // В функции использовался метод includes


// Модуль 2. Задача 25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
//   for(let i = 0; i < array1.length; i += 1){
//     if (array2.includes(array1[i])){
//       newArray.push(array1[i]);
//     }
//   }
//   console.log(newArray);
// // return newArray;
//  // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]) // возвращает [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // возвращает [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // возвращает [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // возвращает [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]) // возвращает []
// // В цикле for использовались методы includes и push


// Модуль 2. Задача 26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let element of order) {
//     total += element;
//   }

//   // Change code above this line
//   // return total;
//   console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]) // возвращает 138
// calculateTotalPrice([164, 48, 291]) // возвращает 503
// calculateTotalPrice([412, 371, 94, 63, 176]) // возвращает 1116
// calculateTotalPrice([]) // возвращает 0


// Модуль 2. Задача 27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   // return filteredNumbers;
//   console.log(filteredNumbers);
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3) // возвращает [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) // возвращает [5]
// filterArray([1, 2, 3, 4, 5], 5) // возвращает []
// filterArray([12, 24, 8, 41, 76], 38) // возвращает [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) // возвращает [24, 41, 76]
// // Функция calculateTotalPrice() использует цикл for..of


// Модуль 2. Задача 28
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// Change code below this line

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// Значение переменной a это число 0
// Значение переменной b это число 1
// Значение переменной c это число 3
// Значение переменной d это число 5
// Значение переменной e это число 2

// Модуль 2. Задача 29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//    // Change code below this line
//    let newArray = [];
//    for(let i = start; i <= end; i += 1){
//      if (i % 2 !== 0){
//        continue;
//      } else newArray.push(i);
//    }
// // return newArray;
//   console.log(newArray);
//     // Change code above this line
//   }

// getEvenNumbers(2, 5) // возвращает [2, 4]
// getEvenNumbers(3, 11) // возвращает [4, 6, 8, 10]
// getEvenNumbers(6, 12) // возвращает [6, 8, 10, 12]
// getEvenNumbers(8, 8) // возвращает [8]
// getEvenNumbers(7, 7) // возвращает []


// Модуль 2. Задача 30
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);


// Объявлена переменная start со значением 6
// Объявлена переменная end со значением 27
// Объявлена переменная number без инициализации
// Итоговое значение переменной number равно 10
// В цикле for используется break для выхода до завершения всех итераций цикла


// Модуль 2. Задача 31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
    
//   return i;
//     }
//   }

//   // Change code above this line
// }

// findNumber(2, 6, 5) // возвращает 5
// findNumber(8, 17, 3) // возвращает 9
// findNumber(6, 9, 4) // возвращает 8
// findNumber(16, 35, 7) // возвращает 21
// // В цикле for не должен использоваться break для выхода до завершения всех итераций цикла


// Модуль 2. Задача 32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   // Change code below this line
//   let isContained = false;
// for (let element of array){
//   if (element === value) {
//     isContained = true;
//   } 
// }
// // return isContained;
//   console.log(isContained);
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3) // возвращает true
// includes([1, 2, 3, 4, 5], 17) // возвращает false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") // возвращает true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") // возвращает false
// includes(["apple", "plum", "pear", "orange"], "plum") // возвращает true
// includes(["apple", "plum", "pear", "orange"], "kiwi") // возвращает false
// // Вызов includes() для случайного массива со случайным value возвращает верный boolean
// // В функции includes используется for, return, но не метод массива includes
