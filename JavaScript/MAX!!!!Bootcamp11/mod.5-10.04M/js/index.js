'use strict';
// const users = [
//   { name: "Mango", daysInactive: 10, isActive: true },
//   { name: "Poly", daysInactive: 5, isActive: false },
//   { name: "Ajax", daysInactive: 12, isActive: true }
// ];

// // Для каждого элемента коллекции (user) проверим
// // поле daysInactive, если больше 7, то возвращаем
// // новый объект, распылив в него текущий user
// // и обновив поле isAcive на false (не активный),
// // и наоборот если меньше 7 то поле isActive
// // записываем true (активный)
// // На выходе получаем новую коллекцию с
// // актуальными данными
// // const updatedUsers = users.map(user => ({...user,isActive: user.daysInactive < 7}));

// console.log(updatedUsers);
// ==============================
// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];

//   // Пройдем по всем элементам коллекции и прибавим
//   // значения свойства likes к  аккумулятору,
//   // начальное значаение которого укажем 0.
//   const likes = tweets.reduce((acc, tweet) => acc + tweet.likes, 0);

//   console.log(likes); // 32

//   // Наверное подсчет лайков не одиночная операция,
//   // поэтому напишем функцию для подсчета лайков из коллекции
//   const countLikes = arr => arr.reduce((acc, x) => acc + x.likes, 0);
  
//   console.log(
//     countLikes(tweets)
//   ); // 32
// =============================================================
//========================== task 01 =====================

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan принимает два параметра - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
//   */
//  const findGreaterThan = (num, arr) => {
//   let result = [];
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] > num) {
//       result.push(arr[i]);
//     }
//   }
//   return result;

// };

// console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
// // ---------------------------------------------------------------
// function double(num, arr) {
//   let res = arr.filter(x=>x>num)
//   return res
// }
// console.log( double(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( double(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( double(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
// ===============================================================

// /* 
//   Функция multiplyBy принимает два параметра - число и массив. 
//   Возвращает массив все значения которого умножены на число.
// */
// const multiplyBy = (num, arr) => {
//   let result = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     result.push(arr[i] * num);
//   }

//   return result;
// };

// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
// ---------------------------------------------
// function multiplyBy(num, arr){
//   let res = arr.map(x=>x*num)
//   return res
// }

// /* 
//   Функция summAllNumbers принимает любое число аргументов.
//   Возвращает число - сумму всех аргументов.
// */
// function summAllNumbers(...args) {
//   let accumulator = 0;

//   for (let i = 0, max = args.length; i < max; i += 1) {
//     accumulator += args[i];
//   }

//   return accumulator;
// }
// -------------------------------------------------------
// function summAllNumbers(...args){
//   let res = args.reduce((acc,x)=>acc+x,0)
//   return res
// }

// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
// =======================================================================

// /* 
//   Функция findEvery получает два аргумента - число и массив.
//   Возвращает true если все элементы массива больше или равны числу.
//   Иначе если есть хоть один элемент меньше числа, то возвращается false.
// */
// const findEvery = (num, arr) => {
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] < num) {
//       return false;
//     }
//   }

//   return true;
// };
// ---------------------------------------
// function findEvery(num, arr){
//   let res = arr.every(el => el>=num);
//     return res 
// }
// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true


//========================== task 02 =====================

// /*
// Напиши функию getPropValues(arr, prop), принимающую 
// параметры arr - массив, и prop - имя ключа в объекте. 

// Функция должна возвращать массив всех значений этого ключа из arr.

// PS: обязательно использу перебирающие методы массивов, никаких for!
// */

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];

// function getPropValues(arr, prop){
//   let res = arr.map(x=>x[prop])
//   return res
// }


// // // Вызовы функции для проверки
// console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
// console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
// console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]


// //========================== task 03 =====================

// /*      
// Напиши функцию setGuestState(guests, period), где
// guests - массив гостей, period - кол-во дней после
// которого считается что гость не активен.
  
// Если значение поля inactiveDays болше чем period, 
// поставить для isActive значение false.
  
// Если же значение inactiveDays меньше чем period,
// поставить для isActive значение true

// PS: обязательно используй перебирающие методы массивов, никаких for!
// */


const guests = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true }
];

function setGuestState(guests, period){
guests.forEach(el => {
  if(el.inactiveDays > period){
    el.isActive=false
    } else {el.isActive=true}
  }
)
return guests
}
// -------------------------------------------------
// function setGuestState(guests, period){
// guests.forEach(el => el.inactiveDays > period? el.isActive=false: el.isActive=true);
// return guests;
// }




// // Вызовы функции для проверки
console.log(
  setGuestState(guests, 10)
); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(
//   setGuestState(guests, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(
//   setGuestState(guests, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// //========================== task 04 =====================

// /*
// Напиши функию getActiveGuests(guests), принимающую массив объектов гостей. 

// Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
       
// PS: обязательно используй перебирающие методы массивов, никаких for!
// */

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
// function getActiveGuests(guests){
//   let arr = guests.filter(x=>x.isActive===true)
//   return arr
// }

// // // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax


// //========================== task 05 =====================

// /*      
// Напиши функцию getGuestsOlderThan(guests, age), где 
// guests - массив объектов гостей, age - предел возраста для сортировки. 

// Функция возвращает массив объектов значение свойства age которых больше чем параметр age.

// PS: обязательно используй перебирающие методы массивов, никаких for!
// */

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
// function getGuestsOlderThan(guests, age){
//   let arr = guests.filter(obj=>obj.age>age)
//   return arr
// }
// // // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

// console.log(getGuestsOlderThan(guests, 55)); // []


// //========================== task 06 =====================

// /*
// Напишите функию findGuestById(guests, id), принимающую 
// guests - массив объектов гостей, id - идентификатор (число). 

// Функция должна возвращать объект гостя с совпадающим id.

// PS: обязательно используй перебирающие методы массивов, никаких for!
// */
// function getGuestById(guests, id){
// let gst = guests.find(obj=>obj.id===id)
// return gst
// }
// const guests = [
//   { id: 1, name: 'Mango', age: 20 },
//   { id: 2, name: 'Poly', age: 18 },
//   { id: 3, name: 'Ajax', age: 30 },
//   { id: 4, name: 'Chelsey', age: 45 }
// ];

// // Вызовы функции для проверки
// console.log(
//   getGuestById(guests, 3)
// ); // {id: 3, name: 'Ajax', age: 30}

// console.log(
//   getGuestById(guests, 1)
// ); // {id: 1, name: 'Mango', age: 20}

// console.log(
//   getGuestById(guests, 5)
// ); // undefined

// //========================== task 07 =====================

// /*
// * Напиши функцию getTotal(order), которая получает обьект заказа с продуктами и их ценой.
// * Функция возвращает число - общую стоимость заказа.
// * 
// * Используй метод reduce.
// */
// function getTotal(order){
// let arr = Object.values(order)
// let res = arr.reduce((acc,num)=>acc+num,0)
// return res
// }
// console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

// console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

// console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110


// //========================== task 08 =====================

// /*
// Напиши функцию getTotal(products, order), где 
// products - объект со свойствами "имя продукта":"цена за единицу"
// order - объект со свойствами "имя продукта":"количество единиц".

// Функция возвращает общую сумму стоимости всех продуктов заказа.

// Используй метод reduce.
// */

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   cheese: 30,
//   chicken: 40
// };
// function getTotal(products, order){
//   let arr = Object.entries(order)
//   console.log(arr)
//   let res = arr.reduce((acc,el)=>
//   acc+el[1]*products[el[0]],0)
//   return res
  
// }
// const orderA = {
//   bread: 2,
//   apples: 4,
//   chicken: 1
// };

// const orderB = {
//   bread: 1,
//   milk: 2,
//   cheese: 2,
//   apples: 1
// };

// const orderC = {
//   bread: 2,
//   cheese: 2
// };

// // // Вызовы функции для проверки
// console.log(getTotal(products, orderA)); // 140
// console.log(getTotal(products, orderB)); // 120
// console.log(getTotal(products, orderC)); // 80


// //========================== task 09 =====================

// /*     
// * Напиши функию isGuestsActive(guests), принимающую массив объектов гостей. 
// * Функция возвращает true если значение поля active всех объектов true, в противном случае false.
// * 
// * Используй метод every или some, никаких for!
// */
// function isGuestsActive(guests){
//   let res = guests.every(x=>x.active===true)
//   return res

// }
// // // Вызовы функции для проверки
// console.log(
//   isGuestsActive([
//     { name: "Mango", active: true },
//     { name: "Poly", active: false },
//     { name: "Ajax", active: true }
//   ])
// ); // false

// console.log(
//   isGuestsActive([
//     { name: "Mango", active: true },
//     { name: "Poly", active: true },
//     { name: "Ajax", active: true }
//   ])
// ); // true

// console.log(
//   isGuestsActive([
//     { name: "Mango", active: true },
//     { name: "Poly", active: true },
//     { name: "Ajax", active: false }
//   ])
// ); // false


// //========================== ****** task ***** =====================

const scientist = [{
  first: 'Albert',
  last: 'Einstein',
  year: 1879,
  passed: 1955
},
{
  first: 'Isaac',
  last: 'Newton',
  year: 1643,
  passed: 1727
},
{
  first: 'Galileo',
  last: 'Galilei',
  year: 1564,
  passed: 1642
},
{
  first: 'Marie',
  last: 'Curie',
  year: 1867,
  passed: 1934
},
{
  first: 'Johannes',
  last: 'Kepler',
  year: 1571,
  passed: 1630
},
{
  first: 'Nicolaus',
  last: 'Copernicus',
  year: 1473,
  passed: 1543
},
{
  first: 'Max',
  last: 'Planck',
  year: 1858,
  passed: 1947
},
{
  first: 'Katherine',
  last: 'Blodgett',
  year: 1898,
  passed: 1979
},
{
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852
},
{
  first: 'Sarah E.',
  last: 'Goode',
  year: 1855,
  passed: 1905
},
{
  first: 'Lise',
  last: 'Meitner',
  year: 1878,
  passed: 1968
},
{
  first: 'Hanna',
  last: 'Hammarström',
  year: 1829,
  passed: 1909
}
];
// // 1) отримати масив вчених що народилися в 19 ст\
// let born = scientist.filter(name=>name.year>1800 && name.year<1900)
// console.log(born)
// // // 2) знайти суму років скільки прожили всі вченні
// let life = scientist.reduce((acc,name)=>acc+(name.passed - name.year),0)
// console.log(life)
// // 3) Відсортувати вчених по алфавіту
// let alf = scientist.sort(function (a, b) {
//   if (a.last > b.last) {
//     return 1;
//   }
//   if (a.last < b.last) {
//     return -1;
//   }
//   // a должно быть равным b
//   return 0;
// });
// console.log(alf);
// // 4) Відсортувати вчених по даті народження
// let year = scientist.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   }
//   if (a.year < b.year) {
//     return -1;
//   }
//   // a должно быть равным b
//   return 0;
// });
// console.log(year);
// // 5) Відсортувати вчених по кількості прожитих років
// let lifeSort = scientist.sort(function (a, b) {
//     if ((a.passed-a.year)>(b.passed-b.year)) {
//       return 1;
//     }
//     if ((a.passed-a.year)<(b.passed-b.year)) {
//       return -1;
//     }
//     // a должно быть равным b
//     return 0;
//   });
  // console.log(lifeSort);
// // 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті

// let scientist18=[]
// scientist.forEach(x=>{
//   if(x.year>1400 && x.year<1700){
//     scientist18.push(x)
//   }
// })
// console.log(scientist18)
// -------------------------------------

let res = scientist.filter(x=>x.year>1400 && x.year<1700).forEach(el=>scientist.splice(scientist.indexOf(el),1))
// console.log(res)
// ----------------------------------------------------------------
// scientist.forEach(x=>{
//   if(x.year>1400 && x.year<1700){
//     scientist.splice(scientist.indexOf(x),1);
//   }
// });
// scientist.forEach(x=>x.year>1400 && x.year<1700? scientist.splice(scientist.indexOf(x),1):0)
// ----------------------------------------
console.log(scientist);

                                                

// 7) Знайти вченого який народився найпізніше.
// let name ={}
// let young = scientist.forEach(x=>{
//   let num =0;
//   if(x.year>num){
//     num =x.year
//     name = x
//   }
// }
// )
// console.log(name)
// // 8) Знайти рік народження Albert Einstein
// let albBorn;
// let albert = scientist.forEach(el=>el.last==='Einstein' ? albBorn=el.year : 0)
// console.log(albBorn)
// // 9) Знайти вчених прізвище яких починається на літеру С
// let letter = scientist.filter(el=>el.last[0]==='C')

// console.log(letter)
// // 10) Видалити з масива всіх вчених імя яких починається на A
// scientist.forEach(el=>el.first[0]==='A'? scientist.splice(scientist.indexOf(el),1): 0)
// console.log(scientist)

// //========================== HOMEWORK =====================

// /*
// * Используя массив (users) объектов пользователей, напишите функции которые с помощью 
// * функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
// */
const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// // /**
// // * Получить массив имен (поле name) всех пользователей
// // */
// let name=[];
// const getAllNames = arr => {
//   arr.reduce(el => name.push(el.name))
//   return name

// };
// console.log(getAllNames(users)); 
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

                          
// // /**
// // * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
// // */
// const getUsersByEyeColor = (arr, color) => {
// let eyes = arr.filter(el=>el.eyeColor===color)
// return eyes
// }

// console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

                                          
// // /**
// // * Получить массив имен пользователей по полу (поле gender)
// // */
// const getUsersByGender = (arr, gender) => {
//   let gen = arr.filter(el=>el.gender===gender)
//   return gen
// };

// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// // /**
// // * Получить массив только неактивных пользователей (поле isActive)
// // */
// const getInactiveUsers = arr => {
//   let act = arr.filter(el=>el.isActive===false)
//   return act
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
                    
                               
// // /**
// // * Получить пользоваля (не массив) по email (поле email, он уникальный)
// // */
// const getUserByEmail = (arr, email) => {
//   let user = arr.find(el=>el.email===email)
//   return user
// };

// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// // /**
// // * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
// // */
// // const getUsersWit...
// function getUsersWithAge(arr,min,max){
//   let age = arr.filter(el=>el.age>min&&el.age<max)
//   return age
// }
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
                                            
// console.log(getUsersWithAge(users, 30, 40)); 
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
                                 
                                 
// /**
//  * Получить общую сумму баланса (поле balance) всех пользователей
//  */
// const getTotalBalance = arr => {
//   let bal =arr.reduce((acc,el)=>acc+el.balance,0)
//   return bal
// };
// console.log(getTotalBalance(users)); // 20916
                                
                                
// // /**
// //  * Массив имен всех пользователей у которых есть друг с указанным именем
// //  */
// const getUsersByFriend = (arr, name) => {
//   let friend = arr.filter(el=>el.friends.includes(name))
//   return friend;
// };

// console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// /*
//   ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
// */
                                         
// /**
// * Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
// * повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке
// */
// const getAllSkills = arr => {
// /*let scills = arr.reduce((acc, el)=>acc.concat(el.skills),[])
// let res = Array.from(new Set(scills))*/
// let scills=[...new Set(arr.reduce((acc, el)=>acc.concat(el.skills),[]))].sort()
// return scills
// };
// function uniqueArray0(array) { var result = Array.from(new Set(array)); return result } 
// console.log(getAllSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

                             
// // /**
// // * Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// // */
// const getUserNamesSortedByFriendsCount = arr => {
//   let numFrend =arr.sort(function (a, b) {
//     if (a.friends.length > b.friends.length) {
//       return 1;
//     }
//     if (a.friends.length < b.friends.length) {
//       return -1;
//     }
//     // a должно быть равным b
//     return 0;
//   });
//   return numFrend
// };

// console.log(getUserNamesSortedByFriendsCount(users)); 
// // // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]