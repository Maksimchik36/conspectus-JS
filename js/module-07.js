        //     Модуль 7 - Занятие 13 - Делегирование событий

      
//         Распространение событий

// Распространение событий(event propagation) - это термин описывающий жизненный цикл события, который включает в себя три этапа: погружение, таргетинг и всплытие. На практике чаще всего используют только фазу всплытия.

// При наступлении события, оно проходит через три обязательные фазы:

// Capturing phase (погружение) - событие начинается на window и тонет (проходит через все элементы-предки) до самого глубокого целевого элемента на котором произошло действие, например клик.
// Target phase (таргетинг) - событие дошло до целевого элемента. Этот этап включает только уведомление элемента о том, что на нём произошло действие.
// Bubbling phase (всплытие) - заключительная фаза, событие всплывает от самого глубокого, целевого элемента, через все элементы-предки до window.

// ИНТЕРЕСНО
// Распространение часто неправильно используется как синоним стадии всплытия. Каждый раз, когда происходит событие, происходит его распространение.


// Всплытие событий

// При наступлении события, обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе, затем выше и так далее, вверх по цепочке вложенности. Этот процесс называется всплытием (event bubbling), потому что события «всплывают» от внутреннего элемента вверх через всех предков до window, подобно тому, как всплывает пузырек воздуха в воде.

// Рассмотрим пример, так будет понятнее. Есть три вложенных тега <div> с обработчиками клика на каждом из них.

// Всплытие гарантирует, что клик по #descendant вызовет обработчик клика, если он есть, сначала на самом #descendant, затем на элементе #child, далее на элементе #parent и так далее вверх по цепочке предков до window. Поэтому, если в примере кликнуть на #descendant, то последовательно выведутся alert для descendant → child → parent.

// // Добавить во вкладку HTML
// <div id="parent">
//   Parent
//   <div id="child">
//     Child
//     <div id="descendant">Descendant</div>
//   </div>
// </div>

// Добавить во вкладку CSS
// #parent,
// #child,
// #descendant {
//   margin: 16px;
//   padding: 16px;
//   border: 4px solid #212121;
//   border-radius: 8px;
//   color: #fff;
//   font-weight: 500;
//   font-size: 20px;
//   text-transform: uppercase;
// }

// #parent {
//   background-color: #673ab7;
// }

// #child {
//   background-color: #448aff;
// }

// #descendant {
//   background-color: #ff9800;
// }

// // Добавить во вкладку JS
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert("Parent click handler");
// });

// child.addEventListener("click", () => {
//   alert("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   alert("Descendant click handler");
// });

// ИНТЕРЕСНО
// Всплывают почти все события, например события focus и blur не всплывают, поэтому существуют их всплывающие аналоги - focusin и focusout.


// Свойство event.target

// Не зависимо от того где мы поймали событие во время его всплытия, всегда можно узнать где конкретно оно произошло. Самый глубокий элемент, который вызывает событие, называется целевым или исходным и доступен как event.target.

// event.target - это ссылка на исходный элемент на котором произошло событие, в процессе всплытия он неизменен.
// event.currentTarget - это ссылка текущий элемент до которого дошло всплытие, на нём сейчас выполняется обработчик события.
// Если слушатель события зарегистрирован на самом верхнем элементе, то он «поймает» все клики внутри, потому что события будут всплывать до этого элемента. Откройте консоль в примере и покликайте, event.target это всегда исходный (и самый глубокий) элемент на котором был сделан клик, а event.currentTarget не меняется.

// // // Добавить во вкладку HTML
// <div id="parent">
//   Parent
//   <div id="child">
//     Child
//     <div id="descendant">Descendant</div>
//   </div>
// </div>

// // // Добавить во вкладку CSS
// #parent,
// #child,
// #descendant {
//   margin: 16px;
//   padding: 16px;
//   border: 4px solid #212121;
//   border-radius: 8px;
//   color: #fff;
//   font-weight: 500;
//   font-size: 20px;
//   text-transform: uppercase;
// }

// #parent {
//   background-color: #673ab7;
// }

// #child {
//   background-color: #448aff;
// }

// #descendant {
//   background-color: #ff9800;
// }

// // // Добавить во вкладку JS
// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target); // элемент, на котором происходит событие (на который мы "кликаем")
//   console.log("event.currentTarget: ", event.currentTarget); // в данном строке всегда parent
// });

// Прекращение всплытия

// Обычно событие будет всплывать наверх до элемента window, вызывая все обработчики на своем пути. Но любой промежуточный обработчик может решить, что событие полностью обработано и остановить всплытие вызвав метод stopPropagation().

//  // Добавить во вкладку HTML
// <div id="parent">
//   Parent
//   <div id="child">
//     Child
//     <div id="descendant">Descendant</div>
//   </div>
// </div>

// // // Добавить во вкладку CSS
// #parent,
// #child,
// #descendant {
//   margin: 16px;
//   padding: 16px;
//   border: 4px solid #212121;
//   border-radius: 8px;
//   color: #fff;
//   font-weight: 500;
//   font-size: 20px;
//   text-transform: uppercase;
// }

// #parent {
//   background-color: #673ab7;
// }

// #child {
//   background-color: #448aff;
// }

// #descendant {
//   background-color: #ff9800;
// }

// // // Добавить во вкладку JS
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });

// Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены. То есть, метод stopPropagation() только препятствует продвижению события дальше. Если необходимо полностью остановить обработку события, используется метод stopImmediatePropagation(). Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.

// ИНТЕРЕСНО
// Не прекращайте всплытие без необходимости. Прекращение всплытия создаёт свои подводные камни, которые потом приходится обходить. Например, аналитика использует всплытие чтобы отслеживать события на странице.


// Делегирование событий

// Всплытие позволяет реализовать один из самых полезных приёмов - делегирование событий (event delegation). Он заключается в том, что если есть группа элементов, события которых нужно обрабатывать одинаково, то добавляется один обработчик на их общего предка, вместо того чтобы добавлять обработчик каждому элементу. Используя свойство event.target можно получить ссылку на целевой элемент, понять на каком именно потомке произошло событие и обработать его.

// Рассмотрим делегирование на примере. Создаем элемент <div>, добавляем в него произвольное количество кнопок, например 100, и регистриуем каждой из них слушателя события клика с функцией handleButtonClick .

// Проблема в том, что у нас есть сто слушателей событий. Все они указывают на одну и ту же функцию слушателя, но самих слушателей 100. Что если мы переместим всех слушателей на общего предка, элемент <div>?

// Теперь есть только один обработчик события клика и браузеру не нужно хранить в памяти сто различных слушателей. То есть делегирование сводится к трём простым шагам.

// 1. Определить общего предка группы элементов для отслеживания событий.
// 2. Зарегистрировать на элементе-предке обработчик события которое мы хотим отлавливать от группы элементов.
// 3. В обработчике использовать event.target для выбора целевого элемента.

// Такой подход упрощает инициализацию слушателей однотипных элементов. Можно добавлять, удалять или изменять элементы, при этом не нужно вручную добавлять или удалять обработчики событий.


// Палитра цветов

// Будем делать палитру цветов с возможностью выбрать цвет при клике и отображением выбранного цвета. Вместо того, чтобы назначать обработчик каждому элементу палитры, которых может быть очень много, повесим один слушатель на общего предка div.color-palette. В обработчике события клика используем event.target, чтобы получить элемент на котором произошло событие и связанный с ним цвет, который будем хранить в атрибуте data-color.

// // // // Добавить во вкладку HTML
// <p class="output">Selected color: -</p>
// <div class="color-palette"></div>

// // // // Добавить во вкладку CSS
// body {
//   margin: 8px;
//   font-family: sans-serif;
// }

// .output {
//   text-align: center;
//   text-transform: uppercase;
//   font-size: 24px;
//   font-weight: 700;
// }

// .color-palette {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
//   gap: 4px;
// }

// .color-palette .item {
//   padding: 0;
//   margin: 0;
//   border: none;
//   border-radius: 4px;
//   width: 40px;
//   height: 40px;
//   cursor: pointer;
//   transition: transform 250ms ease-in-out;
// }

// .color-palette .item:hover {
//   transform: scale(1.1);

// // // // Добавить во вкладку JS
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRangomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRangomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

// ИНТЕРЕСНО
// Обязательно проверяем цель клика, чтобы это точно была кнопка, мы не хотим обрабатывать клики в элемент-контейнер. Для проверки типа элемента используем свойство nodeName.




//   Модуль 7 - Занятие 14 - throttle/debounce и lazyload

// Throttle и Debounce

// Довольно часто необходимо обработать изменение размера окна, скролл, перемещение мыши или текстовый ввод пользователя. Это может быть сортировка коллекции и отрисовка результатов, анимация элемента, манипуляции с DOM-деревом и прочее. Все это улучшает UX (user experience), но, к сожалению, даёт большую нагрузку на браузер из-за того, что обработчики событий срабатывают слишком часто. Такие события неофициально называют «chatty events».

//Например, если добавить слушателя события на скролл, то при прокрутке страницы мышкой можно вызвать около 30 событий в секунду. Медленная прокрутка (свайп) в смартфоне может вызвать до 100 событий в секунду. Если обработчик события скролла выполняет тяжелые вычисления и другие DOM-манипуляции, гарантированно будут проблемы с производительностью.

// // Добавить во вкладку HTML
// <p class="cta">Scroll me</p>

// <div class="event-counter">
//   <div class="box">
//     <p>Number of scroll events</p>
//     <span class="output">0</span>
//   </div>
// </div>

// // Добавить во вкладку CSS
// body {
//         height: 5000vh;
//         font-family: sans-serif;
//         line-height: 1.5;
//         color: #212121;
//         background-color: #f5f5f5;
//       }
      
//       .cta {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-size: 20px;
//       }
      
//       .cta::before,
//       .cta::after {
//         content: "\2193";
//         margin-left: 4px;
//         margin-right: 4px;
//       }
      
//       .event-counter {
//         position: sticky;
//         top: 100px;
//         display: flex;
//         justify-content: center;
//       }
      
//       .box {
//         display: inline-flex;
//         flex-direction: column;
//         align-items: center;
//         padding: 12px;
//         border: 1px solid #03a9f4;
//         border-radius: 4px;
//       }
      
//       .event-counter p {
//         margin: 0;
//         font-size: 16px;
//       }
      
//       .event-counter span {
//         font-size: 48px;
//         font-family: monospace;
//       }

// // Добавить во вкладку JS
// const output = document.querySelector(".output");
// let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });


// Throttle и Debounce - это два похожих, но разных по поведению приёма, позволяющих контролировать сколько раз мы разрешаем выполнение функции с течением времени. Используем их реализацию из библиотеки Lodash.


// Подключение библиотеки

// CDN (Content Delivery Network) - это географически распределённая сетевая инфраструктура, обеспечивающая быструю доставку контента пользователям веб-сервисов и сайтов. Входящие в состав CDN cерверы географически располагаются таким образом, чтобы сделать время ответа для пользователей сайта/сервиса минимальным.

//Подключим в проект библиотеку Lodash через CDN. Для этого используем сервис cdnjs.com и добавим ссылку на скрипт библиотеки в конец HTML-документа, как показано в примере.

// // index.html

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Document title</title>
//   </head>
//   <body>
//     <!-- HTML-markup -->

//     <!-- Lodash library script file -->
//     <script
//       async
//       src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
//       integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
//       crossorigin="anonymous"
//       referrerpolicy="no-referrer"
//     ></script>
//     <!-- Your script file -->
//     <script defer src="path/to/script.js"></script>
//   </body>
// </html>

// Теперь мы можем получить доступ к библиотеке в нашем скрипте. При подключении библиотек через CDN, на объект window добавляется свойство в котором хранится то, что предоставляет библиотека. Имя этого свойства уникально для библиотеки и описано в её документации. Для Lodash это символ нижнего подчёркивания _. Для проверки используем метод add, который просто складывает два числа.

// // script.js

// const result = _.add(2, 3);
// console.log(result); // 5


// Throttle

// Прием throttle контролирует количество раз которое функция может быть вызвана в течение промежутка времени. То есть позволяет вызывать функцию не чаще чем один раз в N миллисекунд, гарантируя ее регулярное выполнение.

// Используя throttle мы не контролируем, как часто браузер будет генерировать события. Мы всего-лишь берем контроль над частотой выполнения функции обработчика события.

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );

// Реализация из библиотеки Lodash ожидает первым аргументом функцию которую необходимо «затормозить», а вторым количество миллисекунд. Возвращает новую функцию для передачи в слушатель события.

// // // Добавить во вкладку HTML
// <p class="cta">Scroll me</p>

// <div class="event-counter">
//   <div class="box">
//     <p>No timing function</p>
//     <span class="output vanilla">0</span>
//   </div>

//   <div class="box">
//     <p>Throttled</p>
//     <span class="output throttled">0</span>
//   </div>
// </div>

// // // Добавить во вкладку CSS
// body {
//         height: 5000vh;
//         font-family: sans-serif;
//         line-height: 1.5;
//         color: #212121;
//         background-color: #f5f5f5;
//       }
      
//       .cta {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-size: 20px;
//       }
      
//       .cta::before,
//       .cta::after {
//         content: "\2193";
//         margin-left: 4px;
//         margin-right: 4px;
//       }
      
//       .event-counter {
//         position: sticky;
//         top: 100px;
//         display: flex;
//         justify-content: center;
//       }
      
//       .box {
//         min-width: 160px;
//         display: inline-flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         margin-left: 8px;
//         margin-right: 8px;
//         padding: 12px;
//         border: 1px solid #03a9f4;
//         border-radius: 4px;
//       }
      
//       .event-counter p {
//         margin: 0;
//         font-size: 16px;
//       }
      
//       .event-counter span {
//         font-size: 48px;
//         font-family: monospace;
//       }

// // // Добавить во вкладку JS
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );


// Debounce

// Прием debounce гарантирует, что функция будет вызвана только если между событиями будет пауза в N миллисекунд. Например, пока пользователь скролит страницу функция не вызовется, но как только он перестал скролить, функция будет вызвана через 300 миллисекунд. Если скролл возобновится раньше чем через 300 миллисекунд после паузы, функция не вызовется.

// Используя debounce мы не управляем тем как часто браузер будет генерировать события, а всего-лишь берем контроль над частотой выполнения функции обработчика события.

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     console.log("Scroll handler call after 300ms pause");
//   }, 300)
// );

// Реализация из библиотеки Lodash ожидает первым аргументом функцию, а вторым количество миллисекунд. Возвращает новую функцию для передачи в слушатель события.

// // // Добавить во вкладку HTML
// <p class="cta">Scroll me</p>

// <div class="event-counter">
//   <div class="box">
//     <p>No timing function</p>
//     <span class="output vanilla">0</span>
//   </div>

//   <div class="box">
//     <p>Throttled</p>
//     <span class="output throttled">0</span>
//   </div>

//   <div class="box">
//     <p>Debounced</p>
//     <span class="output debounced">0</span>
//   </div>
// </div>

// // // Добавить во вкладку CSS
// body {
//         height: 5000vh;
//         font-family: sans-serif;
//         line-height: 1.5;
//         color: #212121;
//         background-color: #f5f5f5;
//       }
      
//       .cta {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-size: 20px;
//       }
      
//       .cta::before,
//       .cta::after {
//         content: "\2193";
//         margin-left: 4px;
//         margin-right: 4px;
//       }
      
//       .event-counter {
//         position: sticky;
//         top: 100px;
//         display: flex;
//         justify-content: center;
//       }
      
//       .box {
//         min-width: 160px;
//         display: inline-flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         margin-left: 8px;
//         margin-right: 8px;
//         padding: 12px;
//         border: 1px solid #03a9f4;
//         border-radius: 4px;
//       }
      
//       .event-counter p {
//         margin: 0;
//         font-size: 16px;
//       }
      
//       .event-counter span {
//         font-size: 48px;
//         font-family: monospace;
//       }

// // // Добавить во вкладку JS
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// );


// Режимы метода debounce

// По умолчанию метод debounce работает в режиме когда функция вызывается через N миллисекунд после паузы между потоками событий. Этот режим называется trailing edge (в конце). Есть задачи когда функцию надо вызвать сразу при наступлении первого события в потоке, а потом игнорировать все последующие события, до паузы между ними, например в 300 миллисекунд. На старте следующего потока событий это поведение повторяется. Такой режим называется leading edge (в начале).

// Методу debounce библиотеки Lodash можно передать необязательный третий аргумент - обьект параметров в котором есть два свойства leading (по умолчанию false) и trailing (по умолчанию true). Эти настройки изменяют режим и указывают, должна ли функция запускаться в начале потока событий или в конце после паузы.

// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       console.log("Scroll handler call on every event stream start");
//     },
//     300,
//     {
//       leading: true,
//       trailing: false,
//     }
//   )
// );

// На практике режим leading может применяться например в случае когда необходимо выполнить функцию отправки запроса на сервер при первом клике кнопки, после чего игнорировать все послудующие клики до паузы. В примере реализован debounce в обоих режимах для события scroll.

// // Добавить во вкладку HTML
// <p class="cta">Scroll me</p>

// <div class="container">
//   <div class="box">
//     <p>No timing function</p>
//     <span class="output vanilla">0</span>
//   </div>

//   <div class="box">
//     <p>Throttled</p>
//     <span class="output throttled">0</span>
//   </div>

//   <div class="box">
//     <p>Trailing debounce</p>
//     <span class="output trailing">0</span>
//   </div>

//   <div class="box">
//     <p>Leading debounce</p>
//     <span class="output leading">0</span>
//   </div>
// </div>

// // Добавить во вкладку CSS
// body {
//         height: 5000vh;
//         font-family: sans-serif;
//         line-height: 1.5;
//         color: #212121;
//         background-color: #f5f5f5;
//       }
      
//       .cta {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-size: 20px;
//       }
      
//       .cta::before,
//       .cta::after {
//         content: "\2193";
//         margin-left: 4px;
//         margin-right: 4px;
//       }
      
//       .container {
//         position: sticky;
//         top: 100px;
//         display: flex;
//         justify-content: center;
//       }
      
//       .box {
//         min-width: 160px;
//         display: inline-flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         margin-left: 8px;
//         margin-right: 8px;
//         padding: 12px;
//         border: 1px solid #03a9f4;
//         border-radius: 4px;
//       }
      
//       .box p {
//         margin: 0;
//         font-size: 16px;
//       }
      
//       .box span {
//         font-size: 48px;
//         font-family: monospace;
//       }

// // Добавить во вкладку JS
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const trailingOutput = document.querySelector(".output.trailing");
// const leadingOutput = document.querySelector(".output.leading");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   trailing: 0,
//   leading: 0
// };

// // Trailing debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300)
// );

// // Leading debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       eventCounter.leading += 1;
//       leadingOutput.textContent = eventCounter.leading;
//     },
//     300,
//     { trailing: false, leading: true }
//   )
// );

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );



// Отложенная загрузка

// Веб-страницы содержат большое количество изображений, которые раздувают размер страниц и влияют на скорость их загрузки. Большинство изображений находятся за пределами первого экрана (за кадром, below the fold), поэтому пользователь увидит их только после того как прокрутит страницу. Это значит, что вы возможно загружаете то, что пользователь никогда не увидит, но потратит на это время и возможно деньги. Загрузка некритического контента также тратит батарею мобильных устройств и другие системные ресурсы.

// Термины «above the fold» (в кадре) и «below the fold» (за кадром) пришли из времен до появления цифровых технологий. Если вы когда-либо покупали газету в киоске, их обычно складывают пополам, чтобы прохожие могли видеть только верхнюю половину первой страницы. Если им не понравится то, что они увидят, они пройдут мимо, и продажи упадут. Вот почему так важно размещать наиболее интересный контент в верхней части страницы.

// Отложенная загрузка (lazy-loading) - это приём, который откладывает загрузку некритических ресурсов во время загрузки страницы. Вместо этого, эти некритические ресурсы загружаются только по необходимости. Это снижает начальный вес ресурсов которые необходимо загрузить для отображения страницы, использование системных ресурсов, повышает время её загрузки и последущего рендера. Все это положительно сказывается на производительности.

// Вы, наверное, уже видели в действии ленивую загрузку. Она выглядит примерно так:
// - Вы попадаете на страницу и начинаете прокручивать её по мере чтения содержимого.
// - В какой-то момент вы прокручиваете страницу до изображения-заглушки.
// - Изображение-заглушка внезапно заменяется настоящим изображением.


// Атрибут loading

// // Раньше разработчикам приходилось полагаться только на возможности JavaScript. Современные браузеры умеют делать это без JavaScript, но, к сожалению, не все. HTML-атрибут loading тега <img> поддерживается нативно во всех современных браузерах кроме Safari и позволяет браузеру отложить загрузку закадровых изображений до тех пор, пока пользователь не прокрутит до них страницу.

//  <img src="my-image.jpg" loading="lazy" alt="Image description" /> 

// Поддерживает три значения:
// - lazy - браузер выполнит отложенную загрузку изображения.
// - eager - изображение будет загружено при первой возможности, то есть без отложенной загрузки.
// - auto - браузер сам определяет, выполнять отложенную загрузку или нет. Значение по умолчанию.

// Мы не можем узнать или изменить поведение и механизм определения времени отложенной загрузки изображения браузером. Главное, что браузер загрузит такие изображения незадолго до того, как они попадут в область просмотра.

// Откройте вкладку Network в инструментах разработчика и выберите фильтр Img, чтобы отображалась только загрузка изображений. После этого прокручивайте пример и наблюдайте как будут догружаться закадровые изображения котов. Браузеры поддерживающие атрибут loading будут загружать изображения отложенно, а браузеры без поддержки загрузят все изображения сразу.

// // Добавить во вкладку HTML:
// <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" loading="lazy" alt="Close-Up Photography of Sleeping Tabby Cat" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img src="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" loading="lazy" alt="Photo of Grey Tabby Kitten Lying Down" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img src="https://images.pexels.com/photos/1440403/pexels-photo-1440403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" loading="lazy" alt="Orange Kitten" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img src="https://images.pexels.com/photos/2817421/pexels-photo-2817421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" loading="lazy" alt="Photo of Tabby Cat Sleeping On Chair" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" loading="lazy" alt="Brown Cat With Green Eyes" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img src="https://images.pexels.com/photos/3635550/pexels-photo-3635550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" loading="lazy" alt="Close-up Photo of Grey and Brown Cat" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" loading="lazy" alt="Close-Up Photo of Yellow and White Cat" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// // Добавить во вкладку CSS:
// body {
//         margin: 16px;
//         line-height: 1.5;
//         color: #2a2a2a;
//         background-color: #f5f5f5;
//       }
      
//       img {
//         display: block;
//         max-width: 100%;
//       }


// Библиотека lazysizes

// Чтобы обеспечить кроссбраузерность, то есть совместимость с более старыми браузерами, или такими которые еще не поддерживают это нативно, можно использовать ряд существующих JavaScript библиотек. Одни из самых популярных это lazysizes, vanilla-lazyload и lozad.js. Выбор библиотеки сводится к набору предоставляемых возможностей и личным предпочтениям. Мы разберем библиотеку lazysizes.

// ИНТЕРЕСНО
// Нативная поддержка лучше и более производительна чем использование библиотек, но они гарантированно работают во всех браузерах и могут предоставлять расширенные возможности отложенной загрузки которых еще нет в стандарте.

// Первое что необходимо сделать это подключить библиотеку в проект используя сервис cdnjs.com. Тег с ссылкой на скрипт добавляется в конец <body>, также как мы это делали для библиотеки Lodash.

// // // index.html

// <body>
//   <!-- HTML-markup -->

//   <!-- Lazysizes library script file -->
//   <script
//     src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
//     integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
//     crossorigin="anonymous"
//     referrerpolicy="no-referrer"
//   ></script>
//   <!-- Your script file -->
//   <script defer src="path/to/script.js"></script>
// </body>

// ИНТЕРЕСНО
// Библиотека lazysizes самоинициализируется при загрузке на страницу. То есть для базового использования в JavaScript ничего делать не надо. Полный список её возможностей приведён в документации.

// Всем изображениям которые необходимо загружать отложенно задаём класс lazyload и заменяем атрибут src на data-src. Это необходимо библиотеке lazysizes для правильной работы.

// // // index.html

// <img class="lazyload" data-src="path/to/my-image.jpg" alt="Generic alt" />

// Пока изображение загружается можно показывать заполнитель низкого качества. Эта техника называется LQIP (Low Quality Image Placeholder). Есть много вариантов реализации LQIP, но для начала достаточно будет показывать один стандартный заполнитель вместо всех изображений. Для этого добавляем атрибут src, значением которого будет ссылка на это изображение-заполнитель.

// // index.html

// <img
//   class="lazyload"
//   src="path/to/lqip-placeholder.jpg"
//   data-src="path/to/my-image.jpg"
//   alt="Generic alt"
// />

// Когда изображение было загружено, библиотека lazysizes добавляет элементу класс lazyloaded. Это можно использовать для применения CSS-эффектов в момент загрузки изображения.

// // styles.css

// .blur-up {
//   filter: blur(5px);
//   transition: filter 400ms;
// }

// .blur-up.lazyloaded {
//   filter: blur(0);
// }

// После объявления стилей, добавляем класс blur-up тегам <img>.

// // index.html

// <img
//   class="lazyload blur-up"
//   src="path/to/lqip-placeholder.jpg"
//   data-src="path/to/my-image.jpg"
//   alt="Generic alt"
// />

// Применим все эти шаги на примере, добавив кроссбраузерную поддержку отложенной загрузки изображений нашему сайту про котов. Теперь даже Safari выполняет отложенную загрузку изображений.

// // Добавить во вкладку HTML:
// <img class="lazyload blur-up" src="https://via.placeholder.com/960" data-src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" alt="Close-Up Photography of Sleeping Tabby Cat" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img class="lazyload blur-up" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" alt="Photo of Grey Tabby Kitten Lying Down" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img class="lazyload blur-up" src="https://via.placeholder.com/960" data-src="https://images.pexels.com/photos/1440403/pexels-photo-1440403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" alt="Orange Kitten" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img class="lazyload blur-up" src="https://via.placeholder.com/960" data-src="https://images.pexels.com/photos/2817421/pexels-photo-2817421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" alt="Photo of Tabby Cat Sleeping On Chair" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img class="lazyload blur-up" src="https://via.placeholder.com/960" data-src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" alt="Brown Cat With Green Eyes" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img class="lazyload blur-up" src="https://via.placeholder.com/960" data-src="https://images.pexels.com/photos/3635550/pexels-photo-3635550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" alt="Close-up Photo of Grey and Brown Cat" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// <img class="lazyload blur-up" src="https://via.placeholder.com/960" data-src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960" alt="Close-Up Photo of Yellow and White Cat" width="960" />

// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.</p>

// // Добавить во вкладку CSS:
// body {
//         margin: 16px;
//         line-height: 1.5;
//         color: #2a2a2a;
//         background-color: #f5f5f5;
//       }
      
//       img {
//         display: block;
//         max-width: 100%;
//       }
      
//       .blur-up {
//         filter: blur(5px);
//         transition: filter 400ms;
//       }
      
//       .blur-up.lazyloaded {
//         filter: blur(0);
//       }

