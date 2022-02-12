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