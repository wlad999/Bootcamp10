'use strict'
// const client = ['Mango', 'Poly', 'Ajax'];
// console.log(client [0]);
// console.log(client [1]);
// console.log(client [2]);

// client[3] = 'Alex';
// console.log(client [3]);
// client.length = 2;
// console.log(client.length);
// console.log(client);


// ------------------------split-------------------------------
// const message = 'Welcom to Bahams!';
// console.log('it is only string message = ', message);
// console.log('i use just split on sting message = ', message.split(' '));
// ------------------------JOIN-------------------------------
// const client = ['Mango', 'Poly', 'Ajax'];
// console.log('we broken massiv and create string thrue nothing...', client.join(''));
// console.log('we broken massiv and create string  ","...', client.join(','));
// console.log('we broken massiv and create string thrue "-"...', client.join('-'));

// --------------check in string-yes or no. yes "1", no"-1"
// const client = ['Mango', 'Poly', 'Ajax'];
// console.log(client.indexOf('Poly'));
// console.log(client.indexOf('Monkong'));

// // -------if includ - treu, if no - false
// console.log(client.includes('Poly'));
// console.log(client.includes('Monkong'));

// //--------create new element in massiv
// client.push('letsinend');
// client.unshift('letsinstart');
// console.log(client);

// //--------delate new element in massiv-------------
// client.pop();
// client.shift();
// console.log(client);

// // ------------------we creare new massiv -bests like copy from client.------------ 
// const bests = client.slice(0, 3);
// console.log('bests', bests);






const client = ['Mango', 'Poly', 'Ajax', 'Romeo', 'Grimgo'];
//------------- we delate 1-3 position------------------------
// client.splice(0, 3);
// console.log(client);


// -------------we add new element-----------------
// client.splice(1, 0, 'Even', 'Artem');
// console.log(client);


// --------------------we add with delate------------
// client.splice(1, 3, 'Pyton', 'zgrsh', 'rgeg,');
// console.log(client);

// -----cancad-we create new massiv from two---
const newClient = ['Adam', 'Franky'];
const newArr = client.concat (newClient);
console.log(newArr);

console.log(newArr.reverse());
console.log('we ask - isArray:', Array.isArray(newArr));
