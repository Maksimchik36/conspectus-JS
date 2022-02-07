
//--------------------------- ЗАНЯТИЕ 1

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
// console.log(typeof hotelName);
// console.log(Number(hotelName));
// let modifyHotelName = Number(hotelName);
// console.log(typeof modifyHotelName)
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
// console.log(typeof valueA);

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"
// console.log(typeof valueB);

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
// В нашем примере - сгенерировать случайное число в диапазоне от a до b;
// let a; - минимальное значение диапазона;
// let b; - максимальное значение диапазонаж
// console.log(Math.random() * (b - 1) + a);
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

// Логические операторы
// Приведение типов
// Запомните 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании: 0, NaN, null, undefined, пустая строка и false. Абсолютно все остальное приводится к true.

// Логические операторы
// Есть три логических оператора, которые используются для проверки выполнения множественных выражений:
// and(&&), or(||) и not(!).

// Логическое «И»
// Оператор && приводит все операнды к булю и возвращает значение одного из них. Левый операнд если его можно привести к false, и правый в остальных случаях.
// выражение && выражение

// В следующем примере оба условия вернут true, поэтому результатом всего выражения будет true - вернётся значение правого операнда.
// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

// Если хотябы один из операндов будет приведён к false, результатом выражения будет его значение.
// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

// То есть логическое «И» запинается на лжи и возвращает то на чём запнулось или последний операнд.
// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// Логическое «ИЛИ»
// Оператор || приводит все операнды к булю и возвращает значение одного из них. Левый операнд если его можно привести к true, и правый в остальных случаях.
// выражение || выражение

// В следующем примере условие слева вернёт true, поэтому результатом всего выражения будет true - вернётся значение первого операнда которое было приведено к true.
// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

// Тут результатом тоже будет true, так как хотябы один из операндов, в этом случае правый, был приведён к true.
// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

// А здесь ни одно из условий не выполняется, поэтому получаем false - значение последнего операнда.
// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// То есть логическое «ИЛИ» запинается на правде и возвращает то на чём запнулось или последний операнд.
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true
// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// Логическое «НЕ»
// Все операторы которые мы рассматривали до этого были бинарными - содержащими два операнда, левый и правый. Логическое «НЕ» это унарный оператор - выполняющий операцию над одним операндом справа.
// !выражение

// Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false


//----------------------------------- ЗАНЯТИЕ 2

// Ветвления
// Инструкция if
// Входные данные, которые приводятся к булю называются условием. Условие помещают за оператором if в круглых скобках. Если условие приводится к true, то выполняется код в фигурных скобках тела if.

// let cost = 0;
// const subscription = "pro";
// if (subscription === "pro") {
//   cost = 100;
// }
// console.log(cost); // 100

// Если условие приводится к false, код в фигурных скобках будет пропущен.
// let cost = 0;
// const subscription = "free";
// if (subscription === "pro") {
//   cost = 100;
// }
// console.log(cost); // 0

// Инструкция if...else
// Расширяет синтаксис if тем, что в случае если условие приводится к false, выполнится код в фигурных скобках после оператора else.
// let cost;
// const subscription = "free";
// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); // 0

// Если условие приводится к true, тело блока else игнорируется.
// let cost;
// const subscription = "pro";
// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); // 100

// Инструкция else...if
// Блок else...if позволяет добавить после else еще один оператор if с условием. В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.
// let cost;
// const subscription = "premium";
// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }
// console.log(cost); // 500

// При первом же true проверки прекратятся и выполнится только один сценарий, соответствующий этому true.Поэтому подобную запись следует читать как: ищу первое совпадение условия, игнорирую все остальное.

// Тернарный оператор
//     < условие > ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно>
// Работает по такой схеме:

// Вычисляется условие.
// Если условие истинно, то есть приводится к true, вычисляется выражение после ?.
// Если условие ложно, то есть приводится к false, вычисляется выражение после :.
// Значение вычисленного выражения возвращается как результат работы тернарного оператора.
    
// let type;
// const age = 20;
// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }
// console.log(type); // "adult"

// Выполним рефакторинг заменив if...else тернарным оператором.
// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"
    
// Запишем операцию поиска большего числа.
// const num1 = 5;
// const num2 = 10;
// let biggerNumber;
// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }
// console.log(biggerNumber); // 10

// Код работает верно, получаем большее число из двух, но это решение кажется слишком громоздким, учитывая, насколько проста проблема. Используем тернарный оператор.
// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;
// console.log(biggerNumber); // 10

// Инструкция switch
// Область применения switch ограничена задачами с одним общим вопросом(что сравнивать) и множеством вариантов ответов(с чем сравнивать).
// Его синтаксис состоит из блока switch(значение) - что нужно сравнить и множества отдельных случаев case значение - с чем нужно сравнить. Для сравнения используется оператор строгого равенства ===. То есть нельзя сравнить на больше или меньше, только на равенство.

// switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;

//   default:
//     инструкции;
// }

// Значение в блоке switch(значение) - строка или число, которое сравнивается на строгое равенство со всеми значениями в блоках case значение по порядку, сверху вниз.

// Оператор break в завершении каждого блока case необходим чтобы прервать дальнейшие проверки и сразу перейти к коду за switch в том случае, когда проверка на равенство вернула true.

// Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке else для инструкции if...else. Для этого после всех блоков case добавляется блок default. Оператор break после блока default не нужен, так как это и так последнее что будет выполнено в switch и управление будет передано коду за ним.

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }
// console.log(cost); // 500

// Если оператор break будет отсутствовать, то после того как выполнится какое-то условие case, все последующие за ним блоки кода будут выполняться один за другим, что может привести к нежелательным последствиям при неверном применении.

// Область видимости
// Область видимости переменных (variable scope) - доступность переменных в определённом месте кода.
// Глобальная область видимости используется по умолчанию. Все и вся имеют доступ к переменным объявленным в ней. Например, переменная value объявлена в глобальной области видимости, то есть вне какого-то блока, и доступна в любом месте после объявления.

// const value = 5;
// if (true) {
//   console.log("Block scope: ", value); // 5
// }
// console.log("Global scope: ", value); // 5

// Любая конструкция использующая фигурные скобки { } (условия, циклы, функции и т.п.) создает новую локальную область видимости, и переменные, объявленные в этой области видимости, используя let или const, не доступны вне этого блока.

// if (true) {
//   const value = 5;
//   console.log("Block scope: ", value); // 5
// }
// console.log("Global scope: ", value); // ReferenceError: value is not defined

// Глубина вложенности областей видимости не ограничена, и все они буду работать по одному принципу - область видимости имеет доступ ко всем переменным объявленным выше по иерархии вложенности, но не может получить доступ к переменным объявленным во вложенных областях видимости.

// Циклы
// Частая задача программирования - выполнение однотипного действия много раз. Например, вывести клиентов из списка один за другим, или перебрать суммы зарплат и для каждой выполнить одинаковый код. Именно для таких целей - многократного повторения одного участка кода, используются циклы.
// Цикл - управляющая конструкция в высокоуровневых языках программирования, предназначенная для организации многократного исполнения набора инструкций.
// Тело цикла - последовательность инструкций, предназначенная для многократного исполнения.
// Итерация - единичное выполнение тела цикла.
// Условие выхода - выражение, определяющее будет в очередной раз выполняться итерация, или цикл завершится.
// Счётчик - переменная, хранящая текущий номер итерации. Цикл не обязательно содержит счётчик, и он не обязан быть один, условие выхода из цикла может зависеть от нескольких изменяемых в цикле переменных.

// Цикл while
// Цикл с предусловием — цикл, который выполняется пока истинно некоторое условие, указанное перед его началом. Это условие проверяется до выполнения тела цикла, поэтому тело может быть не выполнено ни разу, если условие с самого начала ложно.

// while (condition) {
//   // код, тело цикла (statement)
// }

// Конструкция while создает цикл, который выполняет блок кода, пока условие проверки оценивается как true.
// condition, то есть условие, вычисляется перед каждой итерацией цикла.
// Если condition оценивается как true, оператор while выполняет statement.
// Если condition оценивается как false, выполнение цикла прерывается и скрипт продолжает выполнять инструкции после цикла while.
    
// Сделаем счетчик.
// let counter = 0;
// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// Будем заполнять места в отеле до тех пор пока текущее количество клиентов не будет равно максимально допустимому.
// let clientCounter = 18;
// const maxClients = 25;
// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// Цикл do...while
// Цикл с постусловием - цикл, в котором условие проверяется после выполнения тела цикла. Отсюда следует, что тело всегда выполняется хотя бы один раз.

// do {
//   // statement
// } while (condition);
// Конструкция do...while создает цикл, который выполняет блок кода до тех пор, пока condition не вернёт false.

// В отличие от цикла while, цикл do...while всегда выполняет statement как минимум один раз, прежде чем он оценит condition.

// Внутри цикла нужно внести изменения в некоторую переменную, чтобы убедиться, что выражение равно false после итераций.В противном случае будет бесконечный цикл.

// let password = "";
// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);
// console.log("Ввели пароль: ", password);

// Цикл for
// Цикл со счётчиком - цикл, в котором некоторая переменная изменяет своё значение от заданного начального до конечного значения с некоторым шагом и для каждого значения этой переменной тело цикла выполняется один раз.
// В большинстве процедурных языков программирования реализуется конструкцией for, в которой указывается счётчик, требуемое количество итераций и шаг, с которым изменяется счётчик.

// for (initialization; condition; post-expression) {
//   // statements
// }

// Алгоритм исполнения цикла for:
// Инициализация (initialization) - выполняется один раз перед началом цикла. Используется для создания переменной-счётчика и указания её начального значения.
// Условие (condition) - выражение, оцениваемое перед каждой итерацией (повторением) цикла. Тело цикла выполняется только тогда, когда выражение приводится к true. Цикл завершается, если значение будет false.
// Тело (statements) - набор инструкций для выполнения на каждом повторении. Выполняется если выражение условия приводится к true.
// Пост-выражение (post-expression) - выполняется в конце каждого повторения цикла, перед проверкой условия. Используется для обновления переменной-счётчика.
// Переменные - счетчики, по традиции, называются буквами i, j и k.

//     for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// В примере объявляется перемнная-счетчик i, инициализируется значением 0 и цикл выполняется до тех пор, пока i <= 20, то есть условие приводится к true. После каждой итерации счётчик увеличивается на 5.

// Посчитаем сумму чисел до определенного значения.
// const target = 3;
// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//     console.log("do", i);
//     sum += i;
//     console.log("sum", sum);
// }
// console.log("total", sum);

// Как работает этот цикл:
// 1. i = 0
// 2. i <= target  // 0 <= 3 - true
// 3. sum += i  // 0
// 4. i += 1    // 1
// 5. i <= target  // 1 <= 3 - true
// 6. sum += i  // 0 + 1 = 1
// 7. i += 1  // 1 + 1 = 2
// 8. i <= target  // 2 <= 3 - true
// 9. sum += i  // 1 + 2 = 3
// 10. i += 1  // 2 + 1 = 3
// 11. i <= target  // 3 <= 3 - true
// 12. sum += i  // 3 + 3 = 6
// 13. i += 1  // 3 + 1 = 4
// 14. i <= target  // 4 <= 3 - false
// 15. выход из цикла
// Вспомним про операцию a % b и выведем остаток от деления используя цикл.

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// Оператор break
// Прервать выполнение цикла можно в любой момент. Для этого сущестует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

// Найдём число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);
//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }
// console.log("Лог после цикла");

// Оператор continue
// Прерывает не весь цикл, а только выполнение текущей итерации. Его используют, если понятно, что на текущей итерации цикла делать больше нечего или вообще ничего делать не нужно и пора переходить на следующую итерацию.

// Используем цикл для вывода только нечетных чисел. Для чётных i срабатывает continue, выполнение тела прекращается и управление передаётся на следующую итерацию.

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//     if (i % 2 === 0) {
//       console.log(`i = ${i}. Осуществляем переход на следующую итерацию с помощью continue.`)
//       continue;
//     }
//     console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }

// В вышеуказанном примере console.log("Нечетное i: ", i); отрабатывает как else для условия в if.

// Написание небольшой игрушки:

// let count = 0;
// let userInput;
// const x = Math.round(Math.random()*100)+1;

// do {
//     count += 1;
//     userInput = Number(prompt("Введите число от 1 до 100"));
//     if (x > userInput) {
//         console.log("x > ", userInput);
//     } else if (x < userInput) {
//         console.log("x < ", userInput);
//     } else console.log(`Вы отгадали! Правильный ответ - ${x}`);
// } while (x !== userInput);
//     console.log(`Использовано попыток - ${count}`);

