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







// Модуль 3. Задача 1
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:
// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// } ;
// console.log(apartment);

// Объявлена переменная apartment
// Значение переменной apartment это объект
// В объекте есть свойство imgUrl
// Значение свойства imgUrl это строка "https://via.placeholder.com/640x480"
// В объекте есть свойство descr
// Значение свойства descr это строка "Spacious apartment in the city center"
// В объекте есть свойство rating
// Значение свойства rating это число 4
// В объекте есть свойство price
// Значение свойства price это число 2153
// В объекте есть свойство tags
// Значение свойства tags это массив ["premium", "promoted", "top"]


// Модуль 3. Задача 2
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// console.log(apartment);

// Объявлена переменная apartment
// Значение переменной apartment это объект
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями
// В объекте apartment есть свойство owner
// Значение свойства owner это объект
// В объекте owner есть свойство name
// Значение свойства name это "Henry"
// В объекте owner есть свойство phone
// Значение свойства phone это "982-126-1588"
// В объекте owner есть свойствао email
// Значение свойства email это "henry.carter@aptmail.com"


// Модуль 3. Задача 3
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// Объявлена переменная apartment
// Значение переменной apartment это объект
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями
// Объявлена переменная aptRating
// Значение переменной aptRating это число 4
// Объявлена переменная aptDescr
// Значение переменной aptDescr это строка "Spacious apartment in the city center"
// Объявлена переменная aptPrice
// Значение переменной aptPrice это число 2153
// Объявлена переменная aptTags
// Значение переменной aptTags это массив строк ["premium", "promoted", "top"]


// Модуль 3. Задача 4
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// Объявлена переменная apartment с помощью const
// Значение переменной apartment это объект
// Объявлена переменная ownerName с помощью const
// Значение переменной ownerName это строка "Henry"
// Объявлена переменная ownerPhone с помощью const
// Значение переменной ownerPhone это "982-126-1588"
// Объявлена переменная ownerEmail с помощью const
// Значение переменной ownerEmail это "henry.carter@aptmail.com"
// Объявлена переменная numberOfTags с помощью const
// Значение переменной numberOfTags это 3
// Объявлена переменная firstTag с помощью const
// Значение переменной firstTag это "premium"
// Объявлена переменная lastTag с помощью const
// Значение переменной lastTag это "top"


// Модуль 3. Задача 5
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная aptRating
// Значение переменной aptRating это 4
// Объявлена переменная aptDescr
// Значение переменной aptDescr это "Spacious apartment in the city center"
// Объявлена переменная aptPrice
// Значение переменной aptPrice это 2153
// Объявлена переменная aptTags
// Значение переменной aptTags это ["premium", "promoted", "top"]


// Модуль 3. Задача 6
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);

// Объявлена переменная apartment
// Значение переменной apartment это объект
// Значение вложенного свойства price это число 5000
// Значение вложенного свойства rating это число 4.7
// Значение вложенного свойства name это строка "Henry Sibola"
// Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"]


// Модуль 3. Задача 7
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {}; // создание свойства, значением которого будет являться объект
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment);

// Объявлена переменная apartment
// Значение переменной apartment это объект
// Значение вложенного свойства area это число 60
// Значение вложенного свойства rooms это число 3
// Значение вложенного свойства location это объект
// Значение вложенного свойства location.country это строка "Jamaica"
// Значение вложенного свойства location.city это строка "Kingston"


// // Модуль 3. Задача 8
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// console.log(product);

// Объявлена переменная product
// Значение переменной product это объект
// Значение вложенного свойства name это строка "Repair Droid"
// Значение вложенного свойства price это число 2500
// Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
// Значение вложенного свойства tags это массив ["on sale", "trending", "best buy"]


// // Модуль 3. Задача 9
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };

// console.log(credentials);

// Объявлена переменная credentials
// Значение переменной credentials это объект
// В объекте credentials есть свойство email
// Значение вложенного свойства email это строка "henry.carter@aptmail.com"
// В объекте credentials есть свойство password
// Значение вложенного свойства password это строка "jqueryismyjam"


// // Модуль 3. Задача 10
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]


// Модуль 3. Задача 11

// В данном случае результатом apartment БУДЕТ ЕЩЁ И СВОЙСТВО объекта advert (service), которое не является свойством объекта apartment.
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
//     // Change code above this line
// }

// console.log(keys); // ['descr', 'rating', 'price', 'service']
// console.log(values); // ['Spacious apartment in the city center', 4, 2153, 'apt']

// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// В данном случае результатом apartment БУДУТ ТОЛЬКО ТЕ СВОЙСТВА, которые принадлежали только ему изначально.
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
//     // Change code above this line
// }

// console.log(keys);
// console.log(values);

// Объявлена переменная advert.
// Значение переменной advert это объект.
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].


// // Модуль 3. Задача 12

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object){
//     if (object.hasOwnProperty(key)){
//       propCount +=1;
//     }
//   }
//   // Change code above this line
// //   return propCount;
//     console.log(propCount);
// }

// countProps({ name: "Mango", age: 2 }) // возвращает 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) // возвращает 3

// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта


// // Модуль 3. Задача 13

// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys){
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// Значение переменной values получено с помощью цикла for...of.


// // Модуль 3. Задача 14

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const keys = Object.keys(object)
//   for (const key of keys) {
//       propCount += 1;
//   }
// //   return propCount;
//     console.log(propCount);
//   // Change code above this line
// }

// countProps({}) // возвращает 0
// countProps({ name: "Mango", age: 2 }) // возвращает 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) // возвращает 3

// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of


// // Модуль 3. Задача 15

// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
// Для получения массива ключей объекта apartment используется Object.keys()
// Для получения массива значений объекта apartment используется Object.values()


// // Модуль 3. Задача 16

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for(const value of values){
//     totalSalary+=value;
//   }

//   // Change code above this line
// //   return totalSalary;
//     console.log(totalSalary);
// }


// // Объявлена функция countTotalSalary(salaries)
// countTotalSalary({}) // возвращает 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) // возвращает 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) // возвращает 400
// Функция учитывает только собственные свойства объекта


// // Модуль 3. Задача 17

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for(const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// Объявлена переменная colors
// Значение переменной colors это массив
// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]


// // Модуль 3. Задача 18

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const product of products){
//   if (product.name === productName){
//     return product.price;
//   }
// }
//     return null;

//   // Change code above this line
// }

// // Объявлена функция getProductPrice(productName).
// console.log(getProductPrice("Radar")); // возвращает 1300.
// console.log(getProductPrice("Grip")); // возвращает 1200.
// console.log(getProductPrice("Scanner")); // возвращает 2700.
// console.log(getProductPrice("Droid")); // возвращает 400.
// console.log(getProductPrice("Engine")); // возвращает null.


// Модуль 3. Задача 19

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// // 1. перебрать массив
// // 2. сравнить есть ли такое свойство
// // 3. вывести массив значений свойства с именем объекта


// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = [];
//   for(const product of products){
//     if (product.hasOwnProperty(propName)){
//       array.push(product[propName])
//     }
//   }
// return array;


// Change code above this line
// }

// console.log(getAllPropValues())
// Объявлена функция getAllPropValues(propName)
// console.log(getAllPropValues("name")); // возвращает ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));  // возвращает [4, 3, 7, 9]
// console.log(getAllPropValues("price"));  // возвращает [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category"));  // возвращает []


// Модуль 3. Задача 20

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for(const product of products){
//     if (product.name === productName){
//       totalPrice = product.price * product.quantity
//     }
//   }
//   return totalPrice;

//   // Пиши код выше этой строки
// }


// // Объявлена функция calculateTotalPrice(productName)
// console.log(calculateTotalPrice("Blaster"));  // возвращает 0
// console.log(calculateTotalPrice("Radar"))  // возвращает 5200
// console.log(calculateTotalPrice("Droid"))  // возвращает 2800
// console.log(calculateTotalPrice("Grip"))  // возвращает 10800
// console.log(calculateTotalPrice("Scanner"))  // возвращает 8100


// Модуль 3. Задача 21

// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная yesterday с помощью деструктуризации
// Значение переменной yesterday это число 28
// Объявлена переменная today с помощью деструктуризации
// Значение переменной today это число 26
// Объявлена переменная tomorrow с помощью деструктуризации
// Значение переменной tomorrow это число 33
// Объявлена переменная meanTemperature
// Значение переменной meanTemperature это число 29
// Используется синтаксис деструктуризации объекта highTemperatures


// Модуль 3. Задача 22
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {today, tomorrow, yesterday, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная yesterday с помощью деструктуризации
// Значение переменной yesterday это число 28
// Объявлена переменная today с помощью деструктуризации
// Значение переменной today это число 26
// Объявлена переменная tomorrow с помощью деструктуризации
// Значение переменной tomorrow это число 33
// Объявлена переменная icon с помощью деструктуризации
// Значение переменной icon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Используется деструктуризация объекта


// Модуль 3. Задача 23
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная highYesterday
// Значение переменной highYesterday это число 28
// Объявлена переменная highToday
// Значение переменной highToday это число 26
// Объявлена переменная highTomorrow
// Значение переменной highTomorrow это число 33
// Объявлена переменная highIcon
// Значение переменной highIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Используется деструктуризация объекта


// Модуль 3. Задача 24
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// Объявлена переменная colors
// Значение переменной colors это массив
// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// Для перебора массива используется цикл for...of
// В цикле for...of используется деструктуризация объекта


// Модуль 3. Задача 25
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;


// Объявлена переменная forecast
// Значение переменной forecast это объект
// Объявлена переменная highToday с помощью деструктуризации
// Значение переменной highToday это число 32
// Объявлена переменная lowToday с помощью деструктуризации
// Значение переменной lowToday это число 28
// Объявлена переменная todayIcon с помощью деструктуризации
// Значение переменной todayIcon это строка "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Объявлена переменная highTomorrow с помощью деструктуризации
// Значение переменной highTomorrow это число 31
// Объявлена переменная lowTomorrow с помощью деструктуризации
// Значение переменной lowTomorrow это число 27
// Объявлена переменная tomorrowIcon с помощью деструктуризации
// Значение переменной tomorrowIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Используется синтаксис деструктуризации объекта highTemperatures


// Модуль 3. Задача 26
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
// forecast = {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// // Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.
// // Задание:
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const todayLow = forecast.today.low;
//   const todayHigh = forecast.today.high;
//   const tomorrowLow = forecast.tomorrow.low;
//   const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// // Решение:
// // Change code below this line
// function calculateMeanTemperature(forecast) {

//   const{ today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh }} = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// // Объявлена функция calculateMeanTemperature(forecast)
// // В теле функции используется деструктуризация объекта
// // В теле функции объявлена переменная todayHigh с помощью деструктуризации
// // В теле функции объявлена переменная todayLow с помощью деструктуризации
// // В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
// // В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })); // возвращает 28.5
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })); // возвращает 37


// Модуль 3. Задача 27
// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log("bestScore", bestScore);
// console.log("worstScore", worstScore);

// Объявлена переменная scores
// Значение переменной scores это массив [89, 64, 42, 17, 93, 51, 26]
// Объявлена переменная bestScore
// Значение переменной bestScore это число 93
// Объявлена переменная worstScore
// Значение переменной worstScore это число 17
// Для передачи аргументов методу Math.max() используется синтаксис ... на массиве scores
// Для передачи аргументов методу Math.min() используется синтаксис ... на массиве scores


// Модуль 3. Задача 28
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
// Объявлена переменная firstGroupScores
// Значение переменной firstGroupScores это массив [64, 42, 93]

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// Объявлена переменная secondGroupScores
// Значение переменной secondGroupScores это массив [89, 14, 51, 26]
// Объявлена переменная thirdGroupScores
// Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81]
// Объявлена переменная allScores.
// Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Объявлена переменная bestScore
// Значение переменной bestScore это число 97
// Объявлена переменная worstScore
// Значение переменной worstScore это число 14
// При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива
// Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores
// Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores


// Модуль 3. Задача 29
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings);

// Объявлена переменная defaultSettings
// Значение переменной defaultSettings это объект
// Объявлена переменная overrideSettings
// Значение переменной overrideSettings это объект
// Объявлена переменная finalSettings
// Значение переменной finalSettings это объект
// Значение свойства finalSettings.theme равно "light"
// Значение свойства finalSettings.public равно "false"
// Значение свойства finalSettings.withPassword равно "true"
// Значение свойства finalSettings.minNumberOfQuestions равно 10
// Значение свойства finalSettings.timePerQuestion равно 30
// При присваивании значения переменной finalSettings используется синтаксис ...


// Модуль 3. Задача 30
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.

// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newObj = { completed, category, priority, ...data };
//   return newObj;
//   // Change code above this line
// }

// // Объявлена функция makeTask(data)
// console.log(makeTask({}));  //  возвращает { category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))  //  возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" }))  //  возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }))  //  возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" })) //  возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }


// Модуль 3. Задача 31
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// Change code below this line
// function add(...args) {
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     // return sum;
//     console.log(sum);
//     // Change code above this line
// }

// Объявлена функция add
// Функция add использует параметр args
// Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest)
// add(15, 27) // возвращает 42
// add(12, 4, 11, 48) // возвращает 75
// add(32, 6, 13, 19, 8) // возвращает 78
// add(74, 11, 62, 46, 12, 36) // возвращает 241


// Модуль 3. Задача 32
// Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число.Это число должно быть первым параметром функции.

// // Change code below this line
// function addOverNum(a, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > a) {
//             total += arg;
//         }
//     }

//     // return total;
//     console.log(total);
//     // Change code above this line
// }


// // Объявлена функция addOverNum()
// addOverNum(50, 15, 27) // возвращает 0
// addOverNum(10, 12, 4, 11, 48, 10, 8) // возвращает 71
// addOverNum(15, 32, 6, 13, 19, 8) // возвращает 51
// addOverNum(20, 74, 11, 62, 46, 12, 36) // возвращает 218


// Модуль 3. Задача 33
// Функция findMatches() принимает произвольное количество аргументов.Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

//     Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2], потому что только они есть в массиве первого аргумента.

// Change code below this line
// function findMatches(array, ...rest) {
//     const matches = []; // Don't change this line
//     const newArray = [...rest];
//     for (i = 0; i < newArray.length; i += 1) {
//         if (array.includes(newArray[i])) {
//             matches.push(newArray[i]);
//         }
//     }

//     // Change code above this line
//     return matches;
//     console.log(matches);
// }

// // Объявлена функция findMatches()
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) // возвращает[1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) // возвращает[17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) // возвращает[24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16) // возвращает[]


// Модуль 3. Задача 34
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени.Возвращает строку "Deleting book <имя книги>", где < имя книги > это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое.Возвращает строку "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя > это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return "Returning all books";
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`;
//     }
//     // Change code above this line
// };

// // Объявлена переменная bookShelf
// // Значение переменной bookShelf это объект
// // Значение свойства bookShelf.getBooks это метод объекта
// console.log(bookShelf.getBooks());  // возвращает строку "Returning all books"
// // Значение свойства bookShelf.addBook это метод объекта
// console.log(bookShelf.addBook("Haze"))  // возвращает строку "Adding book Haze"
// // Значение свойства bookShelf.removeBook это метод объекта
// console.log(bookShelf.removeBook("Red sunset"))  // возвращает строку "Deleting book Red sunset"
// // Значение свойства bookShelf.updateBook это метод объекта
// console.log(bookShelf.updateBook("Sands of dune", "Dune"))  // возвращает строку "Updating book Sands of dune to Dune"


// Модуль 3. Задача 35

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const index = this.books.indexOf(oldName);
//         this.books.splice(index, 1, newName);

//         console.log(this.books);
//         // Change code above this line
//     },
// };

// // Объявлена переменная bookShelf
// // Значение переменной bookShelf это объект
// // Значение свойства bookShelf.updateBook это метод объекта
// bookShelf.updateBook("Haze", "Dungeon chronicles"); // значение свойства books это массив["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// bookShelf.updateBook("The last kingdom", "Dune"); //значение свойства books это массив["Dune", "Haze","Theguardian of dreams"]


// Модуль 3. Задача 36
// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий.Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

// const atTheOldToad = {
//     // Change code below this line
//     potions: [],
//     // Change code above this line
// };

// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив[]

// Модуль 3. Задача 37
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//     getPotions() {
//         // return this.potions;
//         console.log(this.potions);

//     }
//     // Change code above this line
// };

// // Объявлена переменная atTheOldToad
// // Значение переменной atTheOldToad это объект
// // atTheOldToad.potions // это массив["Speed potion", "Dragon breath", "Stone skin"]
// // // atTheOldToad.getPotions // э// то метод объекта
// atTheOldToad.getPotions() // возвращает["Speed potion", "Dragon breath", "Stone skin"]


// Модуль 3. Задача 38
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         // Change code below this line
//         this.potions.push(potionName);
//         // Change code above this line
//     },
// };

// //Объявлена переменная atTheOldToad
// // Значение переменной atTheOldToad это объект
// // Значение свойства atTheOldToad.potions это массив["Speed potion", "Dragon breath", "Stone skin"]
// // Значение свойства atTheOldToad.addPotion это метод объекта
// atTheOldToad.addPotion("Invisibility") // в свойстве potions будет массив["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// atTheOldToad.addPotion("Power potion") // в свойстве potions будет массив["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]


// Модуль 3. Задача 39
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line
//         const index = this.potions.indexOf(potionName);
//         this.potions.splice(index, 1);
//         console.log(this.potions);
//         // Change code above this line
//     },
// };

// // Объявлена переменная atTheOldToad
// // Значение переменной atTheOldToad это объект
// // Значение свойства atTheOldToad.potions это массив["Speed potion", "Dragon breath", "Stone skin"]
// // Значение свойства atTheOldToad.removePotion это метод объекта
// atTheOldToad.removePotion("Dragon breath") // в свойстве potions будет массив["Speed potion", Stone skin"]
// atTheOldToad.removePotion("Speed potion") // в свойстве potions будет массив["Stone skin"]


// Модуль 3. Задача 40
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         // Change code below this line
//         const index = this.potions.indexOf(oldName);
//         this.potions.splice(index, 1, newName);
//         console.log(this.potions);
//         // Change code above this line
//     },
// };

// // Объявлена переменная atTheOldToad
// // Значение переменной atTheOldToad это объект
// // Значение свойства atTheOldToad.potions это массив["Speed potion", "Dragon breath", "Stone skin"]
// // Значение свойства atTheOldToad.updatePotionName это метод объекта
// // atTheOldToad.updatePotionName("Dragon breath", "Polymorth") // в свойстве potions будет массив["Speed potion", "Polymorth", "Stone skin"]
// atTheOldToad.updatePotionName("Stone skin", "Invisibility") // в свойстве potions будет массив["Speed potion", "Polymorth", "Invisibility"]


// Модуль 3. Задача 41
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками.Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//     name: "Dragon breath",
//         price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// Задание:
// const atTheOldToad = {
// potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
// ],
//     // Change code below this line
//     getPotions() {
//     return this.potions;
// },
// addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
// },
// removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
// },
// updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
// },
//   // Change code above this line
// };


// Решение:
// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === potionName) {
//                 this.potions.splice(i, 1);
//             }
//         }
//     },
//     updatePotionName(oldName, newName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === oldName) {
//                 this.potions[i].name = newName;
//             }
//         }
//     }
//     // Change code above this line
// };

// Повтор:
// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }

//         } this.potions.push(newPotion);
//         return this.potions;
//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === potionName) {
//                 this.potions.splice(i, 1);
//             }
//         }
//         return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//             }
//         }
//         return this.potions;
//     },
//     // Change code above this line
// };


// //     getPotions() - метод для получения всех зелий.Возвращает значение свойства potions.
// //         addPotion(newPotion) - добавляет зелье newPotion(уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре.В противном случае возвращается строка.
// //             removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// //                 updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья с названием oldName на newName в массиве potions.

// // Объявлена переменная atTheOldToad
// // Значение переменной atTheOldToad это объект
// // Значение свойства atTheOldToad.getPotions это метод объекта
// console.log(atTheOldToad.getPotions()); // для исходного объекта возвращает[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// // Значение свойства atTheOldToad.addPotion это метод объекта.
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))  // в массиве potions последним элементом будет этот объект
// // console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));  // в массиве potions последним элементом будет этот объект
// // // // Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода
// // // // Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));// массив potions не изменяется
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })) // массив potions не изменяется
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })) // возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })) // возвращает строку "Error! Potion Stone skin is already in your inventory!"

// Значение свойства atTheOldToad.removePotion это метод объекта
// console.log(atTheOldToad.removePotion("Dragon breath")) // в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
// console.log(atTheOldToad.removePotion("Speed potion")); // в свойстве potions будет массив[{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// console.log(atTheOldToad.removePotion("Speed skin"))//

// Значение свойства atTheOldToad.updatePotionName это метод объекта
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); // в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 }]
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")); // в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 }]




// МОДУЛЬ 4.

// Модуль 4. Задача 1

// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;


// Объявлена функция makePizza
// Объявлена переменная result
// Значение переменной result это строка "Your pizza is being prepared, please wait."
// Значение переменной result получено с помощью вызова функции
// Объявлена переменная pointer
// Значение переменной pointer это ссылка на функцию makePizza


// Модуль 4. Задача 2

// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром(параметр callback) колбэк - функцию и возвращала ее вызов.Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     // return callback(pizzaName);
//     console.log(callback(pizzaName));
// }

// // Объявлена функция deliverPizza
// // Объявлена функция makePizza
// // Объявлена функция makeMessage
// // Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback
// makeMessage("Royal Grand", makePizza) // возвращает строку "Pizza Royal Grand is being prepared, please wait..."
// makeMessage("Ultracheese", deliverPizza) // возвращает строку "Delivering Ultracheese pizza."


// Модуль 4. Задача 3

// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк - функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`)
// });

// Объявлена функция makePizza
// Функция makePizza принимает два параметра
// Вторым аргументом при вызове makePizza("Ultracheese") передана функция eatPizza с единственным параметром pizzaName


// Модуль 4. Задача 4

// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, makePizza, onOrderError) {
//         if (pizzaPalace.pizzas.includes(pizzaName)) {
//             return makePizza(pizzaName);
//         }
//         return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     // return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//     console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
// }

// // Callback for onError
// function onOrderError(error) {
//     // return `Error! ${error}`;
//     console.log(`Error! ${error}`);
// }

// // Method calls with callbacks
// // pizzaPalace.order('Smoked', makePizza, onOrderError);
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// // pizzaPalace.order('Big Mike', makePizza, onOrderError);
// // pizzaPalace.order('Vienna', makePizza, onOrderError);

// // Метод order объявляет три параметра
// pizzaPalace.order("Smoked", makePizza, onOrderError) //возвращает "Your order is accepted. Cooking pizza Smoked."
// pizzaPalace.order("Four meats", makePizza, onOrderError) //возвращает "Your order is accepted. Cooking pizza Four meats."
// pizzaPalace.order("Big Mike", makePizza, onOrderError) //возвращает "Error! There is no pizza with a name Big Mike in the assortment."
// pizzaPalace.order("Vienna", makePizza, onOrderError) //возвращает "Error! There is no pizza with a name Vienna in the assortment."


// Модуль 4. Задача 5

// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     orderedItems.forEach(function (number) {
//         totalPrice += number;
//     });

//     // Change code above this line
//     return totalPrice;
// }

// // Объявлена функция calculateTotalPrice(orderedItems)
// // Для перебора массива orderedItems использован метод forEach
// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 6
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     })

//     // Change code above this line
//     return filteredNumbers;
// }

// // Объявлена функция filterArray(numbers, value)
// // Для перебора массива numbers использован метод forEach
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает[24, 41, 76]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 7
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     firstArray.forEach(function (number) {
//         if (secondArray.includes(number)) {
//             commonElements.push(number);
//         }
//     })

//     return commonElements;
//     // Change code above this line
// }

// // Объявлена функция getCommonElements(firstArray, secondArray)
// // Для перебора параметра(массива) использован метод forEach
// console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает[]
// // Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 8
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     // Change code above this line
//     return quantity * pricePerItem;
// }

// // Объявлена переменная calculateTotalPrice
// // Переменной calculateTotalPrice присвоена стрелочная функция с параметрами(quantity, pricePerItem)
// console.log(calculateTotalPrice(5, 100)); // возвращает 500
// console.log(calculateTotalPrice(8, 60)); // возвращает 480
// console.log(calculateTotalPrice(3, 400)); // возвращает 1200
// // Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 9
// // Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// // Объявлена переменная calculateTotalPrice
// // Переменной calculateTotalPrice присвоена стрелочная функция с параметрами(quantity, pricePerItem)
// // В функции использован неявный возврат
// console.log(calculateTotalPrice(5, 100)); // возвращает 500
// console.log(calculateTotalPrice(8, 60)); // возвращает 480
// console.log(calculateTotalPrice(3, 400)); // возвращает 1200
// // Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 10
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.

// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach(item => totalPrice += item);

//     return totalPrice;
// }
// // Change code above this line

// // Объявлена переменная calculateTotalPrice
// // Переменной calculateTotalPrice присвоена стрелочная функция с параметром(orderedItems)
// // Для перебора массива orderedItems использован метод forEach
// // Коллбек для метода forEach это стрелочная функция
// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 11
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// }

// // Объявлена переменная filterArray
// // Переменной filterArray присвоена стрелочная функция с параметрами(numbers, value)
// // Для перебора массива numbers использован метод forEach
// // Коллбек для метода forEach это стрелочная функция
// // Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает[24, 41, 76]
// // Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 12
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Change code above this line
//     return commonElements;
// }

// // - Объявлена переменная getCommonElements.
// // Переменной getCommonElements присвоена стрелочная функция с параметрами(firstArray, secondArray)
// // Для перебора массива firstArray использован метод forEach
// // Коллбек для метода forEach это стрелочная функция
// console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает[]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 13

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// Условие:
// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// Решение:
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [...numbers];
//   for (let i = 0; i < newArray.length; i += 1) {
//     if (newArray[i] % 2 === 0) {
//       newArray[i] = newArray[i] + value;
//     }
//     }
//     console.log(newArray);
//   return newArray;
//   // Change code above this line
// }

// Объявлена функция changeEven(numbers, value)
// Функция changeEven не изменяет значение параметра numbers
// changeEven([1, 2, 3, 4, 5], 10); // возвращает новый массив[1, 12, 3, 14, 5]
// changeEven([2, 8, 3, 7, 4, 6], 10) // возвращает новый массив[12, 18, 3, 7, 14, 16]
// changeEven([17, 24, 68, 31, 42], 100) // возвращает новый массив[17, 124, 168, 31, 142]
// changeEven([44, 13, 81, 92, 36, 54], 100) // возвращает новый массив[144, 13, 81, 192, 136, 154]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 14

// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// Условие:
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets;

// //Решение:
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet)=> planet.length);

// Объявлена переменная planets
// Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
// Объявлена переменная planetsLengths
// Значение переменной planetsLengths это массив [5, 4, 6, 6]
// Для перебора массива планет использован метод map()


// Модуль 4. Задача 15


// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

// Условие:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books;


// Решение:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book=> book.title);

// Объявлена переменная books
// Значение переменной books это массив
// Объявлена переменная titles
// Значение переменной titles это массив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебора массива books используется метод map() как чистая функция


// Модуль 4. Задача 16

// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// Условие:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books;

// //Решение:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);


// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная genres
// Значение переменной genres это массив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебора массива books используется метод flatMap()


// Модуль 4. Задача 17

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // Условие:
// Change code below this line
// const getUserNames = users => {
//   };
  // Change code above this line


// Решение (вариант 1):
// Change code below this line
// const getUserNames = users => users.map(user => user.name);
  // Change code above this line

// Решение (вариант 2):
  // Change code below this line
// const getUserNames = users => { return users.map(user=> user.name);
// };
  // Change code above this line

  // Решение 3 (VSC):
//   const getUserNames = users.map(user => user.name);
// console.log(getUserNames);
  
// Объявлена переменная getUserNames

// Переменной getUserNames присвоена стрелочная функция с параметром (users).

// Для перебора параметра users используется метод map()

// Вызов функции с указанным массивом пользователей возвращает массив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 18

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// // Условие:
// // Change code below this line
// const getUserEmails = users => {
//   };
//   // Change code above this line

// Решение:
// Change code below this line
// const getUserEmails = users => { return users.map(user=>user.email);
  // };
  // Change code above this line

// Объявлена переменная getUserNames
// Переменной getUserNames присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод map()
// Вызов функции с указанным массивом пользователей возвращает массив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 19

// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// // Условие:
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// const evenNumbers = numbers;
// const oddNumbers = numbers;

// // Решение:
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// const evenNumbers = numbers.filter(number => {if (number%2===0) return number});
// const oddNumbers = numbers.filter(number =>{if (number%2!==0) return number});

// Объявлена переменная numbers
// Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Объявлена переменная evenNumbers
// Значение переменной evenNumbers это массив [24, 82, 36, 18, 52]
// Объявлена переменная oddNumbers
// Значение переменной oddNumbers это массив [17, 61, 47, 73]
// Для перебора массива numbers использован метод filter()


// Модуль 4. Задача 20

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];

// // Решение:
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
// console.log(uniqueGenres);

// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная allGenres
// Значение переменной allGenres это массив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Объявлена переменная uniqueGenres
// Значение переменной uniqueGenres это массив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для вычисления значения переменной allGenders использован метод flatMap()
// Для вычисления значения переменной uniqueGenres использован метод filter()


// Модуль 4. Задача 21

// Используя метод filter() дополни код так, чтобы:

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book=>book.author === AUTHOR);
// console.log(booksByAuthor);


// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная MIN_RATING
// Значение переменной MIN_RATING это число 8
// Объявлена переменная AUTHOR
// Значение переменной AUTHOR это строка "Bernard Cornwell"
// Объявлена переменная topRatedBooks
// Значение переменной topRatedBooks это массив книг с рейтингов выше 8
// Объявлена переменная booksByAuthor
// Значение переменной booksByAuthor это массив книг автор которых "Bernard Cornwell"
// Для перебора массива books использован метод filter()


// Модуль 4. Задача 22

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Условие:
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//  };
// // Change code above this line

// // Решение:
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {return users.filter(user=>user.eyeColor === color);
// };
// Change code above this line

// Объявлена переменная getUsersWithEyeColor
// Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color)
// Для перебора параметра users используется метод filter()
// Если значение параметра color это "blue", функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr
// Если значение параметра color это "green", функция возвращает массив объектов пользователей с именами Ross Vazquez и Elma Head
// Если значение параметра color это "brown", функция возвращает массив объектов пользователей с именами Blackburn Dotson и Sheree Anthony
// Если значение параметра color это любая другая строка, функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 23

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
// };
// // Change code above this line

// // Решение:

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => { return users.filter(user=>user.age>minAge && user.age<maxAge);
// };
// // Change code above this line

// Объявлена переменная getUsersWithAge
// Переменной getUsersWithAge присвоена стрелочная функция с параметрами (users, minAge, maxAge)
// Для перебора параметра users используется метод filter()
// Если значение параметров minAge и maxAge равны 20 и 30 соотвественно, функция возвращает массив объектов пользователей с именами Ross Vazquez, Elma Head и Carey Barr
// Если значение параметров minAge и maxAge равны 30 и 40 соотвественно, функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Если значение параметров minAge и maxAge равны 80 и 100 соотвественно, функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 24

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName.Массив друзей пользователя хранится в свойстве friends.

//Условие:
// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
// };
// Change code above this line

// Решение:

// Change code below this line
// const getUsersWithFriend = (users, friendName) => { return users.filter(user=>user.friends.includes(friendName));
// };
// Change code above this line


// Объявлена переменная getUsersWithFriend
// Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName)
// Для перебора параметра users используется метод filter()
// Если значение параметра friendName это строка "Briana Decker", функция возвращает массив объектов пользователей с именами Sharlene Bush и Sheree Anthony
// Если значение параметра friendName это строка "Goldie Gentry", функция возвращает массив объектов пользователей с именами Elma Head и Sheree Anthony
// Если значение параметра friendName это строка "Adrian Cross", функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 25

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// // Условие:
// // Change code below this line
// const getFriends = (users) => {
// };
// // Change code above this line

// Решение:

// // Change code below this line
// const getFriends = (users) => { return users.flatMap(user=>user.friends).filter((friend, index, array)=> array.indexOf(friend)===index);
// };
// // Change code above this line


// Объявлена переменная getFriends
// Переменной getFriends присвоена стрелочная функция с параметром (users)
// Вызов функции с указанным массивом пользователей возвращает массив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 26

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// //Условие:

// // Change code below this line
// const getActiveUsers = (users) => {
// };
// // Change code above this line

// //Решение:

// // Change code below this line
// const getActiveUsers = (users) => { return users.filter(user=>user.isActive);
// };
// // Change code above this line


// Объявлена переменная getActiveUsers Переменной getActiveUsers присвоена стрелочная функция с параметром users
// Для перебора параметра users используется метод filter()
// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 27

// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// //Условие:
  
// // Change code below this line
// const getInactiveUsers = (users) => {
// };
// // Change code above this line

// //Решение:

// // Change code below this line
// const getInactiveUsers = (users) => {return users.filter(user=>!user.isActive);
// };
// // Change code above this line


// -Объявлена переменная getInactiveUsers.

// Переменной getInactiveUsers присвоена стрелочная функция с параметром users
// Для перебора параметра users используется метод filter()
// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Moore Hensley, Ross Vazquez и Blackburn Dotson
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 28

// Условие:
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books;
// const bookByAuthor = books;

// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
// Объявлена переменная books
// Значение переменной books это массив
// Объявлена переменная BOOK_TITLE
// Значение переменной BOOK_TITLE это строка "The Dream of a Ridiculous Man"
// Объявлена переменная AUTHOR
// Значение переменной AUTHOR это строка "Robert Sheckley"
// Объявлена переменная bookWithTitle
// Значение переменной bookWithTitle это объект книги с названием выше "The Dream of a Ridiculous Man"
// Объявлена переменная bookByAuthor
// Значение переменной bookByAuthor это объект книги автора "Robert Sheckley"
// Для перебора массива books использован метод find()

// // Решение:

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book=>book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book=>book.author === AUTHOR);


// Модуль 4. Задача 29

// const users =[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.

// // Условие:

// // Change code below this line
// const getUserWithEmail = (users, email) => {
// };
// // Change code above this line

// //Решение:

// // Change code below this line
// const getUserWithEmail = (users, email) => {    return users.find(user=>user.email === email)
// };
// // Change code above this line


// Объявлена функция getUserWithEmail(users, email)

// Для перебора параметра users используется метод find()

// Если значение параметра email это "shereeanthony@kog.com", функция возвращает объект пользователя с именем Sheree Anthony

// Если значение параметра email это "elmahead@omatom.com", функция возвращает объект пользователя с именем Elma Head

// Если значение параметра email это "blackburndotson@furnigeer.com", функция возвращает объект пользователя с именем Blackburn Dotson

// Если в массиве users нет пользователя с почтой из параметра email, функция возвращает undefined

// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 30

// Условие:

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray;
// const eachElementInFirstIsOdd = firstArray;

// const eachElementInSecondIsEven = secondArray;
// const eachElementInSecondIsOdd = secondArray;

// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;

// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
// Объявлена переменная firstArray
// Значение переменной firstArray это массив [26, 94, 36, 18]
// Объявлена переменная secondArray
// Значение переменной secondArray это массив [17, 61, 23]
// Объявлена переменная thirdArray
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18]
// Объявлена переменная eachElementInFirstIsEven
// Значение переменной eachElementInFirstIsEven это буль true
// Объявлена переменная eachElementInFirstIsOdd
// Значение переменной eachElementInFirstIsOdd это буль false
// Объявлена переменная eachElementInSecondIsEven
// Значение переменной eachElementInSecondIsEven это буль false
// Объявлена переменная eachElementInSecondIsOdd
// Значение переменной eachElementInSecondIsOdd это буль true
// Объявлена переменная eachElementInThirdIsEven
// Значение переменной eachElementInThirdIsEven это буль false
// Объявлена переменная eachElementInThirdIsOdd
// Значение переменной eachElementInThirdIsOdd это буль false
// Для перебора массивов использован метод every()

// // Решение:

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number=>number%2===0);
// const eachElementInFirstIsOdd = firstArray.every(number=>number%2!==0);

// const eachElementInSecondIsEven = secondArray.every(number=>number%2===0);
// const eachElementInSecondIsOdd = secondArray.every(number=>number%2!==0);

// const eachElementInThirdIsEven = thirdArray.every(number=>number%2===0);
// const eachElementInThirdIsOdd = thirdArray.every(number=>number%2!==0);


// Модуль 4. Задача 31

// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

// // Условие:

// // Change code below this line
// const isEveryUserActive = (users) => {
// };
// // Change code above this line

// // Решение:

// // Change code below this line
// const isEveryUserActive = (users) => { return users.every(user=>user.isActive);
// };
// // Change code above this line


// Объявлена переменная isEveryUserActive
// Переменной isEveryUserActive присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод every()
// Вызов функции с указанным массивом пользователей возвращает false
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 32

// Условие:

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray;
// const anyElementInFirstIsOdd = firstArray;

// const anyElementInSecondIsEven = secondArray;
// const anyElementInSecondIsOdd = secondArray;

// const anyElementInThirdIsEven = thirdArray;
// const anyElementInThirdIsOdd = thirdArray;

// //Решение:

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(number=> number%2===0);
// const anyElementInFirstIsOdd = firstArray.some(number => number%2!==0);

// const anyElementInSecondIsEven = secondArray.some(number => number%2===0);
// const anyElementInSecondIsOdd = secondArray.some(number => number%2!==0);

// const anyElementInThirdIsEven = thirdArray.some(number => number%2===0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number%2!==0);


// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
// Объявлена переменная firstArray
// Значение переменной firstArray это массив [26, 94, 36, 18]
// Объявлена переменная secondArray
// Значение переменной secondArray это массив [17, 61, 23]
// Объявлена переменная thirdArray
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18]
// Объявлена переменная anyElementInFirstIsEven
// Значение переменной anyElementInFirstIsEven это буль true
// Объявлена переменная anyElementInFirstIsOdd
// Значение переменной anyElementInFirstIsOdd это буль false
// Объявлена переменная anyElementInSecondIsEven
// Значение переменной anyElementInSecondIsEven это буль false
// Объявлена переменная anyElementInSecondIsOdd
// Значение переменной anyElementInSecondIsOdd это буль true
// Объявлена переменная anyElementInThirdIsEven
// Значение переменной anyElementInThirdIsEven это буль true
// Объявлена переменная anyElementInThirdIsOdd
// Значение переменной anyElementInThirdIsOdd это буль true
// Для перебора массивов использован метод some()


// Модуль 4. Задача 33

// Условие:

// Change code below this line
// const isAnyUserActive = users => {
// };
// Change code above this line

// Решение:

// Change code below this line
// const isAnyUserActive = users => { return users.some(user => user.isActive);
// };
// Change code above this line

// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.

// Объявлена функция isAnyUserActive(users)
// Для перебора параметра users используется метод some()
// Вызов функции с указанным массивом пользователей возвращает true
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 34

// Условие:

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes;

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// // Решение:

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number)=> previousValue + number, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// Объявлена переменная players
// Значение переменной players это объект игроков с игровым временем каждого
// Объявлена переменная playtimes
// Значение переменной playtimes это массив [1270, 468, 710, 244]
// Объявлена переменная totalPlayTime
// Значение переменной totalPlayTime это число 2692
// Для перебора массива playtimes используется метод reduce()
// Объявлена переменная averagePlayTime
// Значение переменной averagePlayTime это число 673


// Модуль 4. Задача 35

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players;


// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// Объявлена переменная players
// Значение переменной players это массив объектов игроков
// Объявлена переменная totalAveragePlaytimePerGame
// Значение переменной totalAveragePlaytimePerGame это число 1023
// Для перебора массива players используется метод reduce()

// // Решение:

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((previousValue, player)=> previousValue + player.playtime/player.gamesPlayed, 0);

// console.log(totalAveragePlaytimePerGame);


// Модуль 4. Задача 36

// Условие:
// // Change code below this line
// const calculateTotalBalance = users => {
// };
// // Change code above this line

// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

// Объявлена переменная calculateTotalBalance
// Переменной calculateTotalBalance присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод reduce()
// Вызов функции с указанным массивом пользователей возвращает число 20916
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// // Решение:

// // Change code below this line
// const calculateTotalBalance = users => { return users.reduce((acc, user) => acc + user.balance, 0)
// };
// // Change code above this line


// Модуль 4. Задача 37

// Условие:

// // Change code below this line
// const getTotalFriendCount = users => {
// };
// // Change code above this line

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей(свойство friends) всех пользователей из массива users.

// //Решение:
// // Change code below this line
// const getTotalFriendCount = users => { return users.reduce((total, user)=> total + user.friends.length, 0);
// };
// // Change code above this line

// Объявлена переменная getTotalFriendCount
// Переменной getTotalFriendCount присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод reduce()
// Вызов функции с указанным массивом пользователей возвращает число 14
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 38

// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// // Условие:

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = releaseDates;

// const alphabeticalAuthors = authors;

// Решение:

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log("ascendingReleaseDates = ", ascendingReleaseDates);
// console.log("releaseDates = ", releaseDates);

// const alphabeticalAuthors = [...authors].sort();
// console.log("alphabeticalAuthors = ", alphabeticalAuthors);
// console.log("authors = ", authors);

// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная authors
// Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная alphabeticalAuthors
// Значение переменной alphabeticalAuthors это массив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Использован метод sort()


// Модуль 4. Задача 39

// Условие:

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = releaseDates;

// const descendingReleaseDates = releaseDates;

// // Онлайн библиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

// // Решение:

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b) => b-a);

// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная descendingReleaseDates
// Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Использован метод sort()


// Модуль 4. Задача 40

// Онлайн библиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// // Условие:

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = authors;

// const authorsInReversedOrder = authors;

// // Решение:

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line
// const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));


// Объявлена переменная authors
// Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Объявлена переменная authorsInAlphabetOrder
// Значение переменной authorsInAlphabetOrder это массив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Объявлена переменная authorsInReversedOrder
// Значение переменной authorsInReversedOrder это массив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Использован метод sort()


// Модуль 4. Задача 41

// Условие:

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = books;

// const sortedByReversedAuthorName = books;

// const sortedByAscendingRating = books;

// const sortedByDescentingRating = books;

// // Решение:

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee", rating: 7.94
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell", rating: 8.67
//   },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook)=> firstBook.author.localeCompare(secondBook.author));
// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook)=> secondBook.author.localeCompare(firstBook.author));
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
// console.log(sortedByDescentingRating);


// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
// Объявлена переменная books
// Значение переменной books это исходный массив объектов книг
// Объявлена переменная sortedByAuthorName
// Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке
// Объявлена переменная sortedByReversedAuthorName
// Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора в обратном алфавитном порядке
// Объявлена переменная sortedByAscendingRating
// Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга
// Объявлена переменная sortedByDescentingRating
// Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга
// Для перебора массива books используется метод sort()


// Модуль 4. Задача 42

// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

// // Условие:
// // Change code below this line
// const sortByAscendingBalance = users => {
// };
// // Change code above this line

// // Решение:
// // Change code below this line
// const sortByAscendingBalance = users => { return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// };
// // Change code above this line

// Объявлена переменная sortByAscendingBalance
// Переменной sortByAscendingBalance присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по возрастанию их баланса
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// Для перебора параметра users использован метод sort()


// Модуль 4. Задача 43

// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

// // Условие:

// // Change code below this line
// const sortByDescendingFriendCount = users => {
// };
// // Change code above this line

// // Решение:

// // Change code below this line
// const sortByDescendingFriendCount = users => { return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
// };
// // Change code above this line

// Объявлена переменная sortByDescendingFriendCount
// Переменной sortByDescendingFriendCount присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Для перебора параметра users использован метод sort()
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по убыванию количества их друзей
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 44

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

// // Условие:

// // Change code below this line
// const sortByName = users => {
// };
// // Change code above this line

// // Решение:

// // Change code below this line
// const sortByName = users => { return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
// };
// // Change code above this line

// Объявлена переменная sortByName
// Переменной sortByName присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Для перебора параметра users использован метод sort()
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по имени в алфавитном порядке
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 45

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// // Условие:

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books;

// Решение:

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
// .filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)
// .sort((firstName, secondName) => firstName.localeCompare(secondName));

// console.log(names);

// Объявлена переменная books
// Значение переменной books это исходный массив объектов
// Объявлена переменная MIN_BOOK_RATING
// Значение переменной MIN_BOOK_RATING это число 8
// Объявлена переменная names
// Значение переменной names это массив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Нет объявленых переменных кроме books, MIN_BOOK_RATING и names
// Используется цепочка методов filter, map, sort


// Модуль 4. Задача 46

// // Условие:
// // Change code below this line
// const getNamesSortedByFriendCount = users => {
// };
// // Change code above this line

// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

// Решение:

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//     return [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
// .map(user => user.name)
// };
// // Change code above this line

// Объявлена переменная getNamesSortedByFriendCount
// Переменной getNamesSortedByFriendCount присвоена стрелочная функция с параметром (users)
// В теле функции используется цепочка методов
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает массив ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 47

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей(свойство friends) отсортированный по алфавиту.

// // Условие:
// // Change code below this line
// const getSortedFriends = users => {
// };
// // Change code above this line

// // Решение:

// // Change code below this line
// const getSortedFriends = users => {
//     return [...users].flatMap(user => user.friends)
//     .filter((element, index, array) => array.indexOf(element) === index)
//     .sort((firstName, secondName) => firstName.localeCompare(secondName));
// };
// Change code above this line

// Объявлена переменная getSortedFriends
// Переменной getSortedFriends присвоена стрелочная функция с параметром (users)
// В теле функции используется цепочка методов в правильном порядке
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает массив ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// Модуль 4. Задача 48

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// // Условие:

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
// };
// // Change code above this line

// // Решение:

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => { return users.filter(user => user.gender === gender).reduce((total, user) => total + user.balance, 0);
// };
// // Change code above this line

// Объявлена переменная getTotalBalanceByGender
// Переменной getTotalBalanceByGender присвоена стрелочная функция с параметрами (users, gender)
// В теле функции используется цепочка методов в правильном порядке
// Значение параметра users не изменяется
// Если значение параметра gender это строка "male", функция возвращает число 12053
// Если значение параметра gender это строка "female", функция возвращает число 8863
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение



// МОДУЛЬ 5.

// Модуль 5. Задача 1

// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// // Условие:

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// Решение:

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// // Метод checkPizza объекта pizzaPalace использует this.
// // Метод order объекта pizzaPalace использует this
// console.log(pizzaPalace.order("Smoked")); // возвращает строку "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); // возвращает строку "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); // возвращает строку "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); // возвращает строку "Sorry, there is no pizza named «Viennese»"


// Модуль 5. Задача 2

// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

// Условие:

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return balance;
//   },
//   getDiscount() {
//     return discount;
//   },
//   setDiscount(value) {
//     discount = value;
//   },
//   getOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost - cost * discount;
//     orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// Решение:

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Объявлена переменная customer
// Значение переменной customer это объект со свойствами и методами
// Вызов customer.getDiscount() возвращает текущее значение свойства discount
// Вызов customer.setDiscount(0.15) обновляет значение свойства discount
// Вызов customer.getBalance() возвращает текущее значение свойства balance.
// Вызов customer.getOrders() возвращает текущее значение свойства orders
// Вызов customer.addOrder(5000, "Steak") добавляет "Steak" в массив значений свойства orders и обновляет баланс
// Метод getBalance объекта customer использует this
// Метод getDiscount объекта customer использует this
// Метод setDiscount объекта customer использует this
// Метод getOrders объекта customer использует this
// Метод addOrder объекта customer использует this


// Модуль 5. Задача 3

// Условие:

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// Решение:

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };


// Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.

// Объявлена переменная historyService
// Значение переменной historyService это объект с исходными свойствами и методами
// Вызов historyService.getOrdersLog() возвращает строку с перечислением данных всех заказов из свойства orders
// Вызов historyService.getEmails() возвращает массив всех уникальных почтовых адресов из свойства orders
// Вызов historyService.getOrdersByEmail("solomon@topmail.net") возвращает [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// Вызов historyService.getOrdersByEmail("artemis@coldmail.net") возвращает [{ email: "artemis@coldmail.net", dish: "Pizza" }]
// Метод getOrdersLog объекта historyService использует this
// Метод getEmails объекта historyService использует this
// Метод getOrdersByEmail объекта historyService использует this


// Модуль 5. Задача 4

// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// // Условие:

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = {};

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// // Решение:

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// console.log(parent);
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// Объявлена переменная parent
// Значение переменной parent это объект
// Вызов parent.hasOwnProperty("surname") возвращает true
// Вызов parent.hasOwnProperty("heritage") возвращает true
// Объявлена переменная child
// Значение переменной child это объект
// Вызов child.hasOwnProperty("name") возвращает true
// Обращение к child.name возвращает "Jason"
// Вызов child.hasOwnProperty("age") возвращает true
// Обращение к child.age возвращает 27
// Вызов child.hasOwnProperty("surname") возвращает false
// Обращение к child.surname возвращает "Moore"
// Вызов child.hasOwnProperty("heritage") возвращает false
// Обращение к child.heritage возвращает "Irish"
// Вызов parent.isPrototypeOf(child) возвращает true
// Используется метод Object.create()


// Модуль 5. Задача 5

// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// // Условие:

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = {};
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = {};
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// Решение:

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent) ;
// child.name = "Jason";
// child.age = 27;

// // Change code above this line


// Объявлена переменная ancestor
// Значение переменной ancestor это объект.
// Объявлена переменная parent
// Значение переменной parent это объект.
// Объявлена переменная child
// Значение переменной child это объект.
// Вызов ancestor.isPrototypeOf("parent") возвращает true
// Вызов parent.isPrototypeOf("child") возвращает true
// Вызов ancestor.hasOwnProperty("surname") возвращает true
// Обращение к ancestor.surname возвращает "Dawson"
// Вызов parent.hasOwnProperty("surname") возвращает true
// Обращение к parent.surname возвращает "Moore"
// Вызов child.hasOwnProperty("surname") возвращает false
// Обращение к child.surname возвращает "Moore"
// Вызов ancestor.hasOwnProperty("heritage") возвращает true
// Обращение к ancestor.heritage возвращает "Irish"
// Вызов parent.hasOwnProperty("heritage") возвращает false
// Обращение к parent.heritage возвращает "Irish"
// Вызов child.hasOwnProperty("heritage") возвращает false
// Обращение к child.heritage возвращает "Irish"
// Используется метод Object.create()


// Модуль 5. Задача 6

// Используя ключевое слово class объяви класс Car с пустым телом.

// // Решение:

// class Car {};

// Объявлен класс Car
// Результат вызова new Car() это пустой объект


// Модуль 5. Задача 7

// Добавь классу Car метод constructor который принимает три параметра:
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.

// // Условие:

// class Car {
//   // Change code below this line
//   // Change code above this line
// }

// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// // Решение:

//   class Car {
//   // Change code below this line
//   constructor(brand, model, price){
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// Объявлен класс Car
// У класса Car есть метод constructor
// В результате вызова new Car("Audi", "Q3", 36000) получится объект { brand: "Audi", model: "Q3", price: 36000 }
// В результате вызова new Car("BMW", "X5", 58900) получится объект { brand: "BMW", model: "X5", price: 58900 }
// В результате вызова new Car("Nissan","Murano", 31700) получится объект { brand: "Nissan", model: "Murano", price: 31700 }


// Модуль 5. Задача 8

// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

// // Условие:

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// // Решение:

// class Car {
//   // Change code below this line
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// // Объявлен класс Car
// // У класса Car есть метод constructor
// const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 }) //получится объект { brand: "Audi", model: "Q3", price: 36000 }
// console.log(car1);
// const car2 = new Car({ brand: "BMW", model: "X5", price: 58900 }) //получится объект { brand: "BMW", model: "X5", price: 58900 }
// console.log(car2);
// const car3 = new Car({ brand: "Nissan", model: "Murano", price: 31700 }) // получится объект { brand: "Nissan", model: "Murano", price: 31700 }
// console.log(car3);


// Модуль 5. Задача 9

// Условие:

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   // Change code above this line
// }

// Решение:

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice(){
//     return this.price;
//   }
//   changePrice(newPrice){
//     this.price = newPrice;
//   }
//   // Change code above this line
// }

// Добавь классу Car два метода:
// getPrice() - возвращает значение свойства price из объекта который его будет вызывать,
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// В классе Car объявлен метод getPrice
// Метод getPrice возвращает значение свойства price экземпляра класса который его вызывает
// В классе Car объявлен метод changePrice
// Метод changePrice изменяет значение свойства price экземпляра класса который его вызывает


// Модуль 5. Задача 10

// Условие:

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Объяви следующие методы класса:
// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

//Решение:

// class Storage {
//     constructor(items){
//         this.items = items;
//     }
//     getItems(){
//         return this.items;
//     }
//     addItem(newItem){
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove){
//         this.items = this.items.filter(item=>item!==itemToRemove);
//     }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Объявлен класс Storage
// В классе Storage объявлен метод getItems
// В классе Storage объявлен метод addItem
// В классе Storage объявлен метод removeItem
// Метод getItems возвращает значение свойства items экземпляра класса который его вызывает
// Метод addItem изменяет свойство items экземпляра класса который его вызывает
// Метод removeItem изменяет свойство items экземпляра класса который его вызывает
// В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
// У объекта storage есть свойство items
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
// Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"]


// Модуль 5. Задача 11

// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// // Условие:

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// // Решение:

// class StringBuilder{
//     constructor(initialValue){
//         this.value = initialValue;
//     }
//     getValue(){
//        return this.value;
//     }
//     padEnd(str){
//         this.value = this.value + (str);
//     }
//     padStart(str){
//         this.value = (str) + this.value;
//     }
//     padBoth(str){
//         this.value = (str) + this.value + (str);
//     }
// }
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("Алёна");
// console.log(builder.getValue()); // "^."
// builder.padEnd("истеричка");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// Объявлен класс StringBuilder
// В классе StringBuilder объявлен метод getValue
// Метод getValue возвращает значение свойства value экземпляра класса который его вызывает
// В классе StringBuilder объявлен метод padEnd
// Метод padEnd изменяет свойство value экземпляра класса, который его вызывает
// В классе StringBuilder объявлен метод padStart
// Метод padStart изменяет свойство value экземпляра класса который его вызывает
// В классе StringBuilder объявлен метод padBoth
// Метод padBoth изменяет свойство value экземпляра класса который его вызывает
// В результате вызова new StringBuilder(".") значение переменной builder это объект
// У объекта builder есть свойство value
// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .
// Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.
// Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^
// Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=


// Модуль 5. Задача 12

// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства:
// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

// // Условие:

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// // Решение:

// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand(){
//     return this.#brand;
//   }
//   changeBrand(newBrand){
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }

// // Объявлен класс Car
// // Свойство brand в классе Car объявлено приватным
// // Конструктор класса принимает объект со свойствами brand, model и price
// const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(car1) // получится объект { model: "Q3", price: 36000 }
// const car2 = new Car({ brand: "bmw", model: "X5", price: 58900 });
// console.log(car2); // получится объект { model: "X5", price: 58900 }
// const car3 = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(car3); // получится объект { model: "Murano", price: 31700 }
// // У экземпляра нет публичного свойства brand
// console.log(car1.getBrand()); // возвращает значение приватного свойства brand.
// car2.changeBrand("Honda");
// console.log(car2); // изменяет значение приватного свойства brand на "Honda"


// Модуль 5. Задача 13

// Выполни рефакторинг класса Storage, сделав свойство items приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// // Условие:

// class Storage {
//   // Change code below this line

//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.items = this.items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// Решение:

// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// Объявлен класс Storage
// У объекта storage нет свойства items
// В классе Storage объявлен метод getItems
// В классе Storage объявлен метод addItem
// В классе Storage объявлен метод removeItem
// Свойство items в классе Storage объявлено приватным
// Конструктор класса принимает свойство items
// В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
// Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"]


// Модуль 5. Задача 14

// Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// // Условие:

// class StringBuilder {
//   // Change code below this line

//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// // Решение:

// class StringBuilder {
//   // Change code below this line
// #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// Объявлен класс StringBuilder

// Свойство value в классе StringBuilder объявлено приватным

// В классе StringBuilder объявлен метод getValue

// В классе StringBuilder объявлен метод padEnd

// В классе StringBuilder объявлен метод padStart

// В классе StringBuilder объявлен метод padBoth

// В результате вызова new StringBuilder('.') значение переменной builder это объект

// У объекта builder нет свойства value

// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .

// Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.

// Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^

// Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=


// Модуль 5. Задача 15

// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// // Условие:

// class Car {
//   // Change code below this line
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getModel() {
//     return this.model;
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }

//   getPrice() {
//     return this.price;
//   }

//   setPrice(newPrice) {
//     this.price = newPrice;
//   }
//   // Change code above this line
// }
// // Решение:

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// Объявлен класс Car
// В классе Car объявлено приватное свойство brand
// В классе Car объявлено приватное свойство model
// В классе Car объявлено приватное свойство price
// Конструктор класса принимает объект со свойствами brand, model и price
// В классе Car объявлен геттер brand
// В классе Car объявлен сеттер brand
// В классе Car объявлен геттер model
// В классе Car объявлен сеттер model
// В классе Car объявлен геттер price
// В классе Car объявлен сеттер price


// Модуль 5. Задача 16

// Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

// // Условие:

// class Car {
//   // Change code below this line
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// // Решение:

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {return this.#price}
//     else {return this.#price = newPrice};
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// Объявлен класс Car
// У класса Car есть статическое свойство MAX_PRICE
// Значение статического свойства MAX_PRICE это число 50000
// У экземпляра нет свойства MAX_PRICE
// В классе Car объявлен геттер price
// В классе Car объявлен сеттер price
// Вызов сеттера price у экземпляра класса, со значением аргумента меньше чем значение MAX_PRICE, изменяет свойство #price
// Вызов сеттера price у экземпляра класса, со значением аргумента больше чем значение MAX_PRICE, не изменяет свойство #price


// Модуль 5. Задача 17

// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

// // Условие:

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// // Решение:

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
// static checkPrice(price){
//   if (price > Car.#MAX_PRICE) {
//     return "Error! Price exceeds the maximum";
//   } return "Success! Price is within acceptable limits";
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// Объявлен класс Car
// У класса Car есть статический метод checkPrice(price)
// Вызов Car.checkPrice(36000) возвращает строку "Success! Price is within acceptable limits"
// Вызов Car.checkPrice(18000) возвращает строку "Success! Price is within acceptable limits"
// Вызов Car.checkPrice(64000) возвращает строку "Error! Price exceeds the maximum"
// Вызов Car.checkPrice(57000) возвращает строку "Error! Price exceeds the maximum"


// Модуль 5. Задача 18

// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User
// Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: "basic", SUPERUSER: "superuser" }

// // Условие:

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// // Решение:

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User{
//   static AccessLevel = {
//     BASIC: "basic", SUPERUSER: "superuser"
//   }
// }

// Объявлен класс Admin
// Класс Admin наследует от класса User
// У класса Admin есть публичное статическое свойство AccessLevel
// Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"


// Модуль 5. Задача 19

// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса.

// // Условие:

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// // Решение:

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor({email, accessLevel}){
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


// Объявлен класс Admin
// Класс Admin наследует от класса User
// У класса Admin есть публичное статическое свойство AccessLevel
// У класса Admin есть метод constructor с параметром в виде объекта {email, accessLevel}
// У класса Admin в конструкторе для свойства email используется обращение к конструктору родительского класса
// Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"


// Модуль 5. Задача 20

// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// // Условие:

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// // Решение:

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email){
//     this.blacklistedEmails.push(email);
//   }
  
//   isBlacklisted(email){
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// Объявлен класс Admin
// Класс Admin наследует от класса User
// У класса Admin есть публичное свойство blacklistedEmails
// У класса Admin есть публичный метод blacklist
// У класса Admin есть публичный метод isBlacklisted
// После вызова mango.blacklist("poly@mail.com") значение свойства blacklistedEmails это массив ["poly@mail.com"]
// Вызов mango.isBlacklisted("mango@mail.com") возвращает false
// Вызов mango.isBlacklisted("poly@mail.com") возвращает true