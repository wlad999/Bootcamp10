'use strict';
// const users =['Mango', 'Ajax', 'Poly'];
// // console.log(users);
// console.log(users.length);
// console.log(users[2]);

// users[3] = 'Chelsey';
// console.log(users.length);
// console.log(users);


// ------------Методы
// const users =['Mango', 'Ajax', 'Poly'];
// const string = 'i love javascript';
// console.log(string.split(' '));
// const asString = users.join('hgcytc');
// console.log(asString)
// const userInput = prompt('давай имя');
// const idx = users.indexOf(userInput);
// console.log(idx);


// const userInput = prompt('давай имя');
// const hasUser = users.includes(userInput);
// console.log(hasUser);

// const users =['Mango', 'Ajax', 'Poly'];
// users.push('Chlsey');
// users.push('Huga');
// // console.log(users.push('check'));/*user.push в консоли вывыодит индекс на которе записан элемент */
// console.log(users);

// users.pop();
// console.log(users.pop());
// const guests = ['Mango', 'Poly'];
// console.log(guests);
// const guestName =prompt('давай имя');
// guests.push(guestName);

// console.log(guests);
// const users = ['Mango', 'Ajax','Poly', 'Chelsey'];
// const someUsers =users.slice(-2)
// console.log(someUsers);
// // --копирует-1 цифра - от чего, д2я цифра- до чего не включая егою
// console.log('users:', users);
// ----SLISE - не мутирует массив, массив остаётся
// const users = ['Mango', 'Ajax','Poly', 'Chelsey'];
// console.log('user:', users);
// console.log(users.splice(1, 1));
// console.log(users);

// const users = ['Mango', 'Ajax','Poly', 'Chelsey'];
// users.splice(2, 0, 'Alex','Simgu');
// console.log(users); 
// -Добаление
const users = ['Mango', 'Ajax','Poly', 'Chelsey'];
console.log(users); 
users.splice(1, 1, 'Alex');
console.log(users); 
