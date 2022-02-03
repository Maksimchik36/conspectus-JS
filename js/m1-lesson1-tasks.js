// Модуль 1. Занятие 1. Переменные, типы и операторы

// Example 1 - Базовые математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.
// const apples = 47;
// const grapes = 135;
// const total = ;
// console.log(total)
// const diff = ;
// console.log(diff)

// Решение:
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)

// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.
// let students = 100;
// students = students + 50;
// console.log(students);

// Решение:
// let students = 100;
// students += 50;
// console.log(students);

// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.
// let value = 27.5;

// // Решение:
// console.log(Math.floor(value)); // округляет вниз
// console.log(Math.ceil(value));  // округляет вверх
// console.log(Math.round(value)); // округляет по правилам математики

// value = 27.3;
// console.log(Math.floor(value)); // округляет вниз
// console.log(Math.ceil(value));  // округляет вверх
// console.log(Math.round(value)); // округляет по правилам математики

// value = 27.9;
// console.log(Math.floor(value)); // округляет вниз
// console.log(Math.ceil(value));  // округляет вверх
// console.log(Math.round(value)); // округляет по правилам математики

// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = ``;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Решение:
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots+defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;
// let weight = '88,3';
// let height = '1.75';

// const bmi = ;
// console.log(bmi); // 28.8

// Решение:
// let weight = '88,3';
// let height = '1.75';
// console.log("weight is", typeof weight);
// console.log("height is", typeof height);
// // 1. Заменить запятую на точку
// weight = weight.replaceAll(",", ".")
// console.log(weight);
// // 2. Преобразовать строку в число
// let modifyWeight = Number(weight);
// let modifyHeight = Number(height);
// console.log("modifyWeight is", typeof modifyWeight);
// console.log("modifyHeight is", typeof modifyHeight);
// // 3. Индекс массы тела округлить до 1 цифры после запятой
// const bmi = modifyWeight / Math.pow(modifyHeight, 2);
// let modifyBmi = bmi.toFixed(1);
// console.log(modifyBmi); // 28.8

// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?
// console.log(5 > 4);
// console.log(10 >= '7'); // если в строке только число, то строка приравнивается значению этого числа
// console.log('2' > '12'); // сравнивает строки посимвольно!?!?!? 2>1
// console.log('2' < '12'); // сравнивает строки посимвольно!?!?!? 2<1
// console.log('4' == 4); // если в строке только число, то строка приравнивается значению этого числа
// console.log('6' === 6); // если в строке только число, то строка приравнивается значению этого числа
// console.log('false' == false); // если строка не пустая, то приравнивается к 1
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false); // если в строке только число, то строка приравнивается значению этого числа
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null);
// console.log(undefined === null);

// Example 8 - Логические операторы
// Каким будет результат выражений?

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue. Проверь работу скрипта для следующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// Решение 1:
// const incomingValue = 5;
// const defaultValue = 10;
// const value = (incomingValue !== null && incomingValue !== undefined) ? incomingValue : defaultValue;
// console.log(value);

// Решение 2 с использованием оператора нулевого слияния ?? (nullish coalescing operator):
// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// Example 10 - Оперaтор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// Решение:
// const totalMinutes = 1441;
// const hours = Math.floor(totalMinutes / 60);
// console.log(hours);
// const minutes = totalMinutes % 60;
// console.log(minutes);
// const modifyHours = String(hours).padStart(2, "0");
// const modifyMinutes = String(minutes).padStart(2, "0");
// console.log(`${modifyHours}:${modifyMinutes}`);
