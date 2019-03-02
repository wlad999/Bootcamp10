'use strict';

// let userA ='Mango';
// let userB ='Ajax';
// let userC ='Poly';

// const users = ['Mango', 'Ajax', 'Poly'];
// console.log(users.length);
// console.log(users);
// console.log(users[5]); 
// ==========================================================
// // -----------переопределение элементов массива-----------------------
// users[5] ='Chelsey';
// console.log('users arr', users);
// console.log('users.length', users.length);
// console.log(users[5]);
// users.length[10];
// users.length = 1;
// console.log( users);
// if (users.length === 0 ) {
//     console.log('empty');
// } else {
//     console.log('not empty');
// }

// ------МЕТОДЫ МАССИВА-------------
// const users = ['Mango', 'Ajax', 'Poly'];
// const string = 'I-love-javascript';
// console.log(string.split('-'));
// const asArr = string.split('-');
// console.log(string);
// console.log(asArr);


//-------метод (split)-------Перевод строки в массив и сохраняем массив в константу------
// const userInput = prompt('Введите товары через запятую');
// console.log(userInput);
// const goods = userInput.split(',');
// console.log(goods);
// -------------------------------------------------
// -------------метод (Join)----превращние массива в строку--------
// console.log(users);
// const asString = users.join('-');
// console.log(asString);
// --------------------------------
//-------метод (indexOf)------
// const users = ['Mango', 'Ajax', 'Poly'];
// const userInput = prompt('давай имя');
// const idx = users.indexOf ('Ajax');
// console.log(idx);
// ------------------------------
//-------метод (includes)--- проверить есть элемент или нет---
// const users = ['Mango', 'Ajax', 'Poly'];
// const userInput = prompt('давай имя');
// const idx = users.indexOf ('Ajax');
// console.log(idx);
// ----------------------------------------
//  PUSH POP добавляем, элемениы массива
// const users = ['Mango', 'Ajax', 'Poly'];
// users.push ('Chelsey');
// users.push ('Huga');
// // РЕПЕТА Говорит - пуш возвращает индекс-но я вижу что номер по строке-спросить
// console.log(users.push('fffffff'));
// console.log(users.indexOf('fffffff'));
// console.log(users);


// -----POP----удаляем элемениы массива, мутирует массив--------------------------
// users.pop();
// console.log(users);
// users.pop();
// console.log(users);
// users.pop();
// console.log(users);
// users.pop();
// console.log(users);

// console.log(users.pop());
// -------------------------

// const guests =['Mango', 'Poly'];
// console.log(guests);
// const guestName = prompt('давай имя')
// guests.push(guestName);
// console.log(guests);
 
//------unshift, shift  добавляют или удаляют элементы с начала массива--------

// -----SLICE--------копирование элементов массива-не мутирует исходній массив
// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// const someUsers = users.slice(1, 3);
// console.log(someUsers);
// console.log('users:', users);
// --!!!! -----`[] !== []`-----

//  ------SPLISE-----изменяет массив
// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(users);
// console.log(users.splice(1,1));
// console.log(users);


// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(users);
// console.log(users.splice(1));
// console.log(users);


// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(users);
// console.log(users.splice(2,0, 'Alex', 'Singu'));
// console.log(users);

// const x = [1, 2];
// users.splice(2, 0, x);
// console.log(users);
// -------------------------------
// --Найти элемент массива и вырезать его-----SPLISE-----
// const numbers =[3, 7, 8, 12];
// console.log(numbers);
// const idx = numbers.indexOf(8);
// console.log(idx);
// console.log(numbers.splice(idx, 1));
// console.log(numbers);

// -------Замена элементов массива------SPLISE-----
// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(users);
// users.splice(1, 1, 'Alex');
// console.log(users);

// ------Удаление пользованеля по имени------SPLISE-----
// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// const userName = prompt('Имя для удаления!');
// console.log(userName);
// if(userName !== null) {
//     const hasName = users.includes(userName);
//     if(hasName){
//     const idx = users.indexOf(userName);
//     users.splice(idx, 1); 
//     console.log(`Элемент ${userName} удалён`, users);
//     } else 
//     console.log('Такого пользователя нет, ошибка');
// }
//--------------------------------------------------------------

// ---CANCAT------сшить массивы. Исходный массив не меняется.

// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const c = a.concat (b);
// console.log(a);
// console.log(b);

// console.log(c);

// console.log((a+b).split(','));  херня
// ----------------------------------------

// -----------REVERS разворачивает строку на 180 грд.
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.reverse());
// console.log(numbers);



// ---ПРоверка Миссив-не массив
// const x = [1, 2, 3];
// Arrey
// console.log(typeof x);
// console.log(Arrey.isArrat (x));
// --------------------------------
// -----------Деструктуризация массива- создаём переменные из массива----------------

// const clients = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// const first = clients [0];
// const second = clients [1];
// const third = clients [2];
// const fourth = clients [3] || 'user name;

// const [first, second, third, fourth ] = ['Mango', 'Poly', 'Ajax']
//  или 
// const [first, second, third, fourth ] = clients;


// console.log(first);
// console.log(second);
// console.log(fourth);

// const [
//     first = 'clients',
//     second = 'clients', 
//     third = 'clients', 
//     fourth = 'clients' 
// ] = clients;
// если любое из значений ubdefinde - подставит строку client-значение по умолчанию
// console.log(first);
// console.log(second);
// console.log(fourth);

// console.log (fourth);


// let a=1;
// let b=3;
// [a, b] = [3,1];
// console.log(a);//3
// console.log(b); //1

// -----------Оператор REST создаём массив из остатка. Должен стоять последним----------------
// const clients = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// const first = clients[0];
// const rest = clients.slice(1);
// console.log(first);
// console.log(rest);
// или проще---------------------------
// const clients = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// const [first, second, ...rest] = clients;
// console.log(first);
// console.log(second);
// console.log(rest);


    
// ----------------------------
// ------------------TASK01---------------------------
/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax
// ===================================================
//-------------------------TASK02-------------------
/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// console.log(users.shift() ); // ["Poly", "Ajax", "Chelsey"]
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива любое имя
// users.unshift('Plus');
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// // Добавить в конец массива два любых имени за одну операцию
// users.push('one', 'two');
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
//===========================================================













//-------------------TASK03-------------------------
/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

let string;
let arr;

// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
console.log();

// Вывести в консоли общую длину массива arr
console.log();

// Используя цикл, вывести в консоль все индексы массива arr
console.log();

// Используя цикл, вывести в консоль все элементы массива arr
console.log();

// Используя цикл, bывести в консоли все пары индекс:значение массива arr
console.log();



