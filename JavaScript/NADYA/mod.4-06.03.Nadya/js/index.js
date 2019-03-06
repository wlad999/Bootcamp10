'use strict'
/*// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств
// и false – если хоть одно свойство есть.
// Работать должно так:
function isEmpty(obj) {
    if(Object.keys(obj).length === 0){
      return true;
   } return false;
   
}
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "подъём";
alert( isEmpty(schedule) ); // false
*/
// ================================================================================
// Сумма свойств
// важность: 5
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
// 
// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// function getSumm(obj){
//    let summ=0;
//    for(let key in obj) {
//       summ += obj[key];
//    }
//    return summ;
// }
// console.log(getSumm(salaries))
//... ваш код выведет 650
// P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.

// ================================================

/*Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

Если объект пустой, то пусть он выводит «нет сотрудников».*/


// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// function bigSalary(salaries) {
//    let max =0;
//    let name ='';
//    for(let key in salaries){
//       if( max < salaries[key]) {
//          max = salaries[key]
//          name = key
//    }
   
//    }
//   return name 
// }
// console.log(bigSalary(salaries));

// ... ваш код выведет "Петя"
// ==================================================
/*Умножьте численные свойства на 2
важность: 3
Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова*/
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj, callback){
//    for(let key in obj){
//       if(Number(obj[key])){
//          obj[key]*2;
//    }
// }
// }
// /*console.log (multiplyNumeric(menu));
// после вызова
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// P.S. Для проверки на число используйте функцию:*/

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }


// function multiplyNumeric(menu, ppp){
//    for(let key in menu){
//       if(ppp(menu[key])){
//          menu[key]=menu[key]*2;

//    }
// }
// return menu
// }
// console.log (multiplyNumeric(menu, isNumeric));
