//     Модуль 6 - Занятие 11 - DOM


// Объектная модель документа

// Когда мы работаем с браузером, доступный функционал состоит из нескольких модулей, так как JavaScript сам по себе не имеет инструментов для работы с браузером.

// Объектная модель документа (Document Object Model) - независимый от языка интерфейс для работы с HTML-документом. Содержит набор свойств и методов позволяющих искать, создавать и удалять элементы, реагировать на действия пользователя и многое другое. То есть соединяет страницу с языком программирования.

// DOM это отражение HTML-документа - древовидная структура, в которой каждый узел это JavaScript-объект со свойствами и методами, представляющий часть HTML-документа. Каждый элемент в документе, весь документ в целом, заголовок, ссылка, абзац - это части DOM этого документа, поэтому все они могут быть изменены из JavaScript-кода.

// Объектная модель браузера (Browser Object Model) - независимый от языка интерфейс для работы с владкой браузера. Содержит набор свойств и методов, позволяющих получить доступ непосредственно к текущей вкладке и ряду функций браузера. Включает объект работы с историей навигации, местоположением и многое другое.


// HTML-документ и DOM

// Согласно DOM-модели, каждый тег образует отдельный элемент-узел, каждый фрагмент текста - текстовый элемент. HTML-документ это иерархическое дерево, в котором у каждого элемента (кроме корневого) есть только один родитель, т. е. элемент, внутри которого он располагается. Это дерево образуется за счет вложенной структуры тегов и текстовых элементов.

// Чтобы отобразить HTML-документ, браузер сначала преобразовывает его в формат, который он понимает - DOM. У движка браузера есть специальный фрагмент кода - HTML-парсер, который используется для преобразования HTML в DOM.

// В HTML вложенность определяет отношения родитель-ребенок между элементами. В DOM объекты связаны в древовидной структуре данных, фиксируя эти отношения.

// Браузер строит DOM постепенно, как только приходят первые фрагменты кода, он начинает парсить HTML, добавляя узлы в древовидную структуру.

// После того как DOM-дерево построено, в нем можно найти элемент с помощью JavaScript и выполнять с ним какие-то действия, так как каждый элемент имеет интерфейс с множеством свойств и методов.


// DOM-дерево

// Визуализируем дерево HTML-документа используя сервис генератора DOM-дерева.

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Document title</title>
//   </head>
//   <body>
//     <h1>Page title</h1>
//     <ul>
//       <li><a href="#">Link 1</a></li>
//       <li><a href="#">Link 2</a></li>
//     </ul>
//   </body>
// </html>
// Визуальное представление иерархии дерева документа
// В этом дереве выделены два типа узлов.

// Узлы-элементы (element node) - образуются тегами, естественным образом одни элементы вложены в другие. Структура дерева образована исключительно за счет них.
// Текстовые узлы (text node) - образуются текстом внутри элементов. Текстовый узел содержит только строку текста и не может иметь потомков, то есть он всегда на самом нижнем уровне иерархии. Пробелы и переносы строк - это тоже текстовые узлы.

// ИНТЕРЕСНО
// Из этого правила есть исключения: пробелы до head игнорируются, а любое содержимое после body не создаёт элемент, браузер переносит его в конец body.


// Навигация по DOM

// DOM предоставляет широкий спектр возможностей при работе с элементом и его содержимым, но для этого на него сначала нужно получить ссылку. Доступ к DOM начинается с объекта document, от него можно добраться до любых элементов.

// ИНТЕРЕСНО
// document это часть глобального объекта window, который доступен в скрипте, когда он выполняется в браузере. Также как alert, console.log, prompt и многие другие.

// Элементы DOM-дерева имеют иерархическое отношение друг к другу. Для описания отношений используются термины предок (ancestor), потомок (descendant), родитель (parent), ребенок (child) и сосед (sibling).

// Самый верхний элемент называется корневым (root node).
// Каждый элемент, кроме корневого, имеет только одного родителя.
// У элемента может быть сколько угодно детей.
// Соседи - это элементы с общим родителем.
// Дочерние элементы (дети) - элементы, которые лежат непосредственно внутри текущего (первая вложенность).
// Потомки – все элементы, которые лежат внутри текущего, вместе с их детьми, детьми их детей и так далее. То есть всё поддерево.

// Для навигации по этой иерархии у элементов есть следующие свойства:

// elem.parentNode - выберет родителя elem.
// elem.closest(".item") - выберет ближайшего предка elem, у которого есть класс item.
// elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
// elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
// elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
// elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
// elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
// elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
// elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
// elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
// elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).

// Открой этот пример в отдельном окне и посмотри логи в консоли разработчика.

// // Добавить во вкладку HTML
// <ul>
//   <li>First item</li>
//   <li>Second item</li>
//   <li>Third item</li>
//   <li>Fourth item</li>
//   <li>Fifth item</li>
// </ul>

// // Добавить во вкладку JS
// console.log(document); // #document

// const body = document.body;
// console.log(body); // body

// const list = body.firstElementChild;
// console.log(list); // ul

// const firstListItem = list.firstElementChild;
// console.log(firstListItem); // li

// const listItems = list.children;
// console.log(listItems); // HTMLCollection(5) [li, li, li, li, li]

// ИНТЕРЕСНО
// DOM-коллекции, такие как childNodes и children - псевдомассивы (NodeList), у них нет большинства методов массива.


// Поиск элементов

// Итак, мы уже знаем что DOM-элемент - это объект со свойствами и методами. Самое время научиться быстро находить элемент по произвольному CSS-селектору. Группа методов elem.querySelector* это современный стандарт для поиска элементов. Они позволяют найти элемент или группу элементов по CSS-селектору любой сложности.

// element.querySelector(selector);

// Используется если необходимо найти только один, чаще всего уникальный элемент.

// Возвращает первый найденный элемент внутри element, соответствующий CSS-селектору selector.
// Если ничего не найдено, вернет null.

// element.querySelectorAll(selector);

// Используется если необходимо найти коллекцию элементов, то есть получить массив ссылок на элементы с одинаковым селектором. Например, все элементы списка с классом menu-item.

// Возвращает псевдомассив всех элементов внутри element, удовлетворяющих CSS-селектору selector.
// Если ничего не найдено, вернет пустой массив.

// Открой этот пример в отдельном окне и посмотри логи в консоли разработчика.

// // Добавить во вкладку HTML
// <ul id="menu" class="menu">
//   <li class="menu-item">home</li>
//   <li class="menu-item">about</li>
//   <li class="menu-item">gallery</li>
//   <li>blog</li>
// </ul>

// Добавить во вкладку JS
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log("listWithId", listWithId); // ul#menu.menu

// const listWithClass = document.querySelector('.menu');
// console.log("listWithClass", listWithClass); // ul#menu.menu

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log("menuItemsByTagName", menuItemsByTagName); // NodeList(4) [li.menu-item, li.menu-item, li.menu-item, li]

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log("menuItemsByClass", menuItemsByClass); // NodeList(3) [li.menu-item, li.menu-item, li.menu-item]

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log("firstMenuItem", firstMenuItem); // li.menu-item



// Свойства и атрибуты

// Во время построения DOM-дерева, некоторые стандартные HTML-атрибуты становятся свойствами элементов. Посмотрим на несколько часто использующихся свойств.

// value - содержит текущий текстовый контент элементов форм.
// checked - хранит состояние чекбокса или радиокнопки.
// name - хранит значение, указанное в HTML-атрибуте name.
// src - путь к изображению тега <img>.

// // Добавить во вкладку HTML
// <textarea id="message" class="materialize-textarea" rows="5">Default textarea message</textarea>
// <div>
//   <a href="/home" class="btn">home</a>
//   <a href="/about" class="btn active">about</a>
//   <a href="/gallery" class="btn">gallery</a>
// </div>
// <br>
// <img class="image" src="https://placeimg.com/640/480/animals" alt="" width="320" />

// // Добавить во вкладку CSS
// body {
//   margin: 24px;
// }

// // Добавить во вкладку JS
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message
// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // http://127.0.0.1:5500/about
// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';


// Свойство textContent

// elem.textContent возвращает текстовый контент внутри элемента. Доступно для чтения и записи. Не зависимо что будет передано в textContent, данные всегда будут записаны как текст.

// // // Добавить во вкладку HTML
//  <article class="article">
//   <h2 class="article-title">Welcome to Hawaii!</h2>
//   <p class="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat nemo veritatis quasi eius eum aliquid, nobis dolore nisi, magnam eaque iusto, necessitatibus atque laborum quam tempora ducimus dicta ipsam.</p>
// </article>

// // Добавить во вкладку CSS
// body {
//   margin: 24px;
// }

// // Добавить во вкладку JS
// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = 'Welcome to Bahamas!';


// Свойство classList

// В свойстве classList хранится объект с методами для работы с классами элемента.

// elem.classList.contains(cls) - возвращает true или false в зависимости от того, есть ли у элемента класс cls.
// elem.classList.add(cls) - добавляет класс cls в список классов элемента.
// elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.
// elem.classList.toggle(cls) - если класса cls нет, то добавляет его, если есть, наоборот удаляет.
// elem.classList.replace(oldClass, newClass) - заменяет существующий класс oldClass на указанный newClass.

// // Добавить во вкладку HTML
// <p id="paragraph" class="text red big">Proin magna. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Etiam rhoncus. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.</p>

// // Добавить во вкладку CSS
// body {
//   margin: 24px;
// }

// .is-hidden {
//   display: none;
// }

// // Добавить во вкладку JS
// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains("red")); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList); // ['text', 'red', 'new-class', 'a', 'b', 'c', value: 'text red new-class a b c']

// text.classList.toggle("is-hidden"); // will add is-hidden class
// console.log(text.classList); // ['text', 'red', 'new-class', 'a', 'b', 'c', 'is-hidden', value: 'text red new-class a b c is-hidden']
// text.classList.toggle("is-hidden"); // will remove is-hidden class
// console.log(text.classList); // ['text', 'red', 'new-class', 'a', 'b', 'c', value: 'text red new-class a b c']

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class, a, b, c - на каждой итерации по 1 классу выдает
// });


// Свойство style

// Используется для чтения и изменения инлайновых стилей. Возвращает объект CSSStyleDeclaration, который содержит список всех свойств, определенных только во встроенных стилях элемента, а не весь CSS. При записи свойства записываются в camelCase, то есть background-color превращается в element.style.backgroundColor и т. д.

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object - а по факту - CSSStyleDeclaration {0: 'background-color', 1: 'font-size', 2: 'text-align', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

// ИНТЕРЕСНО
// На практике стилизация элементов выполняется добавленим CSS-классов. Свойство style используется для добавления каких-то динамических стилей, например во время анимации.


// Атрибуты

// DOM-элементам соответствуют HTML-теги у которых есть текстовые атрибуты. Доступ к атрибутам осуществляется при помощи стандартных методов. Эти методы работают со значением, которое находится в HTML.

// elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false.
// elem.getAttribute(name) - получает значение атрибута и возвращает его.
// elem.setAttribute(name, value) - устанавливает атрибут.
// elem.removeAttribute(name) - удаляет атрибут.
// elem.attributes - свойство, возвращает объект всех атрибутов элемента.

// // // Добавить во вкладку HTML
// <img class="image" src="https://placeimg.com/400/200/nature" alt="Beautiful nature"></img>

// // // Добавить во вкладку JS
// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // Beautiful nature

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature


// data-атрибуты

// Позволяют добавить тегу произвольный атрибут и получить его значение в JavaScript. Эту возможность используют для того, чтобы упростить написание кода, например связать данные и разметку по уникальному идентификатору, указать тип действия кнопки и т. п.

// <button type="button" data-action="save">Save</button>
// <button type="button" data-action="close">Close</button>

// Для получения значения data-атрибута используется свойство dataset, после которого идет имя атрибута. То есть data- отбрасывается, а остальное имя записывается как имя свойства объекта.

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

// // Добавить во вкладку HTML
// <div class="editor">
//   <p>Donec id justo. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Curabitur suscipit suscipit tellus. Phasellus gravida semper nisi.</p>
//   <div class="actions">
//     <button type="button" class="btn" data-action="save">Save</button>
//     <button type="button" class="btn" data-action="close">Close</button>
//   </div>
// </div>

// <ul class="dishes">
//   <li data-id="14">Baked Yak &amp; Mushrooms</li>
//   <li data-id="7">Strawberry Pancakes</li>
//   <li data-id="3">Caramel Toffee</li>
//   <li data-id="61">Pistachio Elderberry Wafer</li>
// </ul>

// // Добавить во вкладку JS
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });


// Создание и удаление элементов

// DOM API позволяет не только выбирать или изменять уже существующие, но и удалять, а так же создавать новые элементы, после чего добавлять их в документ.

// Создание

// document.createElement(tagName);

// Создает элемент с именем tagName и возвращает ссылку на него как результат своего выполнения. tagName - это строка, указывающая тип создаваемого элемента. Элемент создается в памяти, в DOM его еще нет.

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// Добавление

// Чтобы созданный элемент был отображен на странице, его необходимо добавить к уже существующему элементу в DOM-дереве. Допустим, что добавляем в некий элемент element, для этого есть методы.

// element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
// element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element.
// element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element.
// element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element.
// Во всех этих методах, el это элементы или строки, в любом сочетании и количестве. Строки добавляются как текстовые узлы.

// // // Добавить во вкладку HTML
// <div class="container">
//   <ul class="usernames">
//     <li>Mango</li>
//   </ul>
// </div>

// // // Добавить во вкладку CSS
// body {
//     maring: 24px;
//   }
  
//   .usernames li {
//     padding: 8px;
//     border: 2px dashed tomato;
//     text-transform: uppercase;
//   }
  
//   .usernames li:not(:last-child) {
//     margin-bottom: 12px;
//   }

// // Добавить во вкладку JS
// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);

// ИНТЕРЕСНО
// Если элемент для вставки уже находится в DOM, то он изымается из своего старого места и добавляется в новое. Отсюда вытекает правило - один и тот же элемент не может быть одновременно в двух местах.


// Удаление

// elem.remove();

// Для того, чтобы удалить элемент используется метод remove(). Он вызывается на самом элементе elem, который необходимо удалить

// // // // Добавить во вкладку HTML
// <article class="article">
//   <h2 class="title">Article title</h2>
//   <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! Praesentium accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
// <a class="link" href="">Read more</a>
// </article>

// // // // Добавить во вкладку CSS
// body {
//     font-family: sans-serif;
//   }

  // // Добавить во вкладку JS
//   const text = document.querySelector('.text');
// text.remove();


// Оптимизация работы с DOM

// Современные браузеры стараются оптимизировать процесс отрисовки страницы без вмешательства разработчика. Тем не менее, изменение DOM-дерева это дорогая операция, поэтому необходимо стараться минимизировать количество обращений к DOM.

// Repaint - происходит, когда изменения затронули стили влияющие на внешний вид элемента, но не на геометрию. Например opacity, background-color, visibility и outline. Браузер отрисовывает элемент заново, с учётом нового стиля. Также проверяется видимость других элементов, один или более могут оказаться скрыты под изменившим внешний вид.

// Reflow - происходит когда изменения затрагивают содержимое, структуру документа, положение элементов. Идет пересчет позиционирования и размеров, что ведет к перерисовке части или всего документа. Изменение размера одного родительского контейнера повлияет на всех его детей и предков. Имеет значительно большее влияние на производительность, чем repaint.

// Все вышеперечисленные операции блокируют браузер. Страница не может выполнять никакие другие операции в то время, когда происходит reflow или repaint. Причинами могут быть:

// Манипуляции с DOM (добавление, удаление, изменение, перестановка элементов)
// Изменение содержимого, в т.ч. текста в полях форм
// Расчёт или изменение CSS-свойств
// Добавление и удаление таблиц стилей
// Манипуляции с атрибутом class
// Манипуляции с окном браузера (изменения размеров, прокрутка)
// Активация псевдоклассов (например :hover)


// Свойство innerHTML

// Еще один способ создать DOM-элементы и поместить их в дерево - это использовать строки с тегами и позволить браузеру сделать всю тяжелую работу. У такого подхода есть свои плюсы и минусы.

// Чтение

// Свойство innerHTML хранит содержимое элемента, включая теги, в виде строки. Возвращаемое значение это всегда валидный HTML-код.

// // // // // Добавить во вкладку HTML
// <article class="article">
//   <h2 class="title">Article title</h2>
//   <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
//   <a class="link" href="">Read more</a>
// </article>

// // // // Добавить во вкладку CSS
// body {
//     margin: 16px;
//     font-family: sans-serif;
//   }

  // // Добавить во вкладку JS
//   const article = document.querySelector(".article");
//   console.log(article.innerHTML); // отобразится весь код article в HTML
  
//   const title = document.querySelector(".article .title");
//   console.log(title.innerHTML); // Article title
  
//   const text = document.querySelector(".article .text");
//   console.log(text.innerHTML); // Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.
  
//   const link = document.querySelector(".article .link");
//   console.log(link.innerHTML); // Read more


// Изменение

// Свойство innerHTML доступно как для чтения, так и для записи. Если записать в него строку с HTML-тегами, то браузер во время парсинга строки превратит их в валидные элементы и добавит в DOM-дерево.

//  // Добавить во вкладку HTML
//  <article class="article">
//   <h2 class="title">Article title</h2>
//   <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
//   <a class="link" href="">Read more</a>
// </article>

//  // Добавить во вкладку CSS
//  body {
//     margin: 16px;
//   }
  
//   .accent {
//     color: tomato;
//     text-decoration: underline;
//   }

// // Добавить во вкладку JS
// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// ИНТЕРЕСНО
// Если в свойство innerHTML записать пустую строку, то содержимое элемента будет очищено. Это простой и быстрый способ удаления всего содержимого.

// При таком подходе, в отличии от document.createElement(), мы не получаем ссылку на созданный DOM-элемент. Это первый шаг на пути к шаблонизации - создания большого количества однотипной разметки с разными данными по заранее определённому шаблону. Например, как в списке товаров интернет магазина и т. п.

// Однотипная (шаблонная) разметка создается из массива данных. Приём заключается в переборе этого массива и составлении одной строки с HTML тегами, которую потом записываем в innerHTML элемента.

// // Добавить во вкладку HTML
// <section>
//   <h2>Popular technologies</h2>
//   <ul class="list"></ul>
// </section>

// // Добавить во вкладку CSS
// body {
//     padding: 16px;
//   }
  
//   .list {
//     padding: 0;
//     margin: 0;
//     list-style-type: none;
//   }
  
//   .list-item {
//     padding: 8px;
//     border-width: 2px;
//     border-style: dashed;
//   }
  
//   .list-item:nth-child(even) {
//     border-color: tomato;
//   }
  
//   .list-item:nth-child(odd) {
//     border-color: blueviolet;
//   }
  
//   .list-item:not(:last-child) {
//     margin-bottom: 8px;
//   }

// // Добавить во вкладку JS
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // // // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // // // Adding all the markup in one operation
// list.innerHTML = markup;


// Добавление

// Изменение elem.innerHTML полностью удалит и пересоздаст всех потомков элемента elem. Если элемент изначально не пустой, то будут дополнительные затраты на сериализацию уже существующей разметки, а это плохо.

// // Добавить во вкладку HTML
// <article class="article">
//   <h2>Article title</h2>
// </article>

// // Добавить во вкладку CSS
// body {
//     padding: 16px;
//   }
  
//   .article {
//     max-width: 320px;
//   }
  
//   .article-text {
//     color: tomato;
//   }

// // Добавить во вкладку JS
//   const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
// <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Операции += и = имеют разницу в деструкции. Описание в примерах ниже.
// // article.innerHTML = htmlString; // добавляет содержимое htmlString, ПРИ ЭТОМ УДАЛЯЯ содержимое <h2> - Article title.
// // article.innerHTML += htmlString; // добавляет содержимое htmlString, НЕ ИЗМЕНЯЯ содержимое <h2> - Article title.
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

// // Лучше всего += НЕ ИСПОЛЬЗОВАТЬ. Потому что innerHTML += сначала удаляет все содержимое, потом заново прорисовывает то, что было, и уже ///// // потом добавляет новое.

// ИНТЕРЕСНО
// Используйте свойство elem.innerHTML для добавления только в случае когда элемент elem пустой или если надо полностью заменить его содержимое.


// Метод insertAdjacentHTML()

// Современный метод для добавления строки с HTML-тегами до, после или внутрь элемента. Решает проблему innerHTML с повторной сериализацией содержимого элемента при добавлении разметки к уже существующей.

// elem.insertAdjacentHTML(position, string);
// Аргумент position - это строка, позиция относительно элемента elem. Принимает одно из четырёх значений.

// inserAdjacentHTML method
// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem

// // Добавить во вкладку HTML
// <ul class="list">
//   <li class="list-item">HTML</li>
//   <li class="list-item">CSS</li>
//   <li class="list-item">JavaScript</li>
// </ul>

// // // Добавить во вкладку CSS
// body {
//     padding: 16px;
//   }
  
//   .list {
//     padding: 20px;
//     margin: 10px;
//     list-style-type: none;
//     border-color: green;
//     border-width: 2px;
//     border-style: dashed;
//   }
  
//   .list-item {
//     display: flex;
//     align-items: center;
//     padding: 8px;
//     border-width: 2px;
//     border-style: dashed;
//   }
  
//   .list-item.new::before {
//     content: "";
//     width: 12px;
//     height: 12px;
//     margin-right: 8px;
//     border-radius: 50%;
//     background-color: green;
//   }
  
//   .list-item:nth-child(even) {
//     border-color: tomato;
//   }
  
//   .list-item:nth-child(odd) {
//     border-color: blueviolet;
//   }
  
//   .list-item:not(:last-child) {
//     margin-bottom: 8px;
//   }

// // Добавить во вкладку JS
// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");
//   console.log(markup); // <li class="list-item new">React</li><li class="list-item new">TypeScript</li><li class="list-item new">Node.js</li>
// // При разных параметрах position в методе elem.insertAdjacentHTML(position, string) - получаем размещение значения string в различные места в коде. Примеры ниже:
// list.insertAdjacentHTML("afterbegin", "<h2>Popular technologies</h2>");
// list.insertAdjacentHTML("beforebegin", markup);
// list.insertAdjacentHTML("beforeend", "<h3>Other technologies</h3>");
// list.insertAdjacentHTML("afterend", markup);

// ИНТЕРЕСНО
// "beforebegin" и "afterend" работают только в том случае, если elem уже находится в DOM-дереве.


// Подключение скриптов

// Загрузка и выполнение скрипта указанного в теге <script> без каких-либо атрибутов, блокируют обработку HTML-документа и построение DOM. Это проблема.

// <script src="path-to-script.js"></script>
// Когда анализатор встречает такой тег, обработка HTML-документа приостанавливается и начинается загрузка файла скрипта указанного в атрибуте src. После загрузки скрипт выполняется, и только потом возобновляется обработка HTML. Это называется «блокирующий» скрипт.

// Атрибуты defer и async были введены чтобы дать разработчикам возможность лучше контролировать как загружать скрипты и когда именно их выполнять.

// Атрибут defer

// <script defer src="path-to-script.js"></script>

// Атрибут defer указывает браузеру загружать файл скрипта в фоновом режиме, паралельно обработке HTML-документа и построению DOM. Скрипт будет выполнен только после того как HTML-документ обработан, а DOM построен. Такие скрипты не блокируют построение DOM-дерева и гарантированно выполняются в том порядке, в котором указаны в HTML-документе.

// Атрибут async

// <script async src="path-to-script.js"></script>

// Загрузка скрипта с атрибутом async не блокирует построение DOM, но он выполняется сразу после загрузки. Это значит, что такие скрипты могут заблокировать построение DOM, и выполняются в произвольном порядке.





// Модуль 6 - Занятие 12 - События

// События

// Событие это сигнал от браузера о том, что на веб-странице что-то произошло. События используются для реакции на действия пользователя и исполнения кода связанного с определенным событием. Существует много видов событий: мыши, клавиатуры, элементов форм, загрузки изображений, буфера обмена, изменение стадии CSS анимации или перехода, изменение размеров окна и много других.

// Одно действие может вызывать несколько событий. Например, клик вызывает сначала mousedown, а затем mouseup и click. В тех случаях, когда одно действие генерирует несколько событий, их порядок фиксирован. То есть, обработчики вызовутся в порядке mousedown → mouseup → click.

// Для того, чтобы элемент реагировал на действия пользователя, ему необходимо добавить слушателя (обработчик) события. То есть функцию, которая будет вызвана, как только событие произошло.


// Метод addEventListener()

// Добавляет слушателя события на элемент.

// element.addEventListener(event, handler, options);
// event - имя события, строка, например "click".
// handler - коллбэк-функция которая будет вызвана при наступлении события.
// options - необязательный объект параметров с расширенными настройками.

// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// Для коллбэка можно (и желательно) использовать отдельную функцию и передавать на неё ссылку. Именованная функция повышает читаемость кода.

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);
// На одном элементе может быть сколько угодно обработчиков событий, даже событий одного типа. Коллбэк-функции будут вызываться в порядке регистрации их в коде.

// // Добавить во вкладку HTML
// <button id="single" class="btn">SINGLE CALLBACK</button>
// <hr>
// <button id="multiple" class="btn">MULTIPLE CALLBACKS</button>

// // Добавить во вкладку CSS
// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   min-height: 100vh;
//   padding: 1rem;
//   text-align: center;
// }

// // Добавить во вкладку JS
// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);


// Метод removeEventListener()

// Удаляет слушателя события с элемента. Аргументы аналогичны методу addEventListener().

// element.removeEventListener(event, handler, options);
// Для удаления нужно передать ссылку именно на ту коллбэк-функцию, которая была назначена в addEventListener(). В таком случае для коллбэков используют отдельную функцию и передают её по имени (ссылку).

// // Добавить во вкладку HTML
// <button class="btn" data-action="add">Add Listener</button>
// <button class="btn" data-action="remove">Remove Listener</button>
// <hr>
// <button id="btn" class="btn">Click me</button>

// // Добавить во вкладку CSS
// body {
//   padding: 16px;
//   text-align: center;
// }

// // Добавить во вкладку JS
// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });


// Ключевое слово this

// Если коллбэком будет функция которая использует this, по умолчанию контекст внутри неё будет ссылаться на DOM-элемент на котором висит слушатель.

// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector(".js-btn");

// // // // ✅ Работает
// // mango.showUsername();

// // // ❌ this будет ссылаться на button если использовать showUsername как callback
// // btn.addEventListener("click", mango.showUsername); // не работает:  <button id="btn" class="js-btn">Click me</button>  My username is: undefined

// // // ✅ Не забывайте привязывать контекст методов объекта
// btn.addEventListener("click", mango.showUsername.bind(mango)); // {username: 'Mango', showUsername: ƒ}  My username is: Mango


// Объект события

// Чтобы обработать событие, недостаточно знать о том, что это клик или нажатие клавиши, могут понадобиться детали. Например текущее значение текстового поля, элемент, на котором произошло событие, встроенные методы и другое.

// Каждое событие представляет собой объект, который содержит информацию о деталях события и автоматически передается первым аргументом в обработчик события. Все события происходят от базового класса Event.

// const handleClick = event => {
//   console.log(event);
// };

// button.addEventListener("click", handleClick);

// Параметр event это и есть обьект события, который автоматически передается первым аргументом при вызове коллбэк функции. Мы можем называть его как угодно, но обычно его объявляют как e, evt или event.

// Некоторые свойства объекта события:
// event.type - тип события.
// event.currentTarget - элемент, на котором выполняется обработчик события.

// // Добавить во вкладку HTML
// <button type="button" class="btn">Click me</button>

// // Добавить во вкладку CSS
// body {
//   padding: 16px;
//   text-align: center;
// }

// // Добавить во вкладку JS
// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event); // event:  PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}
//   console.log("event type: ", event.type); // event type:  click
//   console.log("currentTarget: ", event.currentTarget); // currentTarget:  <button type=​"button" class=​"btn">​Click me​</button>
// };

// button.addEventListener("click", handleClick);


// Действия браузера по умолчанию

// Некоторые события вызывают действие браузера встроенное по умолчанию как реакция на определенный тип события. Например клик по ссылке инициирует переход на новый адрес, указанный в href, а отправка формы перезагружает страницу. Чаще всего это поведение нежелательно и его необходимо отменить.

// Для отмены действия браузера по умолчанию на объекте события есть стандартный метод preventDefault().

// // // Добавить во вкладку HTML
// <form class="register-form" autocomplete="off">
//   <input type="text" name="username" placeholder="Username" />
//   <input type="password" name="password" placeholder="Password" />
//   <button type="submit">Register</button>
// </form>

// // // Добавить во вкладку CSS
// body {
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .register-form {
//   display: flex;
//   flex-direction: column;
// }

// .register-form input {
//   margin-bottom: 16px;
//   padding: 8px 12px;
// }

// .register-form button {
//   padding: 12px;
// }

// // Добавить во вкладку JS
// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });


// События клавиатуры

// Есть два основных события клавиатуры: keydown и keyup. В отличии от других, события клавиатуры обрабатываются на документе, а не на конкретном элементе. Объекты событий клавиатуры происходят от базового класса KeyboardEvent.

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });

// При нажатии клавиши сначала происходит keydown, после чего keyup, когда клавишу отжали. На практике, в основном обрабатывают только событие keydown, так как оно происходит быстрее чем keyup и пользователь раньше видит результат нажатия. События keydown и keyup срабатывают при нажатии любой клавиши, включая служебные (Ctrl, Shift, Alt, Escape и другие).

// ИНТЕРЕСНО
// Раньше было еще одно событие клавиатуры - keypress. Многие посты на форумах и блогах по-прежнему могут его использовать, но будьте осторожны - оно устарело и поддержка в новых браузерах может прекратиться в любой момент.


// Свойства key и code

// Свойство key возвращает символ сгенерированный нажатием клавиши, принимая во внимание состояние клавиш модификаторов, например Shift, а так же текущий язык. Свойство code возвращает код физической клавиши на клавиатуре и не изменяется между языками.

// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// Поставьте фокус в окно примера кликнув в него мышкой, отслеживание событий клавиатуры стоит на элементе document. Печатайте что-то на клавиатуре и смотрите результат.

// // // Добавить во вкладку HTML
// <button type="button" data-action="clear">Clear output</button>
// <div class="log-list"></div>

// // // Добавить во вкладку CSS
// body {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-family: sans-serif;
// // }

// ul {
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
// }

// .log-list {
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
//   gap: 24px;
//   margin-top: 16px;
// }

// .log-item {
//   position: relative;
//   padding: 8px;
//   border: 1px dashed #2a2a2a;
//   border-radius: 4px;
//   font-size: 16px;
//   font-family: monospace;
// }

// .log-item > .chip {
//   position: absolute;
//   top: -4px;
//   right: -4px;
//   width: 20px;
//   height: 20px;
//   background-color: green;
//   border-radius: 4px;
//   color: #fff;
//   font-size: 16px;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
// }

// .log-list li:not(:last-child) {
//   margin-bottom: 4px;
// }

// button {
//   display: inline-flex;
//   padding: 8px 12px;
//   cursor: pointer;
//   font-family: inherit;
//   text-transform: uppercase;
// }

// // // Добавить во вкладку JS
// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }


// Клавиши-модификаторы

// Для обработки комбинации клавиш, например Ctrl + h или любую другую, на объекте события есть свойства ctrlKey, altKey, shiftkey и metaKey, хранящие булевое значение сигнализирующее о том, была зажата клавиша-модификатор или нет.

// document.addEventListener("keydown", event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyH") {
//     console.log("«Ctrl + h» or «Command + h» combo");
//   }
// });

// Некоторые комбинации клавиш могут конфликтовать с поведением браузера по умолчанию. Например, Ctrl + d или Command + d делает закладку. Нужно стараться проектировать систему комбинаций страницы так, чтобы она не пересекалась со встроенной в браузер. Но, в крайнем случае, поведение по умолчанию можно отменить вызвав метод event.preventDefault().

// ИНТЕРЕСНО
// Не так давно, вместо свойств key и code использовали свойство keyCode. Многие посты на форумах и блогах по-прежнему могут использовать его, но будьте осторожны - оно устарело, не используйте свойство keyCode.


// События элементов форм

// Событие submit

// Отправка формы происходит при клике по кнопке с атрибутом type="submit" или нажатии клавиши Enter, находясь в каком-нибудь её текстовом поле. Событие submit можно применить для валидации (проверки) формы перед отправкой, так как на объекте события есть много полезных свойств связанных с элементами формы. Сабмит формы перезагружает страницу, поэтому не забывайте отменять действие по умолчанию методом preventDefault().

// // // Добавить во вкладку HTML
// <form class="form" autocomplete="off">
//   <input type="text" name="login" placeholder="Login">
//   <input type="password" name="password" placeholder="Password">
//   <button class="btn" type="submit">Register</button>
// </form>

//     // // Добавить во вкладку CSS
//   body {
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .form {
//   max-width: 600px;
//   margin: 0 auto;
//   text-align: center;
//   padding: 32px;
// }

// // // Добавить во вкладку JS
// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// ИНТЕРЕСНО
// Свойство elements DOM-элемента формы содержит обьект со ссылками на все её элементы у которых есть атрибут name. Поэтому в примере мы получаем значение полей обращаясь к login.value и password.value.


// Событие change

// Происходит после изменения элемента формы. Для текстовых полей или textarea событие произойдёт не при каждом вводе символа, а при потере фокуса, что не всегда удобно. Например, пока вы набираете что-то в текстовом поле - события нет, но как только фокус пропал, произойдет событие change. Для остальных элементов, например select, чекбоксов и радио-кнопок, событие change срабатывает сразу при выборе значения.

// // Добавить во вкладку HTML
// <p>
//   Selected option text: <span class="text-output">none</span>
// <p>
// <p>
//   Selected option value: <span class="value-output">none</span>
// <p>

//   <select class="pizza-select">
//     <option value="four_meats">Four Meats</option>
//     <option value="royal_cheese">Royal Cheese</option>
//     <option value="vegetarian">Vegetarian</option>
//     <option value="smoked_salmon">Smoked Salmon</option>
//   </select>

// // Добавить во вкладку CSS
// body {
//   margin: 16px;
// }

// select {
//   padding: 4px;
// }

// Добавить во вкладку JS
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// ИНТЕРЕСНО
// Обратите внимание на полезные свойства при работе с элементом <select> в примере. Разберитесь что хранится в свойствах value, selectedIndex и options.


// Событие input

// Происходит только на текстовых полях и textarea, и создаётся каждый раз при изменении значения элемента, не дожидаясь потери фокуса. На практике input это самое главное событие для работы с текстовыми полями формы.

// // Добавить во вкладку HTML
// <input type="text" class="text-input" />
// <p>Text field value: <span class="output"></span></p>

// // Добавить во вкладку CSS
// body {
//   margin: 16px;
//   line-height: 1.5;
//   font-family: sans-serif;
//   letter-spacing: 0.5px;
// }

// p {
//   overflow-wrap: anywhere;
// }

// input {
//   width: 100%;
//   max-width: 320px;
//   padding: 8px;
//   font: inherit;
//   letter-spacing: inherit;
// }

// // Добавить во вкладку JS
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });


// События focus и blur

// Элемент получает фокус при клике мыши или переходе клавишей Tab. Момент получения фокуса и потери очень важен, при получении фокуса мы можем подгрузить данные для автозаполнения, начать отслеживать изменения и т. п. При потере фокуса - проверить введённые данные.

// При фокусировке элемента происходит событие focus, а когда фокус исчезает, например пользователь кликает в другом месте экрана, происходит событие blur. Активировать или отменить фокус можно программно, вызвав в коде одноименные методы focus() и blur() у элемента.

// // Добавить во вкладку HTML
// <button type="button" data-action="set">Set focus to input</button>
// <button type="button" data-action="remove">Remove focus from input</button>
// <br><br>
// <input type="text" class="text-input" />

// // Добавить во вкладку CSS
// body {
//   margin: 16px;
//   line-height: 1.5;
//   font-family: sans-serif;
//   letter-spacing: 0.5px;
// }

// input {
//   width: 100%;
//   max-width: 320px;
//   padding: 8px;
//   font: inherit;
//   letter-spacing: inherit;
// }

// button {
//   display: inline-flex;
//   padding: 4px;
//   margin-right: 2px;
//   margin-left: 2px;
// }

// // Добавить во вкладку JS
// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });

// Фокус может быть только на одном элементе страницы в единицу времени и текущий элемент, на котором фокус, доступен как document.activeElement.

// ИНТЕРЕСНО
// Многие элементы не могут получить фокус. Например, если кликнуть по <div>, то фокусировка на нем не произойдет, потому что это не интерактивный элемент.