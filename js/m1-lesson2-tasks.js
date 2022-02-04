// Модуль 1. Занятие 2. Ветвления.Циклы

// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?".Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// // Решение:
// let userInput = prompt("Какое официальное название JavaScript?");
// if (userInput === "ECMAScript") {
//     console.log("Верно!");
// } else
//     console.log("Не знаете? ECMAScript!");

// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 26;
// let time;
// if (minutes > 0) {
//     time = `${hours} ч. ${minutes} мин.`;
// } else
//     time = `${hours} ч.`;
// console.log(time)

// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи в консоль строку "Это ноль".Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// Решение:
// const userInput = prompt("Введите число");
// let message;
//  if (userInput > 0) {
//     message = "это положительное число";
// } else if (userInput < 0) {
//     message = "это отрицательное число";
// } else message = "это ноль";
// console.log(`${userInput} - ${message}`);

// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.Если оба значения больше 100, то выведи в консоль максимальное из них.В противном случае в консоли должна быть сумма значения b и числа 512.

// Решение 1:
// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a);
//     } else console.log(b)
// } else console.log(b + 512);

// Решение 2:
// const a = 120;
// const b = 180;
// let message;
// if (a > 100 && b > 100) {
//     if (a > b) {
//         message = a;
//     } else message = b;
// } else message = b + 512;
// console.log(message);

// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки
// if (link.endsWith("/")) {
// } else link += "/";

// // Пиши код выше этой строки
// console.log(link);

// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию if...else.

// Решение:
// let link = 'https://somesite.com/about';
// // Пиши код ниже этой строки
// if (link.includes("my-site")) {
//     if (link.endsWith("/")) {
//     }
//     else link += "/";
// }
// // Пиши код выше этой строки
// console.log(link);

// Решение в задачнике:
//  let link = 'https://somesite.com/about';
// // Пиши код ниже этой строки
// if (link.includes("my-site") && !link.endsWith("/")) {
//     link += "/";
// }
// // Пиши код выше этой строки
// console.log(link);


// ------------------- ВОПРОС ПО УСЛОВИЮ -------------------------

// Example 7 - Форматирование ссылки (тернарный оператор)
// // Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.
// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);


// Решение 4 задания:

// const a = 120;
// const b = 180;
// let message;
// if (a > 100 && b > 100) {
//     if (a > b) {
//         message = a;
//     } else message = b;
// } else message = b + 512;
// console.log(message);

//Попытка использовать тернарник:
// const a = 120;
// const b = 180;
// let message;
// message = a > 100 && b > 100 ? a > b : b + 512;
// console.log(message);

// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"
// const hours = 10;

// Решение:
// const hours = 10;
// let message;
// if (hours < 17) {
//     message = "Pending";
// } else if (hours >= 17 && hours <= 24) {
//     message = "Expires";
// } else message = "Overdue";
// console.log(message);

// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
// const daysUntilDeadline = 5;
// Пиши код ниже этой строки

// Решение:
// const daysUntilDeadline = 5;
// let message;
// if (daysUntilDeadline === 0) {
//     message = "Сегодня";
// } else if (daysUntilDeadline === 1) {
//     message = "Завтра";
// }
// else if (daysUntilDeadline === 2) {
//     message = "Послезавтра";
// } else message = "Дата в будущем";
// console.log(message);

// ------------------ ВОПРОС ПО УСЛОВИЮ --------------------

// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// Решение:
// const daysUntilDeadline = 3;
// let message;
// switch (daysUntilDeadline) {
//     case 0:
//         message = 'Сегодня';
//         break;
//     case 1:
//         message = 'Завтра';
//         break;
//     case 2:
//         message = 'Послезавтра';
//         break;
//     default:
//         message = 'Дата в будущем';
// }
// console.log(message);

// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.
// const max = 100;
// const min = 20;

//Решение:
// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 1){
//     if (i % 5 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// Решение:
// let loginInput = prompt("Введите Ваш логин");
// if (loginInput === "Админ") {
//     let passwordInput = prompt("Введите Ваш пароль");
//     if (passwordInput === "Я админ") {
//         console.log("Здравствуйте!");
//     } else console.log("Неверный пароль");
// } else if (loginInput === null || loginInput === undefined) {
//     console.log("Отменено");
// }
// else console.log("Я Вас не знаю")
    
