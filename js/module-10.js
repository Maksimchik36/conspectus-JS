//    Модуль 10 - Занятие 19 - HTTP-запросы


// Протокол HTTP

// Перед тем как пользователь увидит содержимое сайта на экране, браузер делает запрос на сервер, чтобы получить это самое содержимое. HTML-файл, изображения, стили и скрипты приходят с сервера по HTTP протоколу - набору правил и соглашений, используемых при передаче данных в сети.

// HyperText Transfer Protocol (протокол передачи гипертекста) - широко распространённый протокол для передачи веб-ресурсов различных типов: html, css, javascript, изображений, аудио и видео и т. д.

// HTTP основан на структуре клиент-сервер и модели запрос-ответ, в которой клиентское приложение инициирует соединение, формирует запрос и отправляет его на сервер, после чего сервер обрабатывает этот запрос, формирует ответ и передаёт его обратно клиенту. Связь между ними осуществляется посредством череды перемежающихся HTTP-запросов и HTTP-ответов.

// Запрос происходит в несколько этапов:

// 1. DNS-запрос - поиск ближайшего DNS-сервера, чтобы преобразовать адрес (например google.com ) в его числовое представление, IP-адрес (74.125.87.99).
// 2. Соединение - установка соединения с сервером по полученному IP-адресу.
// 3. Отправка данных - пересылка пакетов с клиента на сервер.
// 4. Ожидание ответа - ожидание пока пакеты данных дойдут до сервера, он их обработает и ответ вернется назад.
// 5. Получение данных - пакеты пришли, можно получать из них данные.


// Протокол HTTPS

// HyperText Transfer Protocol Secure - это надстойка над протоколом HTTP, в которой все сообщения между клиентом и сервером шифруются в целях повышения безопасности. Обеспечивает защиту от атак, основанных на прослушивании соединения. Данные передаются поверх криптографических протоколов SSL или TLS.

// При общении через обычное HTTP-соединение все данные передаются в виде текста и могут быть прочитаны всеми, кто получил доступ к соединению между клиентом и сервером. Если пользователи делают покупки онлайн и заполняют форму заказа, содержащую информацию о кредитной карте, их финансовые данные гораздо легче украсть, если они передаются в виде текста. С HTTPS данные будут зашифрованы и хакер не сможет их расшифровать, потому что для расшифровки необходим доступ к закрытому ключу, который хранится на сервере.

// ИНТЕРЕСНО
// Протокол HTTPS гарантирует, что информация о клиенте, например номера кредитных карт, зашифрована и не может быть перехвачена в расшифрованном виде. Посетители могут подтвердить, что сайт безопасен, посмотрев на иконку слева от адресной строки, защищенные соединения помечаются иконкой замка.

// Дополнительные материалы
// DNS explained  https://www.youtube.com/watch?v=72snZctFFtA
// How The Internet Works https://www.youtube.com/playlist?list=PLzdnOPI1iJNfMRZm5DDxco3UdsFegvuB7
// The Internet: Crash Course Computer Science #29 https://www.youtube.com/watch?v=AEaKrq3SpW8&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo
// The World Wide Web: Crash Course Computer Science #30 https://www.youtube.com/watch?v=guvsH5OFizE&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo



// REST API

// Сервер это компьютер со специальным программным обеспечением. Бекенд это программа, расположенная на сервере, способная обработать входящие HTTP-запросы и имеющая набор готовых действий на определенные запросы.

// API (интерфейс прикладного программирования) - набор четко определенных правил связи между различными программными компонентами. Интерфейс описывает, что можно попросить программу сделать и что получится в результате.

// REST (representational state transfer) - стиль бекенд-архитектуры, основанный на наборе принципов, которые описывают как сетевые ресурсы определяются и адресуются.

// REST API - бекенд построенный по принципу REST. Служит прослойкой между веб-приложением и базой данных. Имеет стандартный интерфейс для обращения к ресурсам. Работает как веб-сайт, мы посылаем HTTP-запрос с клиента на сервер, а в ответ, вместо HTML-страницы, получаем данные в JSON-формате.


// Формат запроса

// REST-сервис требует, чтобы клиент делал запрос на добавление, извлечение или изменение данных. Запрос может состоять из следующих частей.

// Entry	Description
// HTTP-метод	Определяет какую операцию выполнять.
// HTTP-заголовки	Позволяет клиенту передавать служебную информацию о запросе.
// Путь	Путь к ресурсу. Доступные пути описываются в документации бэкенда.
// Тело	Блок запроса содержащий данные.


// HTTP-методы

// Выделяют несколько основных HTTP-методов для работы с REST-сервисом.

// Method	Description
// POST	Создать новый ресурс
// GET	Получить набор ресурсов или один ресурс
// PUT	Обновить существующий или создать новый ресурс
// PATCH	Обновить существующий ресурс
// DELETE	Удалить ресурс


// HTTP-заголовки

// Заголовки содержат служебную информацию относящуюся к контенту запроса. Например, тип контента, который клиент может обработать в ответе от сервера (заголовок Accept) или который описывает тип ресурса, который клиент отправляет серверу или сервер отправляет клиенту (заголовок Content-Type).

// Accept: text/html
// Content-Type: application/json

// MIME-типы - варианты типов контента. Используются для указания содержимого запроса и ответа, состоят из типа и подтипа, которые разделены косой чертой /. Например, текстовый файл, содержащий HTML, будет описан типом text/html. Если файл содержит CSS, он будет описан как text/css. Данные в формате JSON будут описаны как application/json. Если клиент ожидает text/css, а получает application/json, он не сможет распознать и обработать контент овтета.


// Пути

// Запросы должны содержать путь к ресурсу, над которым выполняется операция. Доступные пути (эндпоинты, ресурсы) описываются в документации бэкенда.

// GET https://bookstore.com/api/orders
// Accept: application/json

// Такой путь явно указывает ресурс, даже если вы его никогда раньше не видели, потому что он является иерархическим и описательным. Мы выполняем запрос для получения коллекции заказов.

// Для того чтобы получить один элемент коллекции, его идентификатор добавляется к ресурсу. Рассмотрим запрос на чтение одного заказа с идентификатором 289.

// GET https://bookstore.com/api/orders/289
// Accept: application/json

// Последняя часть пути называется динамический параметр и в документации описывается как /ресурс/:параметр. Ресурс неизменен, это путь к целой коллекции, а значение параметра меняется для каждого её элемента.


// Коды ответов

// На запрос клиента сервер отправляет ответ, который содержит код состояния, чтобы информировать клиента о результате операции. Коды делятся на группы.

// Group	Description
// 1XX	Несут информационное назначение
// 2XX	Коды успешного проведения операции
// 3XX	Описывают все, что связано с перенаправлением (redirect)
// 4XX	Указывают на ошибки клиента
// 5XX	Указывают на ошибки со стороны сервера

// ИНТЕРЕСНО
// Нет необходимости помнить все коды из каждой группы, достаточно знать наиболее распространенные. Остальные всегда можно посмотреть в справочнике HTTP-кодов.

// Code	Description
// 200 (OK)	Стандартный ответ для успешных HTTP-запросов.
// 201 (Created)	Стандартный ответ для HTTP-запроса, который привел к успешному созданию ресурса.
// 400 (Bad Request)	Запрос не может быть обработан из-за неверного синтаксиса запроса или другой ошибки клиента.
// 401 (Unauthorized)	Для доступа к ресурсу требуется авторизация.
// 403 (Forbidden)	У клиента нет разрешения на доступ к этому ресурсу.
// 404 (Not Found)	В настоящее время ресурс не найден. Возможно, он был удален или еще не существует.
// 500 (Internal Server Error)	Общий ответ на непредвиденный сбой сервера, если нет более конкретной информации.


// Запрос-Ответ

// Предположим у нас есть приложение которое позволяет просматривать, создавать, редактировать и удалять клиентов и заказы небольшого книжного магазина, бекенд которого размещен на bookstore.com/api. Используя полученные знания опишем псевдокодом процесс запрос-ответ к бекенду.

// Если мы хотим получить данные о всех клиентах, GET запрос будет выглядеть так.

// GET bookstore.com/api/customers
// Accept: application/json

// На что сервер отправит нам такой ответ.

// Status: 200 OK
// Content-Type: application/json
// Body: JSON-данные о всех клиентах

// Для получения данных одного клиента мы указываем его идентификатор, уточняя GET запрос.

// GET bookstore.com/api/customers/289
// Accept: application/json

// На что сервер отправит нам такой ответ.

// Status: 200 OK
// Content-Type: application/json
// Body: JSON-данные о клиенте

// Для того чтобы добавить нового клиента выполняем POST запрос.

// POST bookstore.com/api/customers
// Content-Type: application/json
// Body: { "username": "Mango", "email": "mango@gmail.com" }

// Сервер добавляет уникальный идентификатор и возвращает объект целиком как результат.

// Status: 201 Created
// Content-type: application/json
// Body: { "id": 18674, "username": "Mango", "email": "mango@gmail.com" }



// AJAX


// AJAX (Asynchronous JavaScript and XML) - метод получения или отправки данных с последующим обновлением интерфейса по этим данным, без необходимости перезагрузки страницы. За счет этого уменьшается время отклика и веб-страница становится более интерактивной. Этот процесс можно разобрать на примере подгрузки данных.

// 1. На веб-странице происходит событие (страница загружается, нажимается кнопка «Показать больше», отправляется форма и т. п.).
// 2. На клиенте, с помощью JavaScript, реакцией на это событие выполнятся функция для работы с сервером, где создается и отправляется HTTP-запрос.
// 3. Сервер получает и обрабатывает HTTP-запрос, отправляя обратно в ответе данные в формате JSON.
// 4. На клиенте, с помощью JavaScript, ответ от сервера обрабатывается, считываются данные и обновляется интерфейс.

// ИНТЕРЕСНО
// Несмотря на то, что в названии технологии присутствует XML, в современном вебе его заменил JSON, а название оставили как дань памяти. Под AJAX подразумевают любое общение с сервером без перезагрузки страницы.


// Fetch API

// Встроенный в браузер интерфейс доступный на объекте window, который содержит набор свойств и методов для отправки, получения и обработки ресурсов от сервера. Метод fetch() предоставляет современный интерфейс для составления запросов к серверу и построен на промисах.

// fetch(url, options)

// url - путь к данным на бэкенде которые необходимо получить, создать или изменить. Обязательный аргумент.
// options - объект настроек запроса: метод (по умолчанию GET), заголовки, тело и т. д. Необязательный аргумент.

// Будем делать запросы к JSONPlaceholder API - публичному REST API для быстрого прототипирования, который предоставляет коллекцию не настоящих пользователей в ресурсе /users.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     // Response handling
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });


// Проверка ответа

// Значение промиса, который возвращает метод fetch(), это объект со служебной информацией о состоянии ответа сервера. Экземпляр класса Response, снабжен различными методами и свойствами. В зависимости от типа получаемого контента, используется различный метод для преобразования тела ответа в данные.

// json() - парсит данные в JSON-формате.
// text() - парсит данные в простом текстовом формате, например .csv (табличные данные).
// blob() - парсит данные описывающие файл, например изображение, аудио или видео.

// В первом методе then() выполняется проверка статуса ответа и преобразование данных в правильный формат, или явное создание ошибки чтобы обработать неудачный HTTP-запрос в блоке catch().

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

// ИНТЕРЕСНО
// Это необходимо для того, чтобы fetch() правильно среагировал на статус код 404, который технически не является ошибкой, но для клиента это не успешный результат.


// Вкладка Network

// В инструментах разработчика на вкладке Network отображаются все выполняющиеся на странице HTTP-запросы. Выбрав фильтр XHR, останутся только запросы к бэкенду. После нажатия кнопки в примере, через некоторое время, запрос отобразится в списке. Выбрав его можно посмотреть служебную информацию и тело ответа на подвкладках Headers, Preview и Response.


// Работа с публичным REST API

// Каждый бэкенд уникален, их тысячи. С другой стороны REST API построены по стандартной архитектуре. Это значит, что можно понять принцип их работы, после чего, все что нужно сделать - это ознакомиться с документацией того бэкенда, который необходимо использовать.

// Продолжим работать с JSONPlaceholder API. Из документации берем URL ресурса для запроса информации о коллекции не настоящих пользователей.

// https://jsonplaceholder.typicode.com/users
// Этот путь состоит из следующих частей:

// https://jsonplaceholder.typicode.com - это эндпоинт, базовый URL, точка входа в API.
// /users - ресурс, к которому мы обращаемся.

// По клику на кнопку «Fetch users» сделаем GET-запрос и отрисуем список пользователей по полученным данным.

// // Добавить во вкладку HTML

// <button type="button" class="btn">Fetch users</button>
// <ul class="user-list"></ul>

// // Добавить во вкладку CSS

// body {
//     margin: 16px;
//     line-height: 1.5;
//     color: #212121;
//     font-family: sans-serif;
//   }
  
//   p {
//     margin: 0;
//   }
  
//   .user-list {
//     margin: 0;
//     list-style: none;
//     padding: 24px;
//   }
  
//   .user-list li:not(:last-child) {
//     margin-bottom: 16px;
//   }

// // Добавить во вкладку JS

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUserList(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }

// ИНТЕРЕСНО
// Обратите внимание на то, что функция fetchUsers() возвращает промис, поэтому на результат её вызова мы добавляем цепочку методов then() и catch().


// Ошибка новичка

// Разберем распространенную ошибку при работе с асинхронным кодом - попытку использовать данные HTTP-запроса вне коллбэка метода then(). Новичок пытается записать «результат fetch» во внешнюю пременную и использовать её ниже по коду сразу за вызовом метода fetch().

// let globalVariable; // undefined

// // Initializing data fetching
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(users => {
//     console.log("users inside then callback: ", users);

//     // Writing the result to a global variable
//     globalVariable = users;

//     // Everything is ok here, the data is in the variable
//     console.log("globalVariable inside fetch callback: ", globalVariable);
//   });

// // No async data here
// console.log("globalVariable outside fetch: ", globalVariable); // undefined

// Вне коллбэка метода then() данных нет, так как последний console.log() выполнится раньше чем придет ответ от сервера. В это время переменная globalVariable еще содержит undefined. Значение выполнившегося промиса доступно только в коллбэке метода then().


// Параметры строки запроса

// Параметры запроса позволяют указать бекенду дополнительные критерии. Например, сколько элементов коллекции мы хотим получить в запросе, возможно необходимо добавить сортировку по какому-то свойству объекта, ограничить выборку и т. п. Список параметров запроса, их названия и возможнные значения зависят от бэкенда и описаны в документации.

// Символ ? указывает на старт параметров запроса. Каждый параметр это пара имя=значение. Символ & используется для указания смыслового «И», разяделяя параметры в строке запроса.

// const url = "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name";

// Такой GET-запрос вернет массив из семи пользователей (всего их 10) отсортированных по имени (поле name) в алфавитном порядке. Подчеркивания в именах параметров специфичны для этого бэкенда, это не какой-то стандарт.

// // Добавить во вкладку HTML

// <button type="button" class="btn">Fetch users</button>
// <ul class="user-list"></ul>

// // Добавить во вкладку CSS
// body {
//     margin: 16px;
//     line-height: 1.5;
//     color: #212121;
//     font-family: sans-serif;
//   }
  
//   p {
//     margin: 0;
//   }
  
//   .user-list {
//     margin: 0;
//     list-style: none;
//     padding: 24px;
//   }
  
//   .user-list li:not(:last-child) {
//     margin-bottom: 16px;
//   }

// // Добавить во вкладку JS

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUserList(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }


// Класс URLSearchParams

// Параметров может быть много, и составлять из них одну длинную строку не удобно, как для читабельности, так и для её последующего редактирования. При составлении строки параметров создаётся экземпляр класса URLSearchParams и инициализируется объектом. Результатом будет специальный объект (итератор) с методами, который в строчном преобразовании возвращает результат вызова метода toString() - своё строчное представление.

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

// В строчном виде свойства объекта станут параметрами и их значениями. Параметры будут разделены символом &. При интерполяции значения в шаблонных строках происходит его неявное преобразование к строке, поэтому не нужно вызывать метод toString() при составлении URL. Не забывайте указывать начало строки запроса символом ?.


// HTTP-заголовки

// Класс Headers позволяет выполнять различные действия в заголовках HTTP-запроса и ответа. Эти действия включают в себя извлечение, настройку, добавление и удаление заголовков.

// const headers = new Headers({
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value",
// });

// headers.append("Content-Type", "text/bash");
// headers.append("X-Custom-Header", "custom value");
// headers.has("Content-Type"); // true
// headers.get("Content-Type"); // "text/bash"
// headers.set("Content-Type", "application/json");
// headers.delete("X-Custom-Header");

// На практике для составления заголовков запроса обычно использут просто литерал объекта со свойствами. В таком случае методов не будет, что зачастую и не требуется.

// const headers = {
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value",
// };

// Запрос с использованием заголовков будет выглядеть так.

// fetch("https://jsonplaceholder.typicode.com/users", {
//   headers: {
//     Accept: "application/json",
//   },
// }).then(response => {
//   // ...
// });

// ИНТЕРЕСНО
// Современные браузеры добавляют много заголовков по умолчанию, в зависимости от операции и тела запроса, поэтому нет необходимости явно указывать стандартные заголовки.



// Кросс-доменные запросы


// По умолчанию HTTP-запрос можно делать только в рамках текущего сайта. При попытке запроса на другой домен, порт или протокол, то есть выполнить кросс-доменный запрос - браузер выдаёт ошибку. Это сделано из соображений безопасности и права доступа настраиваются на бэкенде. Если бэкенд не поддерживает кросс-доменные запросы, то фронтенд-разработчик ничего не сможет с этим сделать в своем коде.

// ИНТЕРЕСНО
// Эта политика браузеров называется CORS и расшифровывается как Cross-Origin Resource Sharing, где Origin это и есть домен, порт или протокол. Дословный перевод звучит как «совместное использование ресурсов между разными источниками».

// При каждом запросе браузер сам добавляет HTTP-заголовок Origin, где указывает адрес веб-страницы которая хочет сделать HTTP-запрос. Например, если мы делаем fetch-запрос с веб-страницы https://my-site.com/about на https://my-api.com/users, то заголовки будут следующими.

// GET /users
// Host: my-api.com
// Origin: https://my-site.com

// Сервер проверяет заголовок Origin и, если он поддерживает кросс-доменные запросы, добавляет в ответ специальный HTTP-заголовок Access-Control-Allow-Origin.

// # Private API
// Access-Control-Allow-Origin: https://my-site.com

// # Public API
// Access-Control-Allow-Origin: *

// Значением этого заголовка будет разрешенный источник (Origin). В нашем случае это должен быть один сайт https://my-site.com, если бэкенд приватный, или спецсимвол *, если бэкенд публичный - разрешает делать запросы кому угодно.

// То есть браузер это некий посредник между JavaScript-кодом и бэкендом. Он добавляет каждому запросу заголовок Origin с правильным значением и проверяет наличие заголовка Access-Control-Allow-Origin в ответе. Если заголовок есть и его значение подходит, выполнится оригинальный запрос и JavaScript-код получит его результат, в противном случае будет ошибка CORS.