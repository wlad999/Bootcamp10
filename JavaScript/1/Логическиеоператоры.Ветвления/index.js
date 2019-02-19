'use strict'
// // js чувствительный к регистру

// var year = 2018;
// let month = "November";
// let number = 10;
// // let Number = 50;
// let numBer = 100;

// // peoplename = 'Bob';
// let peopleName = 'Bob';

// const UAH = 8;


// // let summ = number * Number + numBer;
// // console.log('vlad first task =', summ);
// // alert('summ', summ);
// // const answer1 = confirm (`Are you ready? ${year}`);
// // const answer2 = prompt('How are you?');
// // console.log('answer1', answer1);
// // console.log('answer2', answer2);

// console.log(typeof number);
// console.log(typeof month);
// console.log(typeof month===typeof number);

// console.log(month.length)
// console.log(month.indexOf('N'));
// console.log(month.indexOf('w'));
// console.log(month.includes('Now'));
// console.log(month.includes('now'));

// const fontSize = '5.5px';
// const usersLength = 20;

// console.log ('преобразование в целое число', Number.parseInt(fontSize) ); // 5
// console.log ('преобразование в число с дробью', Number.parseFloat(fontSize) ); // 5.5

// console.log('Проверка начисло', Number.isNaN(Number(fontSize)));
// console.log('Проверка начисло', Number.isNaN(usersLength));

// const a = 0.3;
// const b = 0.5;

// console.log('a + b = ', a + b);
// console.log('a + b = ', (a + b).toFixed(10));

// const text = 'Преобразование в целое число';
// console.log('Преобразование к нижнему регистру', text.toLowerCase());
// console.log('Преобразование к верхниему регистру', text.toUpperCase());

// const name = 'Jonh';
// const surname = 'Connor';
// const years = 40;
// const height = 180;
// console.log('Message:',
// `Hello ${name} ${surname}. i'm ${years} and ${height + 2 + 'sm'}.`);

// console.log('Message:',
// `Hello ` + name + ' ' + surname + " i'm " + years + " and " + (height + 2) + ' sm. ');







// const num = 20;
// const result = num < 30 && num > 10;
// console.log(result); //true

// const text = 'akadur'
// // const num = 20;
// const result = text.length < 30 && text.length >5;
// console.log(result); //true

const a = 20;
const result = a < 30 || a > 10;
console.log(result);








const obj = {
    id: 'asdasd',
    name: 'Alex',
    role: 'admin',
    age: 30,
   };
   const resultObj = obj.role === 'admin' || obj['role'] === 'moderator';
   
   console.log(resultObj);
   
   if(resultObj) {
    const name = 'Bob';
   }
   
   if(resultObj !== true) {
    var varName = 'Bob';
   }
   
   const resultPrompt = prompt('Введите значение');
   
   if (resultPrompt !== 'admin' && obj.age) {
    alert('нет прав');
   } else {
    alert('добро пожалывать');
   };
   
   console.log('name', name);
   // console.log(surname);
   console.log('varName', varName);
   
   // const surname = 'Dilslsl';


// let season;
// const monthName = "January";

// if (monthName === "June" || monthName === "July" || monthName === "August") {
//  season = "summer";
// } else if (monthName === "May") {
//  season = "spring";
// } else if (monthName === "September") {
//  season = "autumn";
// } else {
//  season = "winter";
// }



const monthName = "May";
let season;

switch (monthName) {
  case "June":
    season += "Summer";
  case "May":
    season += "Spring";
  case "September":
    season += "Autumn";
  default:
    season += "Winter";
}

console.log(season); // "undefinedSpringAutumnWinter"


let value = 0;

value +=50;
value +=50;
value -=30;

console.log('value', value);




