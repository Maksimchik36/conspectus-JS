//https://github.com/goitacademy/js-instructor-examples

// Модуль 2. Занятие 3. Массивы

// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

// const genres = ["Jazz", "Blues", "Popsa", "Chanson"];
// console.log(genres);
// genres.push("Рок-н-ролл");
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.splice(0, 1));
// genres.splice(0, 0, "Country", "Reggy");
// console.log(genres);

// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';
// let arr = values.split(" ");//преобразовать в число
// console.log(arr);
// let area = arr[0] * arr[1];
// console.log(area);

// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (i = 0; i < fruits.length; i += 1)
// {
//     console.log(i+1, fruits[i]);
// }

// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const arrNames = names.split(",");
// const arrPhones = phones.split(",");
// for (let i = 0; i < arrNames.length; i += 1){
//     console.log(arrNames[i], "-", arrPhones[i]);
// }

// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';

// let arr = string.split(" ");
// console.log(arr);
// let result = arr.slice(1, length - 1);
// result = result.join(" ");
// console.log(result);

// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// посмотреть пример

// const string = 'Welcome to the future';
// let newString = "";
// for (let i = string.length - 1; i >= 0; i -= 1){
//     newString = newString.concat(string[i]);
// }
// console.log(newString)

// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.


// пример посмотреть

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs.sort());

// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// посмотреть пример

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (let i = 1; i < numbers.length; i += 1){
//     if (min > numbers[i]) {
//         min = numbers[i];
//     } else
//     continue;
// }
// console.log("result:", min); // 1

























//FREELANSER ПО ЖИЗНИ
//Задача 1
// Какое число(длину) мы получим ?
    
// let arr = ["Ваня", "Иштван", "Оля",];
// let newArr = arr;
// newArr.push("Петя");
// console.log(arr.length); // - 4

// Задача 2






















