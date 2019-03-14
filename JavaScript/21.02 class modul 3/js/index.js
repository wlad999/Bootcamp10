'use strict'
// let value = 10;

// const fn = function () {
//   let value = 20;
//   console.log(value + 10);
// };

// fn();//30


// ------------------Тарас привёл пример проверки-если не число  - взять сверху число--------------------
// let a = 10;

// const fn = function (value) {
//   const ifValue = Number(value) || a;
//   if(!Number.isNaN(ifValue)) {
//     console.log(ifValue + 10);
//   } else {
//     console.log('value is NaN');
//   }
// };

// fn(); // 30
// ----------------------------

// const printMessage = function (callback) {
//     const message = callback();
//     console.log( message );
//   };

//   const getMessage = function () {
//     return "Welcome to the jungle!";
//   }

//   printMessage(getMessage); // "Welcome to the jungle!"

// -------------------------TASK 01----------------


// /*
//   Напишите функцию checkNumberType(num)

//   Функция получает число num как аргумент и возвращает 
//   строку "Even" если число четное и строку "Odd" если не четное.
// */

// // Вызовы функции для проверки



// const checkNumberType= function(num) {
//     const even = num % 2 === 0;
//     // const odd = num % 2 !== 0; нет смісла -можно сделать без него.
// // return even ?  'even' : 'odd'; 
// // ниже расшифровуем понятным языком.
// if ( even === true) {
//     return 'even';
// }
// else {
//     return 'odd';
// }
// }


// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'

// ----------------------------------------------------------------------------------


// -------------------------------Task 02--------------------------------------
/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// let formatString = function(str) {
//     if (str.length  < 40) {
//         return str;
//     } else {
//         return (str.slice (0,40) + '...');
//     }
// }



// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка

//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка



//   -----------------------------------------------------------


//   -----------------------------TASK 03------------------------------


/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/


// let checkForSpam = function(str) {
//     if ( str.includes('spam') || str.includes('sale') ){
//     return true }
//     else {
//         return false
//     }

// }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

// -------------------------------------------------------------------



// ------------TASK in Konspect------------------------

// const map = (arr, callback) => { // обьявляем функцию с аргументами arr(массивом), callback(функцией)
//     const resultArr = []; // обьявляем пустой массив, в который будет записывать новые эл-ты

//     // перебираем, входящий при вызове функции массив, записанный в аргумент arr. 
//     // в теле цикла елементы пропускаем через функцию callback, обьявленную в аргументах
//     // и записываем результат callback-функции в переменную result.
//     // поседним этапом цикла - записываем result в новый массив, выходим из массива.
//     // последним этапом функции map будет возврат(return) переменной resultArr.
//     for(const element of arr) {
//       const result = callback(element);
//       resultArr.push(result);
//     }
//     return resultArr;
//   };

//   const double = val => val * 2;
//   const triple = val => val * 3;
//   const numbers = [1, 2, 3, 4, 5];

//   const doubledNumbers = map(numbers, double);
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//   const tripledNumbers = map(numbers, triple);
//   console.log(tripledNumbers); // [3, 6, 9, 12, 15]



// -------------------тот же пример (делал Анждрей) но понятно-віводим умноженній на 2 и на 3 массив через функцию
// const numbers = [1, 2, 3, 4, 5];

// const ourArray = (transfer, numbersClone) => {
//     let newMass = [];
//     for (const numbersCloneElement of numbersClone) {
//         const newElement = transfer(numbersCloneElement);
//         newMass.push(newElement);
//     }
//     return newMass;
// };

// const double = (number) => number * 2;

// // const triple = (number) => number *3;
// const triple = function (number) {
//     return number * 3;
// }
// const doubledNumbers = ourArray(double, numbers);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// const tripledNumbers = ourArray(triple, numbers);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]


// -------------------------------------------



// --------------------------------4 TASK-------------------
/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/
// function getPx(str) {
//     if(typeof str === 'string') {
//       return parseFloat(str)
//     }
//     else {
//       return null
//     }
  
//   }
  
//   // Вызовы функции для проверки
//   console.log( getPx("10px") === 10 ); // должно быть:  true
//   console.log( getPx("10.5") === 10.5 ); // должно быть:  true
//   console.log( getPx("0") === 0 ); // должно быть:  true
//   console.log( getPx(-1) ); // должно быть:  null
//   console.log( getPx(10) ); // должно быть:  null

// -------------------------------------------------------------------------


// ---------------08 TASK----------------------------------------
/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/
//-длинный вариант функции 
// const filterFromArray = function(arr) {
  
// }; 
// ------------------короткий вариант функции
const filterFromArray = (...arr) => {
    const newArr = arr[0];
    console.log(arr);
    // console.log(newArr);
}

// Вызовы функции для проверки
console.log(
  filterFromArray([1, 2, 3, 4, 5], 2, 4)
); // [1, 3, 5]

console.log(
  filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]
  