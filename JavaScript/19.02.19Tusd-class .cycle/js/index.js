'use strict'
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// console.log(users.length);
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);


// users.shift();
// console.log(users);

// users.unshift('Alex');
// console.log(users);

// users.push('Radion', 'Vetal');
// console.log(users);


// let string = 'heugh pwiug hpwohgwpgh wgh wigh iubuyvg uyvuoyv uyvuyv uyvouyvouy'
// let arr;
// arr = string.split(' ');
// console.log(arr);
// console.log(arr.length);

// for (let i=0; i < arr.length; i += 1){
//     console.log(i);
// }


// for (const i of arr) {
//     console.log(arr.indexOf(i) + ':' + i);
// }


// ------------4task------/
/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let num =100;
// let input;
// do {
//     input = Number(prompt ('ввести число болше 100'))
// }
// while (input < num );




/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// for (let i = min; i < max; i+=1) {
//     if ( i % 3 === 0 ){
//         console.log('Feez');
//     } else if (i % 5 === 0 && i % 3 !==0 ) {
//         console.log('Buzz');
//     } else
//     console.log(i);
// }







/*
6 task
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];
// for(const newNumder of numbers ) {
//     if (newNumder > num) {
//         newArray.push(newNumder);
//     }
// }
// console.log(newArray);


/*
7 task
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// let longestWord;

// console.log(longestWord); // 'force'
// const newArray = string.split(' ');
// longestWord = newArray[0];
// for (const value of newArray) {
//     if (value.length > longestWord.length) {
//         longestWord = value;
//     }
// }
// console.log(longestWord);


/*
------------------------------------------------task 8---------------------------------
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// let arr =[];
// let ask;
// let sum = 0;
// do {
//     ask = Number(prompt('Enter number'))
//     if ( ask !==0 ) {
//     arr.push (ask);
// }
// console.log(ask);
// console.log(arr);
// }
// while (ask);

// if (arr.length !== 0 ) {
//     for (const iteration of arr){
//         sum += iteration;
//     }
// }

// console.log('The sum is: '+ sum);

let test = confirm( 'Enter');



// let newStr = Number(test);


// console.log(typeof(newStr));
// console.log(typeof(test));
// console.log(test);


console.log( test );







