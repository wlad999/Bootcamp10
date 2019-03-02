'use strict'
// -----------------------------------------TASK01---------------
/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
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
// user.mood ='happy';
// user.hobby='javascript';
// delete user.premium;
// for( let item in user){
//   console.log(item,':',user[item]);
// }

// let arr = Object.keys(user);
// for(let element of arr){
//   console.log(element, ':', user[element]);
// }

// let arr2 = Object.entries(user);
// console.log(arr2);
// for(let element of arr2) {
//   console.log(element[0], element[1]);

// }
// ---------------------------------------------------

// -----------------------------TASK02----------------------------
/*
  Напиште скрипт который определит и выведет в консоль 
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



// ----------------------------------------------------------------
// -------------------------TASK03-----------------------------
/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/
// function countProps(obj){
//   let count =0;
//   for (const elem in obj){
//     count++;
//   }
//   return count;
  
// }

// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3
// ---------------------------------------------
// ------------------TASK04-----------------
/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/
// function isObjectEmpty(obj) {
//   let arr = Object.keys(obj);
//   if(arr.length === 0){return true;
//   }
//   return false;
// }

// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

// ====================================
// -------------TASK05------------------
/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// Вызовы функции для проверки
// function countTotalSalary(salaries){
//   let total=0;
//   let sum = Object.values(salaries);
//   for(let elem of sum){
// total=total+elem;
//   }
//   return total;
// }



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
// ========================================
// ----------------TASK 06-----------------
/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
// function getAllPropValues(arr, prop){
//   let arrOfProps =[];
//   for(let obj of arr){
//     if(obj.hasOwnProperty(prop))
//     arrOfProps.push(obj[prop]);
//     // arrOfProps.push(Object.keys(obj)[prop])
//   }
// return arrOfProps;
// }



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

// ========================================
// ------------------TASK 07----------------
/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
// */
// const User = function(name, isActive, age, friends) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;
//   this.getUserInfo = function(){
//     console.log(`User ${name} is ${age} years old and has ${friends} friends`)

//   }
// };
// let user =new User('Kate', true, 24, 5)
// let user1 =new User('Vasya', true, 100, 0)

// user.getUserInfo();
// user1.getUserInfo();
// -------------------------------------------
// -----------------TASK 08---------------------
/*  
  Расставьте отсутствующие this в методах объекта store
*/

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);
    
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);
    
//     this.managers.splice(idx, 1);
    
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
    
//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']
// ======================================
// --------------------------TASK 09------------------------

/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account(login, password, type = "regular") {
  this.login = login;
  this.password = password;
  this.type = type;

  this.changePassword = function(newPassword) {
    this.password = newPassword;

    console.log(this.password);
  };

  this.getAccountInfo = function() {
    console.log(`
      Login: ${this.login},
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword("asdzxc"); // 'asdzxc'

account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
