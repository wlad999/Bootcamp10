'use strict';
// /*пример из  модуля, последний - не понятен*/
// const createCounter = () => {
//   // Локальная «свободная» переменная privateCounter,
//   // которая доступна только в замыкании.
//   let privateCounter = 0;

//   const increment = () => {
//     privateCounter += 1;
//     console.log(privateCounter);
//   };

//   return increment;
// };

// // const counterA = createCounter();
// // counterA(); // 1
// // counterA(); // 2
// // counterA(); // 3

// const counterB = createCounter();
// counterB(); // 1
// counterB(); // 2

// createCounter();
// =======================================
//=============================== task 01 =======================

// Заполните массив 10-ю иксами с помощью цикла.
// let arr=[];
// let num =10;
// let i=0;
// do{
//   arr.push('x')
//   i=i+1
// }while(i<10);
// console.log(arr);
// ---------------------
// let arr=[];
// let num =10;
// let i=0;
// while(i<10){
//   arr.push('x')
//   i=i+1
// }
// console.log(arr);
// ----------------------
// let arr=[];
// let num =10;
// // let i=0;
// for(let i=0; i<num; i=i+1){
//   arr.push('x')
//  }
// console.log(arr);
//=============================== task 02 =======================

// Заполните массив числами от 1 до 10 с помощью цикла.
// let i=1
// let arr=[];
// while(arr.length<10){
//   arr.push(i)
//   i=i+1;
// }
// console.log(arr);
// -----------------
// let i = 1
// let arr = [];
// do {
//   arr.push(i)
//   i = i + 1
// } while (arr.length < 10)
// console.log(arr)
// -------------------
// let num = 1;
// let arr = [];
// for(let i=0; i<10; i=i+1){
//   arr.push(num)
//   num =num+1;
// }
// console.log(arr);
// ---------------------------
// let num = 1;
// let arr = [];
// for(let i=0; i<10; i=i+1){
//   arr[i]=num;
//   num =num+1;
// }
// console.log(arr);
//=============================== task 03 =======================

// Дана строка, например, '123456'. Сделайте из нее '214365'.
// let str = '123456';
// -------------------
// let ans = str[1]+str[0]+str[3]+str[2]+str[5]+str[4]
// console.log(ans);
// ---------------
// let ans ='';
// let i=0;
// do{
// let res = str[i+1]+str[i];
// i=i+2;
// ans=ans+res
// }while(i<str.length);
// console.log(ans);
// ---------------------
// let arr = str.split('')
// let i=0;
// let ans=[];
// do{
//   ans.push(arr[i+1])
//   ans.push(arr[i])
//   i=i+2;
//    }while(i<str.length);

// console.log(ans);
// let strAnsw = ans.join('');
// console.log(strAnsw);

//=============================== task 04 =======================

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// let isNumberInRange  = function(x){
//   if(x>0&&x<10){
// return true
//   } return false
// }
// console.log(isNumberInRange(20));
// -----------------------------------
// function isNumberInRange(num) {
//   if (num > 0 && num < 10) {
//     return true
//   }
//   return false
// }
// console.log(isNumberInRange(5));
// ------------------------------------
// let isNumberInRange = (num)=>(num > 0 && num < 10)?true:false;
// console.log(isNumberInRange(20));

//=============================== task 05 =======================

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
// let isEven = function(num){
//   if(num%2===0){
//     return true
//   } return false
// }
// console.log(isEven(3))
// ------------------------------

// function isEven(num){if(num%2===0){
//       return true
//     } return false
//   }
//   console.log(isEven(6))
// // ------------------
// let isEven = (num)=>num%2===0?true:false;
//   console.log(isEven(5));


//=============================== task 06 =======================

// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи
// const arr=[2,4,6,7,9,2,55,7,6,88,96,15]
// const newArr=[];
// -------------------------
// let isEven = function(arr){
//   for(let num of arr){
//     if(num%2===0){
//       newArr.push(num)
//     } 
//   }
//   return newArr
// }
//----------------------
// function isEven (arr){
//     for(let num of arr){
//       if(num%2===0){
//         newArr.push(num)
//       } 
//     }
//     return newArr
//   } 
// ----------------------------------
// let isEven = (arr)=>{
//   for(let num of arr){
//           if(num%2===0){
//             newArr.push(num)
//           } 
//         }
//         return newArr
// }

// console.log(isEven(arr));
//=============================== task 07 =======================

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой
///* -------------------1ST VAR--------------- */
//  let res=[];
// let str='abcde cbcde gbcde';
// const tranf = function(str){
//   let newArr =str.split(' ');


//   for(let val of newArr){
//   res.push(val[0].toUpperCase()+val.slice(1))

//   }
// };
// tranf(str);
// console.log(res);
// console.log(res.join(' '));
// let str1 = res.join(' ');
// console.log(str1)
// --------------2nd VAR---------------------------------
// let res = [];
// let str = 'abcde cktdu gbcde';
// const tranf = function (str) {
//   let newArr = str.split(' ');
//   for (let val of newArr) {
//     let str1 = '';
//     for (let i = 1; i < val.length; i = i + 1) {
//       str1 = str1 + val[i];
//     }
//     res.push(val[0].toUpperCase() + str1)
//   }
// };
// tranf(str);
// console.log(res);
// let str2 = res.join(' ');
// console.log(str2);
// ---------------------------------

//=============================== task 08 =======================

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false

// var str = 'яблоко';
// var arr = ['банан', 'яблоко', 'персик'];

// let inArray = function(str, arr){
//   if(arr.includes(str)){
//       alert('Exectly!!!')
//     } else {
//     alert('Nooooo!')
// }
// }
// console.log(inArray(str, arr));
// ------------------
// function inArray(str, arr){
//     if(arr.includes(str)){
//         alert('Exectly!!!')
//       } else {
//       alert('Nooooo!')
//   }
//   }
//   console.log(inArray(str, arr));
// -------------------------------------
// let inArray = (str, arr)=>{
//     if(arr.includes(str)){
//       alert('Exectly!!!')
//     } else {
//     alert('Nooooo!')
// }
// }
// console.log(inArray(str, arr));

//=============================== task 09 =======================

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число)
// let arr=[];
// function getDivisors(num){
//   let x=1;
//  do{
//    if(num%x===0){
// arr.push(x);
// }
// x=x+1;
//  }while(x<=num)
//  return arr;
// };
// console.log(getDivisors(+prompt('Enter number')));
// --------------------var 2-----НЕ РАБОТАЕТ РАЗОБРАТЬ--------
// let arr=[];
// let getDivisors = function(num){
//   let x=1;
//   while(x<=num){
//     if(num%x===0){
//      arr.push(x);
//     }
//     x=x+1;
//   }
//   return arr;
// };
// console.log(getDivisors(prompt('Enter number')));
// -------------------------------------------------
// let arr=[];
// let getDivisors=(num)=>{

//   for(let i=1; i<=num; i=i+1){
//     if(num%i===0){
// arr.push(i)
//     }
//   }
//   return arr;
// }
// console.log(getDivisors(prompt('Enter number')));

//=============================== task 10 =======================


/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/
// function checkNumberType(num){
//   if(num%2===0){
//     alert('Even')
//   } else{
//     alert("Odd")
//   }
// }
// // // Вызовы функции для проверки
// console.log( checkNumberType(+prompt('enter number')) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'


// //=============================== task 11 =======================

// /*
//   Напиши функцию formatString(str)

//   - Функия принимает на вход строку str
//   - Если длина строки не превышает 40 символов, функция возвращает ее. 
//   - Если длина больше 40 символов, то функция обрезает строку до 40-ка
//     символов и добавляет в конец строки троеточие '...', после чего 
//     возвращает укороченную версию.
// // */
// let formatString= (str)=>{
//   if(str.length<=40){
//      str
//   } else{
//     str = (str.slice(0,40))+ '...';
//   } 
//   return str;
// };

// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка


// //=============================== task 12 =======================


// /*
//   Напиши функцию checkForSpam(str)

//   Функция принимает 1 параметр str - строку,
//   и проверять ее на содержание слов: spam и sale

//   Если нашли зарещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false

//   PS: слова могут быть в произвольном регистре
// */
// function checkForSpam(str){
//   if(str.toLowerCase().includes('spam'||'sale')){
//     alert("true")
//   } else {
//     alert("false")
// }
// };
// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false
// 
// console.log( checkForSpam('Get best sale offers now!') ); // true
// 
// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true



// //=============================== task 13 =======================

// /*  
//   Написать функцию, getPx(str) 
//   Функция getPx должна получать строку вида '10px',
//   проверять была ли передана строка, если да, 
//   возвращать только числовую составляющую, к примеру 10.

//   Если была передана не строка, функция возвращает null.
// */
// const getPx = (str)=>{
// if(typeof(str)==="string"){
//   alert(`${parseFloat(str)}`);
// } else {alert('null')

// }
// }
// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // true
// console.log( getPx("10.5") === 10.5 ); // true
// console.log( getPx("0") === 0 ); // true
// console.log( getPx(-1) ); // null
// console.log( getPx(10) ); // null


// //=============================== task 14 =======================

// /*  
//   Напиши фукнцию findLongestWord(str), которая принимает 
//   параметром произвольную строку и возвращает самое длинное слово в этой строке.   

//   Важное условие - в строке могут быть только пробелы, символы букв и цифр!
// */
// let findLongestWord = (str)=>{
//   let arr = str.split(' ');
//   let res='';
//   for(let val of arr){
//     if(val.length>res.length){
//       res = val;
//     }
//   }
//   return res;
// }

// Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // 'force'

// //=============================== task 15 =======================


// /*  
//   Напиши функцию findLargestNumber(numbers), 
//   которая получает массив чисел numbers, и возвращает 
//   самое большое число в массиве.
// */
// function findLargestNumber(numbers){
//   let res=0;
//   for(let num of numbers){
//     if(res<num){
//       res = num
//     }
//   }
//  return res; 
// }
// ----------------------------------
// let findLargestNumber = function(numbers){
//   let res=0;
//   for(let i=0; i<numbers.length; i=i+1){
//     if(res<numbers[i]){
//       res = numbers[i]
//     }
//   }
//  return res; 
// }
// ------------------------------
// let findLargestNumber = (numbers)=>{
//   let i=0;
//   let res = 0;
//   do{
//     if(res<numbers[i]){
//       res = numbers[i]
//     }
//     i=i+1;
//   }while(i<numbers.length);
//   return res
// };
// // ----------------------------------------
// const findLargestNumber = function (numbers) {
//   let i = 0;
//   let res = 0;
//   while (i < numbers.length) {
//     if (res < numbers[i]) {
//       res = numbers[i];
//     }
//     i = i + 1;
//   }
//   return res;
// };

// // Вызовы функции для проверки
// console.log(
//   findLargestNumber([1, 2, 3])
// ); // 3

// console.log(
//   findLargestNumber([27, 12, 18, 5])
// ); // 27

// console.log(
//   findLargestNumber([31, 128, 14, 74])
// ); // 128


// //=============================== task 16 =======================

// /*  
//   Есть массив уникальных чисел uniqueNumbers.

//   Написать функцию, addUniqueNumbers(...), 
//   которая получает произвольное кол-во чисел как аргументы, 
//   и добавляет в массив uniqueNumbers только уникальные,
//   а те которые в массиве уже есть игнорирует.
// */

// const uniqueNumbers  = [2, 1, 4, 9];
// function addUniqueNumbers(...num){
//   for(let val of num){
//     if(!uniqueNumbers.includes(val)){
//       uniqueNumbers.push(val)
//     }
//   }
// return uniqueNumbers;
// };
// // // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

// //=============================== task 17 =======================

// /*
//   Напиши функцию filterFromArray(arr), которая 
//   объявляет 1 параметр, исходный массив arr.

//   При вызове функции, первым аргументом всегда будет массив чисел,
//   за которым следуют один или несколько аргументов, тоже чисел. 

//   Функция возвращает новый массив, который содержит только 
//   те элементы исходного массива, которые не совпадают 
//   ни с одним из числовых аргументов.
// // */
// let res=[];
// const filterFromArray = function(arr,...newArr){
// for(let val of arr){
//   if(!newArr.includes(val)){
//     res.push(val);
//   }
// }
// return res;
// }

// Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]



// //=============================== ***** task **** 18  =======================
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// /*
//   Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.

//   Добавляемый логин должен:
//     - проходить проверку на длину от 4 до 16-ти символов включительно
//     - быть уникален, то есть отсутствовать в массиве logins

//   🔔 Разбейте задачу на подзадачи с помощью функций.

//   Напишите функцию isLoginValid(login), в которой проверьте количество символов 
//   параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
//   в заданный диапазон от 4-х до 16-ти символов включительно.
// function isLoginValid(login){
//     if(login.length>=4 && login.length<=16){
//       return true; 
//   }else{
//     return false;
// }
// };
// console.log(isLoginValid('127д'));

//   Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
//   всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
//   если такого логина еще нет и false если логин уже используется.
// function isLoginUnique(allLogins, login){
//     if(!allLogins.includes(login)){
//    return true;
//   } else {
//     return false;
//   }
//   }
// console.log(isLoginUnique(logins, 'Ajax'));


//   Далее напишите функцию addLogin(allLogins, login) которая:
// function addLogin(allLogins, login){
  
//   if(isLoginValid(login)===false){
// alert('Ошибка! Логин должен быть от 4 до 16 символов');
// // break;
//   } else {
//        if(isLoginUnique(allLogins, login) === true){
//       logins.push(login);
//       alert('Логин успешно добавлен!');
//     } else {alert('Такой логин уже используется!')}
//   } 

// }
//     - Принимает новый логин и массив всех логинов как параметры
//     - Проверяет валидность логина используя вспомогательную функцию isLoginValid
//     - Если логин не валиден, прекратить исполнение функции addLogin 
//       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
//     - Если логин валиден, функция addLogin проверяеть уникальность логина 
//       с помощью функции isLoginUnique
//     - Если isLoginUnique вернет true, addLogin добавляет новый логин 
//        в logins и возвращает строку 'Логин успешно добавлен!'
//     - Если isLoginUnique вернет false, тогда addLogin не добавляет 
//        логин в массив и возвращает строку 'Такой логин уже используется!'

//   🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
//      позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
//      не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
//      false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
//       - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
//       - isLoginValid только проверяет валидный ли логин и возвращает true или false.
//       - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
//         используются результаты вызовов других функций - isLoginUnique и isLoginValid.
// */

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// function isLoginValid(login){
//   if(login.length>=4 && login.length<=16){
//     return true; 
// }else{
//   return false;
// }
// };

// function isLoginUnique(allLogins, login){
//   if(!allLogins.includes(login)){
//     return true;
//    } else {
//      return false;
//    }
//    }

// function addLogin(allLogins, login){
  
//   if(isLoginValid(login)===false){
//     alert('Ошибка! Логин должен быть от 4 до 16 символов');
//     // break;
//       } else {
//            if(isLoginUnique(allLogins, login) === true){
//           logins.push(login);
//           alert('Логин успешно добавлен!');
//         } else {alert('Такой логин уже используется!')}
//       } 
    
//     }

// // // Вызовы функции для проверки
// // addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// // addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// // addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// ================================
let count = (function(){
  let counter = 0;
  return function(num){
      counter = num !== undefined? num: counter;
      return counter ++;
  }
}())


console.log(count());
console.log(count());
console.log(count());
console.log(count());

console.log(count());
console.log(count(9));
console.log(count());
console.log(count());