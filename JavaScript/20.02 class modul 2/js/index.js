'use strict'


// // const adminLogin = 'admin';
// // const adminPassword = 'm4ngo1zh4ackz0r';
// // let Login = prompt('Please enter a login!');


// // if (Login === null) {
// //     alert ('Отменено пользователем!');
// // }
// // else if (Login === adminLogin) {
// //     let Password = prompt('Please enter your password');

// //         if (Password === adminPassword) {
// //             alert ('Добро пожаловать!');
// //         } else if (Password === null) {
// //             alert ('Отменено пользователем!');   
// //         } else {
// //             alert ('Доступ запрещен, неверный пароль!');
// //         }

// // } else {
// //     alert ('Доступ запрещен, неверный логин!');
// // }


// let input;
// const numbers = [];
// let total = 0;

// do{
//     input=Number(prompt('Enter a number'))
//     if(input !== 0 ) {
//         numbers.push (input);
//     }
//     console.log(input)
//     console.log(numbers)
// }
// while(input);
// if(numbers.length !==0 ) {
//     for (const value of numbers) {
//         total +=value;
//     }
// };
// console.log('The sum is' +total);



// ---------------------------------H0ME 02------------------------------------
/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
  🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
      символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 
      'Было введено не число, попробуйте еще раз', при этом результат prompt записывать 
      в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

let userInput;
const numbers = [];
let total = 0;

do {
    userInput = Number(prompt('Enter a number'))
    if (userInput !== 0) {
        numbers.push(userInput);
    }
    // console.log(userInput)
    // console.log(numbers)
}
while (userInput);
// - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
//       массив введенных чисел, сложить общую сумму всех элементов массива и 
//       записать ее в переменную. Используйте цикл for или for...of.
if(numbers.length !==0 ) {
        for (const sum of numbers) {
            total +=sum;
        }
    }
   alert(`Общая сумма чисел равна ${total}`);

//----------------------------------------------------------------------------------