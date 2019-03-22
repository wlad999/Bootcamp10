'use strict';

/* Questions:
1. Example with fn(callback) - what is it callback??????
50 minuts.
*/

// ---------MY WORK IN HOME-------------------------------
// ---------------TASK 01--------НЕ РАБОТАЮТ КВАДРАТНЫЕ СКОБКИ С КАВЫЧКАМИ-----------------
/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
// user['mood'] = 'happy';
// // console.log(user);
// user['hobby'] = 'javascript';
// // console.log(user);
// user['premium'] = 'false';
// // console.log(user);
// let arr = Object.entries(user)
// // console.log(arr);
// for(let i of arr){
//     // console.log(i[0],i[1])
// }
// let arrNew = Object.keys(user)
// console.log(arrNew);
// for(let i of arrNew){
//    console.log(`${i}':' ${user[i]}`);
// }


// =====================================
// ------------TASK 02------------------------
/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//     helen: 1
//   };
//   let arr = Object.entries(tasksCompleted);
//   let biger = arr[0];
//   for( let i of arr){
//       if(biger[1]<i[1]){
//           biger = i;
//       }
//   }
//   console.log(biger);
//   ====================================
// ------------TASK 03-------------------
/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/
// function countProps(obj) {
//     let a = Object.keys(obj)
//     let i;
//     for(i =0; i < a.length; i=i+1){

//     }
//     return i;
// }
// // Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3
//   ===================================
// -----------------TASK 04--------------------
/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/
// function isObjectEmpty (obj){
//     let a = Object.keys(obj)
//    if(a.length > 0){ 
//        return false;} else {
//            return true;}
// }

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
//   =================================
// ------------TASK 05-------------------
/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/
// function countTotalSalary(salaries){
//     let salary = Object.values(salaries);
//     let amount = 0;
//     for( let sum of salary){
// amount = amount + sum;
//     }
//     return amount;
// }
// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330
// ================================
// ------------TASK 06------------ПРОВЕРИТЬ ПОЧЕМУ ПО 3 РАЗА ВЫВОДИТ--------

  /*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
// */

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
  ];
  
//   function getAllPropValues(arr, prop){
//         let arrProp =[];
//       for(let i of arr){     
//           for (let j in i){            
//               if(j === prop){
//                 arrProp.push(i[j])  
//               }
//           }
//       }
     
//       return arrProp;

//   }

// function getAllPropValues(arr, prop){
// //   let arrOfProps =[];
// //   for(let obj of arr){
// //     if(obj.hasOwnProperty(prop))
// //     arrOfProps.push(obj[prop]);
// //     // arrOfProps.push(Object.keys(obj)[prop])
// //   }
// // return arrOfProps;
// // }
 

  // // Вызовы функции для проверки
  // console.log(
  //   getAllPropValues(users, 'name')
  // ); // ['Poly', 'Mango', 'Ajax']
  
  // console.log(
  //   getAllPropValues(users, 'mood')
  // ); // ['happy', 'blissful', 'tired']
  
  // console.log(
  //   getAllPropValues(users, 'active')
  // ); // []
  
// ========================================
// -------------TASK 07--------------------
/*  
 * Расставь отсутствующие this в методах объекта account
*/

// const account = {
//     owner: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["order-1", "order-2", "order-3"],
//     changeDiscount(value) {
//       discount = value;
//     },
//     getOrders() {
//       return orders;
//     },
//     addOrder(cost, order) {
//       balance -= cost;
//       orders.push(order);
//     }
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   const orders = account.getOrders();
//   console.log(orders); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, "order-4");
//   console.log(account.balance); // 19000
//   console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']



/*примеры из конспекта */
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// console.log( hotel.name ); // Resort Hotel
// console.log( hotel['name'] ); // Resort Hotel
// ========================================
// -----------------------Удаление свйств объекта----------
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// delete hotel.name;
// console.log( hotel ); // {stars: 5, capacity: 100}

// delete hotel["stars"];
// console.log( hotel ); // {capacity: 100}
  // ============================


  // -ВОПРОСЫ - ПОЧЕМУ НЕ МЕНЯЕТСЯ ЗНАЧЕНИЕ 'capacity' ЕСЛИ ОНО ПЕРЕДАЁТСЯ КАК АРГУМЕНТ?????
// let capacity;
//   const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//     // ES5
//     getName: function () {
//       return hotel.name;
//     },
//     // ES6
//     getName() {
//       return hotel.name;
//     },

//     // changeCapacity(value, y) {
//     //   return hotel[value] =y
//     // }
//     changeCapacity(y) {
//       return hotel['capacity'] = y;
//             }
          

//   };
  
//   // console.log ( hotel.getName() ); // Resort Hotel
//   // console.log ( hotel.getStars() ); // 5
  
//   // console.log(hotel.changeCapacity(capacity, 200));
//   console.log(hotel.changeCapacity(200));
//   // hotel.capacity = 200;
//   console.log ( hotel.capacity ); // 200

  // ======================================================================
  // ---------MY WORK IN HOME--AGAIN-----------------------------
  // --------------------TASK 01----------------
  /*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };
// user.mood = 'happy';
// user.hobby = 'javascript';
// user.premium = false;


// for(let key in user){
//   console.log(key, user[key]);
// }
// let val = Object.entries(user);
// for(let key of val){
//   console.log(key[0], key[1])
// }
// let val = Object.keys(user);
// for(let key of val){
//   console.log(key, user[key])
// }
// console.log(user)
// ===========================
// -------------TASK 02-------------
/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };
// let value=0;
// let key
// for(let name in tasksCompleted){
  
//   if (value < tasksCompleted[name]){
//     value = tasksCompleted[name],
//     key = name;
//    }
    
// }
// console.log (key, value);
// ==============================================
// -----------TASK 03-------------
/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки

// function countProps(obj){
// let a = Object.keys(obj)
// let i;
// for(i=0; i < a.length; i=i+1 ){}
// return i
// /* я сделал через аргумент*/
// /*let x = arguments[0]
// let i=0;
// console.log(x)
// for(let y in x){
//   i=i+1
// }
// return i*/
// }

// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3
// ========================================
// ------------TASK 04----------------------
/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки
// function isObjectEmpty(obj){
//   let len = Object.keys(obj)
//   if(len.length>0){
//     return false
//   } return true
// }
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false
// ========================
// ---------TASK 05----------
/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

// Вызовы функции для проверки
// function countTotalSalary(salaries){
// let sum = Object.values(salaries);
// let total=0;

// for(let i of sum){
// total = total +i;
// }
// return total;
// };


// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330
// ====================================
// ------------------TASK 06-------------
  /*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/  

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []
// ==================================================
/* 
-----------------------------TASK 07 
 * Расставь отсутствующие this в методах объекта account
*/

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   }
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']
// ==============================================================

/* ЧТО ЗА ОБРАЩЕНИЕ?????????????
// проверяем наличие свойства(метода) у объекта
console.log("wellcome" in hotel); // false
*/

// --------------TASK 08-----------------
/*  
 * Расставь отсутствующие this в конструкторе Account
*/

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;
//   };

//   this.getInfo = function() {
//     console.log(`
//       Login: ${login}, 
//       Pass: ${password}, 
//       Type: ${type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc");
// console.log(account.password); // 'asdzxc'

// account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
// ========================================================
// --------------TASK 09-----------------
/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/
// function User(obj){
//   this.name = obj.name;
//   this.age = obj.age;
//   this.friends = obj.friends;
//   this.getInfo = function(){
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`)
//   };
// }
// const mango = new User({ name: "Mango", age: 2, friends: 20 });
// console.log(mango)
// mango.getInfo(); // User Mango is 2 years old and has 20 friends

// const poly = new User({ name: "Poly", age: 3, friends: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 friends
