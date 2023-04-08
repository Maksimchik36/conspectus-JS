// // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection


// // 95. Record Collection
// // You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

// // The updateRecords function takes 4 arguments represented by the following function parameters:

// // records - an object containing several individual albums
// // id - a number representing a specific album in the records object
// // prop - a string representing the name of the album’s property to update
// // value - a string containing the information used to update the album’s property
// // Complete the function using the rules below to modify the object passed to the function.

// // Your function must always return the entire records object.
// // If value is an empty string, delete the given prop property from the album.
// // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// // If prop is tracks and value isn't an empty string, add the value to the end of the album's tracks array. You need to create this array first if the album does not have a tracks property.
// // Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.


// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };


// function updateRecords(records, id, prop, value) {
//     const newRecords= {...records}
//     const idArr = Object.keys(newRecords);
//     console.log("idArr", idArr);
//     const neededRecord = idArr.find(item => Number(item) === id);
//     console.log("neededRecord", neededRecord);


//     // Если value равно пустой строке, удалите данное свойство prop из альбома.
//     if (value === "") {
//         console.log("newRecords.neededRecord", newRecords[neededRecord]);
//         delete newRecords[neededRecord][prop];
//     }

//     // Если prop не является tracks, а value не является пустой строкой, присвойте value prop этого альбома.
//     if (prop !== "tracks" && value !== "") {
//     console.log("newRecords.neededRecord", newRecords[neededRecord]);
//     newRecords[neededRecord][prop] = value;
//     }
    
//     // Если prop — это tracks, а значение не является пустой строкой, добавьте value в конец массива tracks альбома. Сначала необходимо создать этот массив, если альбом не имеет свойства tracks.
//   if (prop === "tracks" && value !== "") {
//     const hasProperty = newRecords[neededRecord].hasOwnProperty('tracks');
//     console.log("hasProperty", hasProperty);
//     if (!hasProperty) {
//       newRecords[neededRecord][prop] = [];
//       console.log("создаем пустой массив");
//     }
//     newRecords[neededRecord][prop].push(value);
//     console.log("добавляем элемент в существующий массив");
//     }

//     console.log(" finish newRecords", newRecords);
//   return newRecords;
// }


// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// updateRecords(recordCollection, 2548, "artist", "")
// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
// updateRecords(recordCollection, 2468, "tracks", "Free")
// updateRecords(recordCollection, 2548, "tracks", "")
// updateRecords(recordCollection, 1245, "albumTitle", "Riptide")







// 103. Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

//   function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

//   function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }
// The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

// function sum(arr, n) {
//     if (n <= 0) {
//         console.log("return 0");
//         return 0;
//     }
//     else {
//         console.log("sum(arr, n-1)+arr[n-1]", sum(arr, n - 1) + arr[n - 1]);
//         return sum(arr, n - 1) + arr[n - 1]
//     }
// }



// // sum([1], 0) // should equal 0.
// // sum([2, 3, 4], 1) //should equal 2.
// sum([2, 3, 4, 5], 3) // should equal 9

// Алгоритм выполнения рекурсии для sum(arr, n) на примере sum([2, 3, 4, 5], 3):
// при n = 3
// sum(arr, n - 1) + arr[n - 1]
// sum([2, 3, 4, 5], 2) + arr[2] - становится в стэк
// при n = 2
// sum([2, 3, 4, 5], 1) + arr[1] - становится в стэк
// при n = 1
// sum([2, 3, 4, 5], 0) + arr[0] - становится в стэк
// при n = 0
// sum([2, 3, 4, 5], 0) - возвращает 0 (строка 122) и возвращается в стэк за ф-ей со стр 143:
// sum([2, 3, 4, 5], 0) + arr[0] = 0 + 2 - возвращает 2 и возвращается в стэк за ф-ей со стр 141:
// sum([2, 3, 4, 5], 1) + arr[1] = 2 + 3 - возвращает 5 и возвращается в стэк за ф-ей со стр 139:
// sum([2, 3, 4, 5], 2) + arr[2] = 5 + 4 - возвращает 9 - алгоритм завершен








