'use strict'
// //-----------------------modul 4-----------------
// const users = ['Greengo', 'Riki', 'Floyd', 'Marchellos'];
// let userIndex;
  
// // Написать цыкл для поиска игрока за именем. Для примера давайте найдем Riki и
// // сохраним его индекс в userIndex;
// // for(let input of users) {
// //   if (input === 'Riki') {
// //     userIndex = users.indexOf(input);
// //   }
// // }
// // console.log(userIndex)

// let ask = 'aaa';

// // for (let user of users){
//   //   let hasUser;
//   //   console.log(hasUser);
//   //   if (ask === user) {
//     //     hasUser = true;
//     //   };
//     //   if (hasUser === true) {
//       //     alert ('This user has allready created');
//       //     console.log (hasUser);
//       //   }else {
//         //     users.push(ask);
//         //   }
//         // }
//         // console.log (users);
        
// // let ask = prompt ("Add a new user");

// // Дальше давайте добавим нового юзера, в конец массива
// if (!users.includes(ask)) {
//   users.push(ask);
// }


// // Удалим юзера по индексу userIndex
// users.splice(userIndex,1);
// console.log(users);


// // Обновим юзера по индексу
// users[1] = 'Max';
// console.log(users);


// // Дальше давайте перепишем каждый шаг в отдельную функцию getUserID(id),
// // addUser('string'), deleteUser(id), updateUser(id)
// function getUserID(name) {
//   let userIndex = '';
//   for(let input of users) {
//     if (input === name) {
//       userIndex = users.indexOf(input);
//     }

//   }
//   if (userIndex !== '') {
//     return userIndex;
//   } else {
//     alert('user is not finded');
//   }
//   console.log(userIndex);
// }


// console.log(getUserID('aabbbba')); // если юзера нет "user is not defined"

// // вводим новіе имена с помощю массва
// const addUser = function(arr, name) {
//   if (arr.includes(name)) {
//     alert('user has already exist');
// } else {arr.push(name);
// }
// }
// addUser(users, 'Ajax');
// addUser(users, 'Pablo');
// console.log(users);

// // -------------------------Удаляем юзера функуией ----------------------------------------
// const delateUser =(userIndex) => {
//   users.splice(userIndex,1)
// }
// delateUser(2);
// console.log(users);
// // --------------------------------
// delateUser(getUserID('Max'));
// console.log(users);

// const updateUser = function (index, name, arr) {
//   arr[index]=name;
//   return arr;
// }
// console.log(updateUser(getUserID('aaa'),'Max',users));


// -----------------находим индекс в массиве чравнивая с id  в объекте-------------------------------------------------------------------
// const users = [
//   {id: 'user_id_111', name: 'Greengo'},
//   {id: 'user_id_222', name: 'Riki'},
//   {id: 'user_id_333', name: 'Floyd'},
//   {id: 'user_id_444', name: 'Marchellos'},
// ];

// function getUserID(id) {
//   let userIndex = '';
//   for(let input of users) {
//     if (input.id === id) {
//       userIndex = users.indexOf(input);
//     }

//   }
//   if (userIndex !== '') {
//     return userIndex;
//   } else {
//     alert('user is not finded');
//   }
//   console.log(userIndex);
// }


// console.log (getUserID('user_id_222'));

// // -----------------------------------------------------------------------------

// const updateUser = function (index, name, arr) {
//   arr[index].name = name;
//   return arr[index];
//   }

//   const update = updateUser(getUserID('user_id_222'),'Max', users);
//   console.log(update);

// const getAllUsers = function(arr) {
//   for(const el of arr) {
//     console.log(`id: ${el.id} name: ${el.name}`);
//   }
// }
// getAllUsers(users);

const Student = function(bame, birthday, slogan) {
    this.name =name;
    this.birthday =birthday;
    this.slogan = slogan;
    this.getSlogan = function(){
        alert(`${this.slogan}`);
    }
};
const newStuden = new Student('Ben', '2.08.2019', 'Dont warry, be happy!');

console.log(newStuden); //выводит наш объект студента
console.log(newStuden.name); // выводит name студента.
newStuden.getSlogan();//вызов метода объекта студента. вернёт alert с девизом =)

// -------------------------------------------------------------------------
// ---------------Домашка 4 модуль-------------------------------
/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };
  
  /* 
    Необходимо создать функцию-конструктор Cashier.
    
    Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе): 
      - name - строка, имя кассира, передается при вызове конструктора
      
      - productDatabase - объект база данных продуктов, передается при вызове конструктора
      
      - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
      
      - getCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
      
      - countTotalPrice(order) - метод, получает объект списока покупок, считает общую стоимость покупок.
        🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
           а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
           Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
       
      - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
          * Обязательно проверьте что customerMoney не меньше чем значение totalPrice
          * Если денег было передано достаточно, возвращает разницу денег.
          * Если в customerMoney меньше денег чем в totalPrice, возвращает null 
          
      - onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.
      
      - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'   
      
      - reset() - метод, сбрасывает поле customerMoney 0.
  */
  
  function Cashier(name, productDatabase) {
    // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
  }
  
  /* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };
  
  /* Пример использования */
  const mango = new Cashier('Mango', products);
  
  // Проверяем исходные значения полей
  console.log(mango.name); // Mango
  console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
  console.log(mango.customerMoney); // 0
  
  // Вызываем метод countTotalPrice для подсчета общей суммы
  // передавая order - список покупок пользователя
  const totalPrice = mango.countTotalPrice(order);
  
  // Проверям что посчитали
  console.log(totalPrice); // 110
  
  // Вызываем getCustomerMoney для запроса денег покупателя
  mango.getCustomerMoney(300);
  
  // Проверяем что в поле с деньгами пользователя
  console.log(mango.customerMoney); // 300
  
  // Вызываем countChange для подсчета сдачи
  const change = mango.countChange();
  
  // Проверяем что нам вернул countChange
  console.log(change); // 190
  
  // Проверяем результат подсчета денег
  if(change !== null) {
     // При успешном обслуживании вызываем метод onSuccess
    mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
  } else {
    // При неудачном обслуживании вызываем метод onError   
    mango.onError(); // Очень жаль, вам не хватает денег на покупки
  }
  
  // Вызываем reset при любом исходе обслуживания
  mango.reset();
  
  // Проверяем значения после reset
  console.log(mango.customerMoney); // 0


/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 

  const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };

  const Cashier = function (name, productDatabase, ) {
    this.name = name;
    this.productDatabas = productDatabase;
    this.customerMoney = 0;
        this.getCustomerMoney = 
        function(value) {
            this.customerMoney = Number(value('Оплатите товар'));  
        }
        this.countTotalPrice = function(order) {products, totalvalue, 


        }


  }



  const Manager = function(name = "manager", sales = 0) {
    this.name = name;
    this.sales = sales;
    this.sell = function(product) {
      this.sales += 1;
      return `Manager ${this.name} sold ${product}.`;
    };
  };
  
  const mango = new Manager('Mango', 5);
  console.log(mango.sales); // 5
  console.log(mango.sell('TV')); // Manager Mango sold TV
  console.log(mango.sell('Microwave'));  // Manager Mango sold Microwave
  console.log(mango.sales); // 7
  
  const poly = new Manager('Poly', 10);
  console.log(poly.sales); // 10
  console.log(poly.sell('TV')); // Manager Poly sold TV
  console.log(poly.sell('Microwave'));  // Manager Poly sold Microwave
  console.log(poly.sales); // 12



  - name - строка, имя кассира, передается при вызове конструктора
      
      - productDatabase - объект база данных продуктов, передается при вызове конструктора
      
      - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
      
      - getCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
      
      - countTotalPrice(order) - метод, получает объект списока покупок, считает общую стоимость покупок.
        🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
           а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
           Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
       
      - countChange(totalPrice)