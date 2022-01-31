// // Переменные объявленные как const обязательно должны быть инициализированы
// // значением во время объявления, иначе будет ошибка.
// const yearOfBirth = 2006;
// console.log(yearOfBirth); // 2006

// // Если переменная объявлена как const, перезаписать ее значение нельзя.
// // При попытке присвоить новое значение будешь ошибка выполнения скрипта.
// yearOfBirth = 2020; // ❌ Неправильно, будет ошибка

// // Переменным объявленным через let не обязательно сразу присваивать значение.
// let age;

// // Если переменной объявленной как let изначально не присвоено значение,
// // она инициализируется специальным значением undefined (не определено).
// console.log(age); // undefined

// // console.log() это метод для вывода данных в консоль браузера,
// // более детально с ним познакомимся позже.

// // Если переменная объявлена как let, её значение можно перезаписать.
// age = 14;
// console.log(age); // 14

// Имена КОНСТАНТ - переменных, значение которых не изменяется никогда на протяжении работы всего скрипта, обычно записываются в формате UPPER_SNAKE_CASE.

// // Константа хранящая значение цвета
// const COLOR_TEAL = "#009688";

// // Константа хранящая сообщение о результате логина
// const LOGIN_SUCCESS_MESSAGE = "Добро пожаловать!";

// let username;
// console.log(username); // undefined - НЕОПРЕДЕЛЕННАЯ

// // ❌ Неправильно, будет ошибка
// age = 15; // ReferenceError: Cannot access 'age' before initialization
// console.log(age); // ReferenceError: age is not defined - НЕОБЪЯВЛЕННАЯ (ОТСУТСТВУЕТ LET ЛИБО CONST)

// // Объявление переменной age
// let age = 20;

// // ✅ Правильно, обращаемся после объявления
// age = 25;
// console.log(age); // 25

// Оператор typeof используется для получения типа значения переменной. Возвращает на место своего вызова тип значения переменной указанного после него - строку в которой указан тип.
// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// Для вывода данных есть два метода: console.log() и alert(). В круглых скобках указываем имя переменной, значение которой необходимо вывести.

// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!
// Можно сначала указать какую-то описательную строку, после чего поставить запятую и указать имя переменной.

// const username = "Mango";
// console.log("Username is ", username); // Username is Mango
// Метод alert() выводит модальное окно, текст которого соответствует значению переменной (или литерала) которую передадим в скобках.

// const message = "JavaScript is awesome!";
// alert(message);

// Для получения данных от пользователя есть prompt() и confirm(). Это тоже методы из интерфейса window. Результатом своего выполнения они возвращают то, что было введено пользователем, поэтому результат их работы можно записать в переменную для дальнейшего использования.

// confirm() - выводит модальное окно с сообщением, и две кнопки, Ok и Cancel. При нажатии на Ok, результатом будет true, при нажатии на Cancel - возвращается false.

// // Просим клиента подтвердить бронь на отель
// // и сохраняем в переменную результат работы confirm
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);
// prompt() - выводит модальное окно с полем ввода и кнопками Ok и Cancel. При нажатии Ok, результатом будет то, что ввел пользователь, при Cancel - возвращается null.

// // Спрашиваем имя отеля в котором хотел бы остановится клиент
// // и сохраняем в переменную результат вызова prompt.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);
// Важная особенность prompt в том, что не зависимо что ввел пользователь, всегда вернется строка. То есть, если пользователь ввел 5, то вернется не число 5, а строка "5".

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// Основные операторы
// Математические операторы
// Назначение, функционал и приоритет (порядок) операций ничем не отличаются от школьного курса алгебры. Операторы возвращают значение как результат выражения.

// const x = 10;
// const y = 5;

// // Сложение
// console.log(x + y); // 15

// // Вычитание
// console.log(x - y); // 5

// // Умножение
// console.log(x * y); // 50

// // Деление
// console.log(x / y); // 2

// // Остаток от деления
// console.log(x % y); // 0

// // Сложение с заменой (также есть для всех других операторов)
// let value = 5;

// // Аналогично записи value = value + 10;
// value += 10;
// console.log(value); // 15
// ИНТЕРЕСНО
// Важно запомнить термины составляющих выражения. + - * / % называются операторы, а то на чем они применяются - операнды.

// Операторы сравнения
// Используются для сравнения двух значений. Результатом своего выполнения возвращают буль - true или false, то есть «да» или «нет».

// a > b и a < b - больше/меньше
// a >= b и a <= b - больше/меньше или равно
// a == b - равенство
// a != b - неравенство
// a === b - строгое равенство
// a !== b - строгое неравенство
// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// Операторы равенства
// «Нестрогие» операторы равенства == и != выполняют преобразование типов сравниваемых значений к числу, что может привести к ошибкам, особенно у начинающих.

// // ❌ Плохо, выполняется приведение типов
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false

// Поэтому для проверки равенства или неравенства двух значений используются только операторы === (строгое равенство) и !== (строгое неравенство), которые не выполняют приведение типов операндов.

// // ✅ Хорошо, приведение типов не выполняется
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

// Приведение к числу
// Большинство арифметических операций и математических функций преобразуют значение в число автоматически. Для того чтобы сделать это явно, используйте функцию Number(val), передавая ей в val то, что надо привести к числу.

// Если значение не возможно привести к числу, результатом будет специальное числовое значение NaN (Not a Number). Аналогичным образом происходит преобразование и в других математических операторах и функциях.

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// Методы Number.parseInt() и Number.parseFloat()
// Преобразуют строку символ за символом, пока это возможно. При возникновении ошибки возвращается число, которое получилось.

// Метод Number.parseInt() парсит из строки целое число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN
// Метод Number.parseFloat() парсит из строки дробное число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// Проверка на число
// Для проверки на число можно использовать метод Number.isNaN(val). Он проверяет, является ли указанное значение NaN или нет. Метод отвечает на вопрос "Это Not A Number?" и возвращает:

// true - если значение val это NaN
// false - если значение val это не NaN
// Для всех значений val кроме NaN, при передаче в Number.isNaN(val) вернёт false. Этот метод не производит попытку преобразовать val к числу, а просто выполняет проверку на NaN.

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// Сложение чисел с плавающей точкой
// При сложении не целых чисел в JavaScript и других языках программирования, есть особенность. Если кратко, то 0.1 + 0.2 не равно 0.3, результат сложения больше чем 0.3. Все от того что машина считает в двоичной системе.

// Число 0.1 в двоичной системе счисления - это бесконечная дробь, так как единица на десять в двоичной системе не делится. Двоичное значение бесконечных дробей хранится только до определенного знака, поэтому возникает неточность. При сложении 0.1 и 0.2, две неточности складываются, получается незначительная, но всё же ошибка в вычислениях.

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004
// Конечно, это не означает, что точные вычисления для таких чисел невозможны. Есть несколько методов решения этой проблемы.

// Можно сделать их целыми, умножив на N, сложить, а потом результат разделить также на N.

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41
// Еще один способ - сложить, а результат отсечь до определённого знака после запятой при помощи метода toFixed().

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// Класс Math
// Один из встроенных классов, который предоставляет набор методов для работы с числами. Знание всех методов наизусть не требуется, только некоторых, наиболее полезных.

// // Math.floor(num) - возвращает наибольшее целое число,
// // меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа,
// // округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

// Строки
// Важно помнить, что индексация элементов строки начинается с нуля.
// Конкатенация строк
// Если применить оператор + к строке и любому другому типу данных, результатом операции «сложения» будет строка. Эта операция называется конкатенация, или сложение строк.

// Во время конкатенации, любой тип данных приводится к строке и сшивается со строкой, но есть особенность - последовательность записи операндов.

// Последовательность операций имеет значение, преобразование типов происходит только в момент операции сложения со строкой, до этого момента действуют привычные правила математики.

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy
// Посмотрим на разный порядок операндов.

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"
// В последнем примере произошла математическая операция сложения для первых двух чисел 1 и 2, после чего число 3 было преобразовано в строку "3" и сшито со строкой "4".

// Шаблонные строки
// Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом. Шаблонная строка заключена в обратные (косые) кавычки вместо двойных или одинарных и может содержать местозаполнители, которые обозначаются знаком доллара и фигурными скобками - ${выражение}.

// // Используя переменные необходимо составить строку с подставленными значениями
// const guestName = "Манго";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"
// Составлять строки с подставляемыми значениями используя конкатенацию очень неудобно. На помощь приходят шаблонные строки и интерполяция.

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// Свойства и методы строк
// Свойство length - длина строки
// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47

// Методы toLowerCase() и toUpperCase()
// Возвращают новую строку в соответствующем регистре, не изменяя оригинальную строку.
// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// Либо переназначить с именем другой переменной
// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// Метод indexOf()
// Возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено.

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// Метод includes()
// Проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

// const productName = "Ремонтный дроид";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроид")); // true
// console.log(productName.includes("Дроид")); // false
// console.log(productName.includes("Ремонтный")); // true
// console.log(productName.includes("ремонтный")); // false
// ИНТЕРЕСНО
// Все методы строк чувствительны к регистру.

// Метод endsWith()
// Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая true или false.

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// Методы replace() и replaceAll()
// Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll) подстроки заменены на указанное значение.

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// Метод slice()
// Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

