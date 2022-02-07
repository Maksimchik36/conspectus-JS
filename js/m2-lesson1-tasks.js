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

const values = '8 11';
let arr = Array(values);

console.log(arr);
// for (let value of values) {
    
// }

// console.log(area);