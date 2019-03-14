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
// ---------------------------------------------------------

// function multiplyNumeric(menu, ppp){
//    for(let key in menu){
//       if(ppp(menu[key])){
//          menu[key]=menu[key]*2;

//    }
// }
// return menu
// }
// console.log (multiplyNumeric(menu, isNumeric));


// =============================================================

/*Задание 10 Найти последовательность Хэеса, то есть пользователь вводит число и в результате должно быть выдано сообщение, с самой последовательностью, количеством шагов,
которое понадобилось для нахождения этой последовательности, и вершиной последовательности, это максимальное число из этой последовательности. Последовательность
Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, делим на 2, если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не
будет равно 1.*/

function num(a) {
   let i=0;
   let max =0;
   do { 
      if (a % 2 === 0) {
         a = a / 2;
      } else {
         a = a * 3 + 1;
         if(max<a){max = a};
      }
      i=i+1;
      console.log(a);
   } while (a !== 1);
   return `max number:${max} quantity of cycles:${i}`;
}
console.log(num(prompt('Введите число')));

/*
/*9*3+1=28
28/2=14
14/2=7
7*3+1=22
22/2=11
11*3+1=34
34/2=17
17*3+1=52
52/2=26
26/2=13
13*3+1=40
40/2=20
20/2=10
10/2=5
5*3+1=16
16/2=8
8/2=4
4/2=2
2/2=1
*/
// -----------------------RODIK-------------------------------------------
// let num =Number(prompt("enter odd number"));
// let res = 0;
// let arr = [];
// const countNum = function(num){
// while(num !== 1 || num === 0){
//     if(num % 2 === 0){
//       num = num / 2;
//     }else if( num === 0){
//         break;
//     }
//     else {
//       num =  num *3 + 1;
//     }
//     arr.push(num)
// }
// for(let i of arr){
//     arr[i]>res?res=arr[i]:null;
// }
//  return(`How many iteration - ${arr.length}, Max num - ${res} ,  Result - ${num}`);
// }

// console.log(countNum(num))
// 