// Массивы
// Массив - структура данных для хранения и манипулирования коллекцией индексированных значений. Используeтся для хранения упорядоченных коллекций данных, например списка курортов, товаров, клиентов в отеле и т. п.

// Создание
// Массив объявляется открывающей и закрывающей квадратной скобками [] - литералом массива. Внутри скобок каждый элемент массива разделяется запятой.

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients);
// Доступ к элементам
// Для доступа к значению элемента массива используется синтаксис квадратных скобок массив[индекс]. Между именем переменной хранящей массив и квадратными скобками не должно быть пробела.

// const clients = ["Mango", "Poly", "Ajax"];

// // Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax
// Индексация элементов массива начинается с нуля.

// array indices
// Переопределение
// В отличии от строк, элементы массива можно изменять обратившись к ним по индексу и присвоив другое значение.

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]
// Длина массива
// Длина массива, то есть число его элементов, хранится в свойстве length. Это динамическая величина, которая изменяется автоматически при добавлении или удалении элементов.

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients.length); // 3
// console.log(clients[clients.length - 1]); // Ajax
// Индекс последнего элемента
// Чаще всего мы заранее в коде не знаем какая будет длина массива. Для того чтобы получить значение последнего элемента применяется следующий подход - длина массива всегда на единицу больше чем индекс последнего элемента. Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(clients.length); // 3
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"




// Итерация по массиву
// Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс это значние счётчика цикла от 0 и до последнего индекса массива, то есть меньше, но не равно его длине.

// Цикл for...of
// Конструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for если не нужен доступ к счётчику итерации.

// for (const variable of iterable) {
//   // тело цикла
// }
// variable — переменная которая будет хранить значение элемента на каждой итерации.
// iterable — коллекция, которая имеет перечислимые элементы, например массив.
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// Операторы break и continue
// Будем искать имя клиента в массиве имен, если нашли - прервем цикл, так как нет смысла искать дальше, имена у нас уникальные.

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"
// Можно изначально задать message значение неудачи поиска, а в цикле перезаписать его на успех, если нашли имя. Но break все равно пригодится, так как если у нас массив из 10000 клиентов, а нужный нам стоит на позиции 2, то нет абсолютно никакого смысла перебирать оставшиеся 9998 элементов.

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!
// Используем цикл для вывода только чисел больше определенного значения.

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }



// Присвоение по ссылке и по значению
// Фундаментальным отличием сложных типов от примитивов, является то, как они хранятся и копируются. Примитивы: строки, числа, були,null и undefined, при присваивании копируются целиком, по значению (by value).

// Со сложными типами всё не так. В переменной, которой присвоен массив или объект, хранится не само значение, а адрес его места в памяти, иными словами - ссылка (указатель) на него и передаются они по ссылке (by reference).

// Представим переменную в виде листа бумаги. Её значение мы представим в виде записи на этом листе.

// Переменная и ее значение
// Если мы захотим сообщить содержимое этой записи пользователям, то можем поступить так - сделать физические копии и вручить их каждому, то есть сделать множественные независимые копии (присвоение по значению).

// Присвоение по значению
// Или поместить лист в закрытой комнате и дать пользователям ключ от этой комнаты, то есть один экземпляр с общим доступом (присвоение по ссылке).

// Присвоение по ссылке
// Теперь изменим данные на листе бумаги - значение переменной. Очевидно, что посетители комнаты всегда будут видеть изменения которые мы вносим, так как изменяется оригинал и они имеют к нему доступ. И также очевидно, что владельцы бумажных копий не заметят изменений глядя на свои копии.

// Разница между присвоением по ссылке и присвоением по значению
// При передаче по значению, переменным выделяется новая ячейка памяти и в нее копируются данные. Аналогия с множественными копиями бумажного листа имеет вполне реальное воплощение, отдельный лист для каждой копии.

// При передаче по ссылке, вместо создания нового объекта, переменной присваивается ссылка (указатель) на уже существующий объект, то есть на его место в памяти. Таким образом, несколько переменных могут указывать на один и тот же объект, по аналогии с закрытой комнатой, у них есть ключ доступа к оригиналу листа.

// Все примитивные типы присваиваются по значению, то есть создается копия.

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5
// Сложные типы - объекты, массивы, функции присваиваются по ссылке, то есть переменная просто получает ссылку на уже существующий объект.

// const a = ["Mango"];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// // Результат повторяется
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// // console.log(b); // ["Mango", "Poly", "Ajax"]


// Методы массива
// Методы split() и join()
// Метод split(delimeter) превращает строку в массив, «разбив» её по разделителю delimeter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// const list = "1234156718911111112351895178961825";
// console.log(list.split("1"))

// Метод массивов join(delimeter) соединяет элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"

// Метод indexOf()
// indexOf(value) возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число -1, если такого элемента нет. Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// Метод includes()
// includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// Проверка множественных условий с includes()
// На первый взгляд код следующего примера выглядит хорошо.

// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }
// Однако, что если у нас будет больше красных фруктов, к примеру ещё вишня (cherry) или клюква (cranberries)? Будем ли мы расширять условие с помощью дополнительных ||?

// const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }
// Можем переписать условие используя метод includes(), это очень просто и масштабируемо.

// // Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//     console.log(`${fruit} is a red fruit!`);
// }
// else console.log(`${fruit} is not a red fruit!`);

// Методы push() и pop()
// Добавляют или удаляют крайние элементы массива. Работают только с крайним левым и крайним правым элементом и не могут поставить или удалить элемент с произвольной позиции.

// array methods
// Метод push() добавляет один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов. Возвращает длину массива после добавления элементов.

// push method
// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// Метод pop() удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.

// // pop method
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// console.log(numbers.pop()); //  undefined
// console.log(numbers); // []

// Метод slice()
// slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// slice method
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// Если begin и end не указаны, будет создана полная копия исходного массива.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// Если не указан end, копирование будет от start и до конца исходного массива.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]
// console.log(clients);

// Если значение start отрицательное, а end не указан, то будут скопированы последние start элементов
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// Метод splice()
// Швейцарский нож для работы с массивами, если исходный массив нужно изменить. Удаляет, добавляет и заменяет элементы в произвольном месте массива.

// Удаление
// Чтобы удалить элементы в массиве, передаются два аргумента.

// splice(position, num)
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
// Метод splice изменяет исходный массив и возвращает массив, содержащий удаленные элементы. Например, у нас есть массив оценок, который содержит пять чисел от 1 до 5.

// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]
// На рисунке показан вызов метода score.splice(0, 3) из примера.

// splice remove
// ИНТЕРЕСНО
// На практике возращаемое значение (массив удалённых элементов) используется редко. В основном просто необходимо удалить элементы из массива.

// Добавление
// Для того чтобы добавить один или несколько элементов в массив, необходимо передать три или более аргумента, при этом второй аргумент должен быть равен нулю.

// splice(position, 0, new_element_1, new_element_2, ...)
// Аргумент position указывает начальную позицию в массиве, куда будут вставлены новые элементы.
// Второй аргумент это ноль, он говорит методу не удалять элементы в месте добавления новых.
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.
// Например, у нас есть массив с названиями цветов в виде строк. Добавим новый цвет перед элементом с индексом 2.

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]
// На рисунке показан вызов метода colors.splice(2, 0, 'purple') из примера.

// splice insert
// Можно добавить произвольное количество элементов, передав четвертый, пятый аргумент и т. д.

// const colors = ["red", "green", "blue"];

// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// Замена
// Замена это операция добавления в которой удаляются элементы в месте добавления новых. Для этого необходимо передать минимум три аргумента. Количество удаляемых и добавляемых элементов может не совпадать.

// splice(position, num, new_element_1, new_element_2, ...)
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.
// например, у нас есть массив языков программирования из четырех элементов.

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
// На рисунке показан вызов метода languages.splice(1, 1, 'Python') из примера.

/// Метод concat()
// Объединяет два или более массива в один. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]