//            Модуль 11 - Занятие 21 - CRUD


// CRUD

// Для взаимодействия с ресурсами бэкенда используется четыре операции: создание (create), чтение (read), обновление (update) и удаление (delete). Для каждой из них определен стандартный HTTP-метод.

// Method	     |        Description
// POST	         |  Операция create - создать новый ресурс.
// GET	         |  Операция read - получить набор ресурсов или один ресурс по идентификатору.
// PUT и PATCH	 |  Операция update - обновить ресурс по идентификатору.
// DELETE	     |  Операция delete - удалить ресурс по идентификатору

// Будем делать запросы к JSONPlaceholder API, который предоставляет коллекцию не настоящих постов в ресурсе /posts, представленных объектами со свойствами id, author и body.


// Чтение

// HTTP-метод GET используется для получения существующих данных. Метод fetch() должен отправить на сервер GET-запрос без тела. Бэкенд, по получению запроса, обработает его и в ответе вернет необходимые ресурсы.

// Получим массив всех постов. Для этого обращаемся к ресурсу /posts описанному в документации бэкенда. Метод fetch() по умолчанию делает GET-запрос, поэтому переопределять опции запроса не обязательно.

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

// Получим один пост по идентификатору (свойство id) добавив его к ресурсу /posts/:postId. Последняя часть этого пути называется динамический параметр и в документации описывается как /ресурс/:параметр. Ресурс неизменен, это путь к целой коллекции, а значение параметра меняется для каждого её элемента.

// // Change this number to fetch different post
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));


// Создание

// Метод POST используется для добавления нового ресурса. Метод fetch() должен отправить на сервер POST-запрос, в теле которого будет объект с полями author и body, идентификатор будет автоматически создан базой данных. Результатом такого запроса будет объект добавленный в базу данных.

// const postToAdd = {
//   author: "Mango",
//   body: "CRUD is awesome",
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(postToAdd),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// Делаем запрос на создание поста обращаясь к ресурсу /posts, но в настройках метода fetch() изменяем HTTP-метод на POST. Так бэкенд знает, что нужно не прочитать уже существующее, а создать новый ресурс в этой коллекции.

// Тело запроса должно быть строкой, потому что протокол HTTP передает все как текст. При передаче сложных типов данных, их обязательно необходимо привести к строке методом JSON.stringify(). Не забываем указать заголовок Content-Type, который уточняет для бэкенда тип передаваемых данных.

// В ответ, если все хорошо, получим JSON с добавленным id. Идентификатор будет уникальным для каждого объекта.

// {
//   "id": 101,
//   "author": "Mango",
//   "content": "CRUD is awesome"
// }


// Обновление

// Методы PUT и PATCH используются для обновления существующих данных. Какой метод использовать будет написано в документации бэкенда. Метод fetch() должен отправить на сервер запрос, в теле которого необходимо указать объект с полями для изменения. Путь указывает в какой коллекции и какой элемент мы хотим обновить. Бекенд, по получению запроса, обработает его и в ответе вернет обновленный ресурс.

// // Change value of id property to update different post
// const postToUpdate = {
//   id: 1,
//   body: "CRUD is really awesome",
// };

// const options = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log("ERROR" + error));
  
// В ответ, если все хорошо, получим обновленный объект:

// {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'CRUD is really awesome'}

// При использовании метода PUT результат будет следующим:

// {id: 1, body: 'CRUD is really awesome'}

// PATCH - обновляет одно из свойств, содержимое которого передается в body запроса.
// PUT - полностью перезаписывает все данные.

// ИНТЕРЕСНО
// Метод PATCH заменяет в существующем ресурсе значения переданные в теле запроса свойств. Метод PUT полностью заменяет ресурс.


// Удаление

// Метод DELETE используется для удаления существующих данных. Метод fetch() должен отправить на сервер DELETE-запрос без тела. Путь указывает в какой коллекции и какой элемент мы хотим удалить. Бекенд, по получению запроса, обработает его, удалит ресурс из коллекции и в ответе вернет статус результата.

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE",
// })
//   .then(() => console.log("Post deleted"))
//   .catch(error => console.log("Error:", error));














//       Модуль 11 - Занятие 22 - Синтаксис async/await


// Асинхронные функции


// Работа с бэкендом может быть запутанной, после одной асинхронной операции необходимо сделать еще один запрос на сервер по полученным данным, и так несколько раз. Например, на странице профиля пользователь хочет посмотреть список друзей. Первое, что необходимо сделать, это подтвердить его права доступа к этой странице у бэкенда. Для этого нужно сделать запрос к my-api.com/me. Если бэкенд разрешит доступ, в ответе мы получим уникальный токен доступа к защищенным ресурсам.

// const fetchFriends = () => {
//   return fetch("my-api.com/me").then(token => {
//     console.log(token);
//   });
// };

// Далее необходимо запросить профиль пользователя от my-api.com/profile, но профиль не полный, он содержит только критически важную информацию - идентификатор пользователя, без списка друзей.

// const fetchFriends = () => {
//   return fetch("my-api.com/me")
//     .then(token => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then(user => {
//       console.log(user.id);
//     });
// };

// И только после этого можно запросить список друзей от my-api.com/users/:userId/friends.

// const fetchFriends = () => {
//   return fetch("my-api.com/me")
//     .then(token => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then(user => {
//       return fetch(`my-api.com/users/${user.id}/friends`);
//     });
// };

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));

// Согласитесь, не самый легкочитаемый код, хотя операции относительно простые. Из-за того, что мы передаем функции-обработчики методу then(), получаются ёлки вложенности.

// Асинхронные функции помогают избавиться от коллбэков и вложенных конструкций. При этом они отлично работают в связке с методами then() и catch(), потому что гарантированно возвращают промис.

// const fetchFriends = async () => {
//   const token = await fetch("my-api.com/me");
//   const user = await fetch(`my-api.com/profile?token=${token}`);
//   const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//   return friends;
// };

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));


// Синтаксис async/await

// Асинхронные функции (async/await) - удобный способ написания асинхронного кода, который внешне становится похож на синхронный. В основе синтаксиса async/await лежат промисы, поэтому он не блокирует главный поток выполнения программы.

// Для объявления асинхронной стрелочной функции, перед списком параметров добавляем ключевое слово async. Внутри неё можно использовать оператор await и справа от него поставить что-то, что вернёт промис. Метод response.json() также возвращает промис, поэтому ставим await.

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// fetchUsers().then(users => console.log(users)); 

// Результат вызова ф-и fetchUsers:

// 0: {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
// 1: {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}
// 2: {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …}
// 3: {id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', address: {…}, …}
// 4: {id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', address: {…}, …}
// 5: {id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', address: {…}, …}
// 6: {id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', address: {…}, …}
// 7: {id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', address: {…}, …}
// 8: {id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', address: {…}, …}
// 9: {id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address: {…}, …}
// length: 10
// [[Prototype]]: Array(0)

// Когда интерпретатор встречает await, он приостановливает выполнение этой функции (не всего скрипта) и ждет, пока не выполнится промис справа от await. Как только промис выполнился - исполнение функции возобновляется и на строке ниже нам доступен результат асинхронной операции.

// Оператор await можно использовать только в теле асинхронной (async) функции.
// Оператор await приостанавливает функцию пока промис не выполнится (fulfilled или rejected).
// Если промис выполнился успешно (fulfilled), оператор await вернет его значение.
// Если промис был отклонен с ошибкой (rejected), оператор await выбросит ошибку.
// Асинхронная функция всегда возвращает промис, поэтому любое возвращаемое значение будет его значением.
// Если не указать возвращаемое значение, вернется промис со значением undefined.
// Любая функция может быть асинхронной, будь-то метод обьекта, класса, коллбэк, объявление или инлайн функция. Все они смогут использовать оператор await и обязательно вернут промис, потому что будут асинхронными функциями.

// // Function declaration
// async function foo() {
//   // ...
// }

// // Functional expression
// const foo = function async() {
//   // ...
// };

// // Arrow function
// const foo = async () => {
//   // ...
// };

// // Object method
// const user = {
//   async foo() {
//     // ...
//   },
// };

// // Class method
// class User {
//   async foo() {
//     // ...
//   }
// }


// Обработка ошибок

// Если результат асинхронной функции (промис) не используется во внешнем коде, ошибки обрабатываются в теле функции конструкцией try...catch. Значение параметра error в блоке catch это ошибка которую сгенерирует await если промис будет отклонен.

// const fetchUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchUsers();

// Результат вызова функции:
// 0: {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
// 1: {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}
// 2: {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …}
// 3: {id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', address: {…}, …}
// 4: {id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', address: {…}, …}
// 5: {id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', address: {…}, …}
// 6: {id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', address: {…}, …}
// 7: {id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', address: {…}, …}
// 8: {id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', address: {…}, …}
// 9: {id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address: {…}, …}
// length: 10
// [[Prototype]]: Array(0)

// Если результат асинхронной функции (промис) используется во внешнем (глобальном) коде, то есть вне других асинхронных функций, ошибки обрабатываются коллбэком методом catch(). Значение параметра error в методе catch() это ошибка которую сгенерирует await если промис будет отклонен.

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// fetchUsers()
//   .then(users => console.log(users))
//   .catch(error => console.log(error));

// Результат вызова ф-и:
//   0: {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
// 1: {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}
// 2: {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …}
// 3: {id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', address: {…}, …}
// 4: {id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', address: {…}, …}
// 5: {id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', address: {…}, …}
// 6: {id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', address: {…}, …}
// 7: {id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', address: {…}, …}
// 8: {id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', address: {…}, …}
// 9: {id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address: {…}, …}
// length: 10
// [[Prototype]]: Array(0)

// Так, как в коде ниже, работать не будет - await можно использовать только в теле асинхронной функции.

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// // ❌ SyntaxError: await is only valid in async function
// const users = await fetchUsers();

// Если результат асинхронной функции используется в другой асинхронной функции, ошибки обрабатываются конструкцией try...catch. Значение параметра error в блоке catch это ошибка которую сгенерирует await если промис будет отклонен.

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// doStuff();

// Результат вызова ф-и:
// 0: {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
// 1: {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}
// 2: {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …}
// 3: {id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', address: {…}, …}
// 4: {id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', address: {…}, …}
// 5: {id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', address: {…}, …}
// 6: {id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', address: {…}, …}
// 7: {id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', address: {…}, …}
// 8: {id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', address: {…}, …}
// 9: {id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address: {…}, …}
// length: 10
// [[Prototype]]: Array(0)


// Параллельные запросы

// Если одновременно необходимо сделать несколько запросов, использовать синтаксис async/await нужно очень аккуратно. В следующем примере будут выполнены три последовательных запроса, потому что выполнение асинхронной функции приостанавливается когда интерпретатор встречает await. Кроме того, парс результатов запросов также будет последовательный, что займет больше времени.

// const fetchUsers = async () => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const firstResponse = await fetch(`${baseUrl}/users/1`);
//   const secondResponse = await fetch(`${baseUrl}/users/2`);
//   const thirdResponse = await fetch(`${baseUrl}/users/3`);

//   const firstUser = await firstResponse.json();
//   const secondUser = await secondResponse.json();
//   const thirdUser = await thirdResponse.json();

//   console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers(); // {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}email: "Sincere@april.biz"id: 1name: "Leanne Graham"phone: "1-770-736-8031 x56442"username: "Bret"website: "hildegard.org"[[Prototype]]: Object {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …} {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …}

// На вкладке Network хорошо видно, что запуск каждого последующего запроса ожидает пока завершится предыдущий. То есть выолняются они последовательно, что занимает больше времени, которое равно сумме длительностей всех запросов. Это нормально, если запросы зависят друг от друга, то есть следующий использует результат предыдущего.

// В нашем случае они полностью независимы, поэтому нужно запустить их параллельно. Для этого создаётся массив промисов, после чего используется метод Promise.all(), для ожидания их выполнения. Массив промисов создается методами map(), filter() и так далее, зависит от задачи.

// const fetchUsers = async () => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const userIds = [1, 2, 3];

//   // 1. Создаём массив промисов
//   const arrayOfPromises = userIds.map(async userId => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   // 2. Запускаем все промисы параллельно и ждем их завершения
//   const users = await Promise.all(arrayOfPromises);
//   console.log(users);
// };

// fetchUsers(); // 0: {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
// 1: {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}
// 2: {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …}
// length: 3
// [[Prototype]]: Array(0)

// При таком подходе запросы запускаются параллельно, что экономит время ожидания их выполнения, которое равно длительности самого «медленного» из них. Такой приём подходит только если запросы не зависят друг от друга.

// Parallel requests
// Убедитесь в этом, открыв инструменты разработчика в живом примере. Также мы добавили кнопку при клике на которую выполняется запрос, и обработали возможную ошибку конструкцией try...catch. Это стандартный AJAX-код с использованием асинхронных функций.

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
  
//   .user-list .item:not(:last-child) {
//     margin-bottom: 16px;
//   }

// // Добавить во вкладку JS
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", async () => {
//   try {
//     const users = await fetchUsers();
//     renderUserListItems(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// async function fetchUsers() {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const userIds = [1, 2, 3, 4, 5];

//   const arrayOfPromises = userIds.map(async (userId) => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   const users = await Promise.all(arrayOfPromises);
//   return users;
// }

// function renderUserListItems(users) {
//   const markup = users
//     .map(
//       (user) => `<ul class="item">
//         <p><b>Name</b>: ${user.name}</p>
//         <p><b>Email</b>: ${user.email}</p>
//         <p><b>Company</b>: ${user.company.name}</p>
//       </ul>`
//     )
//     .join("");
//   userList.innerHTML = markup;
// }