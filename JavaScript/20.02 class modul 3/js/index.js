'use strict'
// -----------------example-------------
// let a = 'Strange';

// if (5 > 3) {
//     let a = 'Hello world';
//     console.log(a);
// }
// let b = a + '! how are you';
// console.log (b);
// -------------------------------------

// const showTestDays = function(name = 'Пользователь', days = 30) {
//     return `Имя - ${name}, использовано ${days} тестовый дня(ей)`;
// }
// console.log (showTestDays('Екатерина', 10));

// console.log (showTestDays('Михаил'));

// console.log (showTestDays());
// -----------------------------------------------------------

// --------РАЗОБРАТЬ__________
const arr = ['Hello', 'my', 'name', 'is', 'Kolya'];

console.log(totext(arr));

function totext (data) {
    const newText = data.join (' ');
    return newText;
   }


// -------------------------------------------------

// const sum = function () {
//     const max = arguments.length;
//     let total = 0;

//     for (let i = 0; i < max; i +=1) {
//         total += arguments[i];
//     }
//     return total;
// };

// console.log(`sum = ${sum(1, 2, 3, 4, 5)}`);

// ----------------------------------