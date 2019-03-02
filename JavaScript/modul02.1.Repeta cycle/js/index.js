'use strict';

//-----------------ЦИКЛЫ-----------------------
// предусловие

// let counter = 0;
// while (counter < 10) {
//   console.log('counter:', counter);
//   counter = counter +1;
// } 
// -----------------
// const max =10;
// const min =1;

// let userInput;
// while (userInput !==null){
//   console.log(userInput);
  
//   userInput = prompt(`Дай число от ${min} до ${max}`);
// console.log(userInput);

// }


// // --------------------
// const numbers = [12, 75, 90, 7, 23, 14];
// let counter =0;
// // console.log(numbers[0])

// while (counter < numbers.length) {
//   console.log(numbers[counter]);
//   counter = counter +1; /*каждый второй +2  и т.д.*/
// }


// const max =10;
// const min =1;

// let userInput;
// while (userInput !==null){
//   console.log(userInput);
  
//   userInput = prompt(`Дай число от ${min} до ${max}`);
// console.log(userInput);

// }

// В классе

/* Есть массив имен пользователей */
// TASK 02
// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива любое имя
// users.unshift('Black');
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]


// // Добавить в конец массива два любых имени за одну операцию
// users.push('green', 'white');
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]

// -----------TASK03------------------------------------

/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string;
// let arr;
// string = prompt('pleas, enter string');

// arr = string.split(' ');



// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// for(let i = 0; i < arr.length; i=i+1) {
//   console.log(i);
// }
  
// // Используя цикл, вывести в консоль все элементы массива arr
// // for ( let num of arr){
// //   console.log (num);
// // }
  
  

// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// // console.log();


// ----------------------------------TASK05------------------------------

/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

const min = 1;
const max = 100;

for (let i = min; i < max; i = i + 1) {
  if (i % 3 === 0) {
    console.log('Fizz')
  }
  else if (i % 5 === 0 && i % 3 !== 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}