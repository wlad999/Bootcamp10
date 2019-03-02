'use strict'
// const users = [{
//     id: '121asdasda',
//     name: 'Gleb',
//     sex: 'male',
//     position: 'manager',
//     salery: 24
//   },
//   {
//     id: '121a232asda',
//     name: 'Alin',
//     sex: 'female',
//     position: 'solider',
//     salery: 15
//   },
//   {
//     id: '11241asda',
//     name: 'Adam',
//     sex: 'male',
//     position: 'developer',
//     salery: 19
//   },
//   {
//     id: '94421asda',
//     name: 'Funk',
//     sex: 'female',
//     position: 'developer',
//     salery: 13
//   },
//   {
//     id: '77221asda',
//     name: 'Gooliver',
//     sex: 'male',
//     position: 'gooliver',
//     salery: 17
//   }
// ];

// -------------------------------------------------------
// ищем юзера по id:
// for(const elem of users) {
// if(elem.id === '94421asda') {
//   console.log(elem);
// }
// }



// function findById(id){
//   for(const elem of users){
//     if (elem.id === id)
//     return elem;
//   };
// }
// console.log(findById('11241asda'));
// ----------------------------------------------------------------
// ------------------колбек по имени и id
// function findBy(id, action){
//     for(const elem of users){
//       let find = action (id, elem);
//       if(find !==null){
//         return find;
//       }
//     };
//   }
//   const byId = (id, elem) => elem.id === id? elem : null;
//   const byName = (id, elem) => elem.id === id? elem : null;
//   console.log(findBy('77221asda', byId));
//   console.log(findBy('Adam',byName));
//  --------------------------------------------------------------------------

// //  ---------MAP---ЗП ЮЗЕРОВ--------------
// const map = function (arr, change, currency, pdv) {
//   let newArr = []
//   for (let num of arr) {
//        newArr.push(Math.round(num.salery * 27.1));
//   }
//   return newArr;
// }
// console.log(map(users));

// // ---------------Зарплата в по курсу 30 без ПДВ-------------------------------------------
// const map = function (arr, change, currency, pdv) {
//   let newArr = []
//   for (let num of arr) {
//        newArr.push(change(num.salery, currency, pdv));
//   }
//   return newArr;
// }
// const changeSalery = (salery, currency, pdv) => Math.round(salery*currency*(1-pdv/100))


// console.log(map(users, changeSalery, 30, 20 ));
// ---------------------------------------------------------




// -----------------TASK01---------------------------------

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => arr.filter( (i) => i > num);
// ----------------------------------------------------------------------------
// {
//   // const result = [];

//   // for (let i = 0, max = arr.length; i < max; i += 1) {
//   //   if (arr[i] > num) {
//   //     result.push(arr[i]);
//     }
//   }

//   // return result;
// };
// ----------------------------------------------------------------------
// console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
// ==============================================================================
// /* 
//   Функция multiplyBy принимает два аргумента - число и массив. 
//   Возвращает массив все значения которого умножены на число.
// */
// const multiplyBy = (num, arr) =>  arr.map((i) => i*num)
// // {
// //   let result = [];

// //   for (let i = 0, max = arr.length; i < max; i += 1) {
// //     result.push(arr[i] * num);
// //   }

// //   return result;
// // };

// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

// ==================================================================================
// /* 
//   Функция summAllNumbers принимает любое число аргументов.
//   Возвращает число - сумму всех аргументов.
// */
// function summAllNumbers(...args) {
//   return args.reduce((acc, i) => acc + i, 0);
// } 



// // {
// //   let accumulator = 0;

// //   for (let i = 0, max = args.length; i < max; i += 1) {
// //     accumulator += args[i];
// //   }

// //   return accumulator;
// // }

// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
// =====================================================================
// ----------------------------------------------------------------------

// /* 
//   Функция findEvery получает два аргумента - число и массив.
//   Возвращает true если все элементы массива больше или равны числу.
//   Иначе если есть хоть один элемент меньше числа, то возвращается false.
// */
// const findEvery = (num, arr) => arr.every((i) => num <=i);

// {
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] < num) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true



// =======================================================================
// ---------------TASK02------------------------------------------
/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];

// function getPropValues(arr, prop) {
//   return arr.map ((i) => i[prop]);
// }

// // Вызовы функции для проверки
// console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

// console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]

// console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
// ============================================================
// ----------------------TASK03-----------------------------------
/*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];

// function setGuestState(arr, period) { 
//   return arr.map(function(elem){
//     if(elem['inactiveDays'] > period){
//       elem['isActive'] = false;
//     } 
//     return elem
//   })

//   // return elem
// }

// // Вызовы функции для проверки
// console.log(
//   setGuestState(guests, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// // console.log(
// //   setGuestState(guests, 20)
// // ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// // console.log(
// //   setGuestState(guests, 50)
// // ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// ========================================================================


// const users = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];

// //  const setGuestState =(guests, period) => guests.map((x) => x.inactiveDays > period ? x.isActive = false : x.isActive = true )

// const setGuestState = (guests, period) => guests.map((x) => ({
//   ...x,
//   isActive: x.inactiveDays < period
// }));

// //   console.log(updatedUsers);
// // Вызовы функции для проверки
// console.log(
//   setGuestState(users, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(
//   setGuestState(users, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(
//   setGuestState(users, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// =================================================================================
// --------------------------------TASK04-------------------------------
/*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
// let arr = [];
// // Вызовы функции для проверки
// const getActiveGuests = (guests) => guests.filter((i) => {
//   if(i.isActive === true)
//   return i;
// })
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax

// =================================================================================
// const guests = [{
//     name: "Mango",
//     age: 20,
//     isActive: true
//   },
//   {
//     name: "Poly",
//     age: 18,
//     isActive: false
//   },
//   {
//     name: "Ajax",
//     age: 30,
//     isActive: true
//   },
//   {
//     name: "Chelsey",
//     age: 45,
//     isActive: false
//   }
// ];

// function getActiveGuests(guests) {


//   return guests.filter(function (el) {
//     if (el.isActive === true)
//       return el;
//   })

// }

// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
// =============================================
// -------------TASK 05------------------------------
/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
// const getGuestsOlderThan = (guests, num) =>guests.filter(i => i.age > num);


// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

// console.log(getGuestsOlderThan(guests, 55)); // []
// ==================================================
// ---------------TASK06-----------------------
/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { id: 1, name: 'Mango', age: 20 },
//   { id: 2, name: 'Poly', age: 18 },
//   { id: 3, name: 'Ajax', age: 30 },
//   { id: 4, name: 'Chelsey', age: 45 }
// ];
// const getGuestById=(guests, id) => guests.find((i) => i.id ===id)
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
// -----------------------------------------------
// -----------TASK07----------------------------------
/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
// const order = {
//   bread: 10,
//   apples: 25,
//   chicken: 60,
//   milk: 15,
//   cheese: 40
// };


// const arr = Object.values(order);
// let summ = arr.reduce((acc, value)=> acc + value);


// console.log(summ); // 150

// console.log(Object.values(order).reduce((acc, value)=> acc + value))

// ===========================================================

// ------------TASK08--------------------
/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   cheese: 30,
//   chicken: 40
// };

// const orderA = {
//   bread: 2,
//   apples: 4,
//   chicken: 1
// };

// const orderB = {
//   bread: 1,
//   milk: 2,
//   cheese: 3
// };
// const getTotalPrice = function (products, order) {
//   const arr = Object.keys(order);
//   return arr.reduce((acc, elem) => acc+order[elem]*products[elem], 0)
// };
// // Вызовы функции для проверки
// console.log(getTotalPrice(products, orderA)); // 140

// console.log(getTotalPrice(products, orderB)); // 130

// ===================================================================

// -----------------------TASK 09-------------------------------
/*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/

// const guestsA = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true }
// ];

// const guestsB = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: true },
//   { name: "Ajax", isActive: true }
// ];
// const allGuestsActive = (guests)=> guests.every(i=>i.isActive);

// // Вызовы функции для проверки
// console.log(allGuestsActive(guestsA)); // false

// console.log(allGuestsActive(guestsB)); // true
//===================================================
// ----------------HOME---------------------------

/*
 * Используя массив (users) объектов пользователей, напишите функции которые с помощью 
 * функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
 */


const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    phone: '+1 (848) 556-2344',
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
    phone: '+1 (855) 582-2464',
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
    phone: '+1 (814) 593-3825',
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
    phone: '+1 (909) 547-2687',
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
    phone: '+1 (956) 512-2693',
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
    phone: '+1 (876) 411-2433',
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
    phone: '+1 (979) 504-2554',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

/**
 * Получить массив имен (поле name) всех пользователей
 */
// const getAllNames = (usersName) => users.map(i=>i.name);

// console.log(getAllNames(users)); 
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

                            
/**
 * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
 */

// const getUsersByEyeColor = (arr, color) => users.filter(i => i['eyeColor']==='blue')

// console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

                                            
// /**
//  * Получить массив имен пользователей по полу (поле gender)
//  */
// const getUsersByGender = (arr, gender) => arr.filter(i => i.gender === gender).map(i => i.name);

// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// /**
//  * Получить массив только неактивных пользователей (поле isActive)
//  */
// const getInactiveUsers = arr => arr.filter(i => i.isActive);

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
                      
                                 
// /**
//  * Получить пользоваля (не массив) по email (поле email, он уникальный)
//  */
// const getUserByEmail = (arr, email) => arr.filter(i => i.email===email);

// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// /**
//  * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
//  */
// const getUsersWithAge = (arr, min, max) => arr.filter(i => i.age>=min && i.age<=max);

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
                                            
// console.log(getUsersWithAge(users, 30, 40)); 
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
                                 
                                 
// /**
//  * Получить общую сумму баланса (поле balance) всех пользователей
//  */

// const getTotalBalance = (arr) => arr.map(i => i.balance).reduce((acc, value)=>acc +value, 0)

// console.log(getTotalBalance(users)); // 20916

                              
                                
// /**
//  * Массив имен всех пользователей у которых есть друг с указанным именем
//  */
const getUsersByFriend = (arr, name) => arr.filter(i => i.friends.includes(name)).map(i => i.name);

console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
                                            



// /*