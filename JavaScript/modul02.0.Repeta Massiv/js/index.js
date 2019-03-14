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

// let string;
// let arr;

// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log();

// // Вывести в консоли общую длину массива arr
// console.log();

// // Используя цикл, вывести в консоль все индексы массива arr
// console.log();

// // Используя цикл, вывести в консоль все элементы массива arr
// console.log();

// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// console.log();



/*Я делаю допы !!!!!!!!!!!!!*/
// ------------------------TASK 01---------------
/* Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// users.shift()

// // Удалить первый элемент массива
// // console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // // Удалить последний элемент массива
// users.pop()
// // console.log(users); // ["Poly", "Ajax"]

// // // Добавить в начало массива пользователя "Lux"
// users.unshift("Lux");
// // console.log(users); // ["Lux", "Poly", "Ajax"]

// // // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push("Jay", "Kiwi");
// // console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // // Удалить из массива элемент хранящийся в переменной userToDelete
// // const userToDelete = "Ajax";
// users.splice(2,1);

// // console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// // const userToInsertBefore = "Jay";
// users.splice(2,0,"Kong")
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]
// ==============================================================================

// ------------------TASK 02--------------------
/*
 * Есть массив имен пользователей users
 *
 * Напиши цикл, который для каждого пользователя будет выводить в консоль
 * сообщение в формате [номер элемента] - [значение элемента]. 
 * 
 * Нумерация должна начинаться с 1. К примеру для первого элемента массива
 * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
 *
 * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
 */
// let i;
// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// for(let i = 1; i <= users.length; i=i+1){
//   console.log(`${i} - ${users[i-1]}`);
// }
// ====================================================================
// ------------------TASK 03-----------------------------------
/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;

// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// let words;
// words = message.split(' ');
// console.log(words);

// // // Выведи в консоли длину массива words
// console.log(words.length); // 8

// // // Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// let cost =10;
// price = words.length*cost;
// // console.log(price); // 80

// for(let i=1; i<=words.length; i=i+1){
//     price=i*cost;
//   }
// console.log(price);
// ==========================================================
// --------------------------TASK 04---------------------------
/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
  
  PS: используй бесконечный цикл с прерыванием
*/
// let num
// do {
// num = prompt('Enter number more than 100')
// console.log(num)
// console.log(typeof(num))

// if(num === null){
//   break;
// }

// }
// while (num <= 100);
// ===========================================
// ----------------TASK 05---------------------
/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// for(let i of numbers){
//   if(i > num){
//     matched.push(i);
//   }
// }

// console.log(matched); // [17, 14, 14, 32, 18, 26]
// ========================================================
// ------------TASK 06-----------------------
/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const message = "May the force be with you";
// let longestWord;
// let max =0;
// let arr = message.split(' ');
// for(let num of arr){
// if(max < num.length){
//   max = num.length
//   longestWord = num

// }
// console.log(num.length)
// }
// console.log(arr)

// console.log(longestWord); // 'force'
//========================================
// ----------TASK 07---------------
/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/


// /* ПОЧЕМУ НЕ РАБОТАЕТ WHILE !!!!*/


// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// let num;
// do{ 
//   let num = Number( prompt ( `Enter number from ${numbers[0]} till ${numbers[numbers.length-1]}`));

//  if(numbers.includes(num)){
//   alert('Поздравляем, Вы угадали!');
//   console.log(numbers.includes(num));
// } else {
//   alert('Сожалеем, Вы не угадали!');
//   console.log(numbers.includes(num));
// }
// } while ( !numbers.includes(num) )
// ==========================================================
// ------------------TASK 08--------------------
/*
  Напиши скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let num;
// let arr = [];
// let sum=0;
// do {
//   num = Number(prompt('Enter number'))
//   arr.push(num)
//   console.log(num);
//   console.log(arr);
// } while(num !==0)
// for(let i of arr){
//     sum = sum+i;
//   }
//     console.log('sum', sum);
// =============================================
// ----------TASK 09-----------------------
/*
  ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41];

// let num;
// do{ let num = Number( prompt ( `Enter number from ${numbers[0]} till ${numbers[numbers.length-1]}`))
// if( Number.isNaN(num)) {
//   alert('Это не число-введите число')
// } 
// else if(numbers.includes(num)){
//   alert('Поздравляем, Вы угадали!')
// } else if(!numbers.includes(num)){
//   alert('Сожалеем, Вы не угадали!')
// }
// console.log(num)
// } while (num!==0);


