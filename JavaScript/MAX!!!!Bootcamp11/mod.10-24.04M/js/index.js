'use strict';
// const about={
//   name: "Maksim",
//   isActive: true,
//   hobby: {
//     run: true,
//     jump:false 
//   }
// }

// const jsonAbout =JSON.stringify(about)
// console.log(jsonAbout);

// const parseAbout=JSON.parse(jsonAbout)
// console.log(parseAbout);

// console.log('first')
// let newDate
// const url = 'https://api.myjson.com/bins/k9i31';
// const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

/*
// function returnFetch(){
// return fetch(url)
// .then(response => response.json())
// .then(data=>{
//   let num = document.querySelector('.num')
//   num.textContent=data.age;
// })
// }
// // .catch()
// returnFetch()
// console.log('second');
*/
// ==========================================

// fetch(url)
// .then(response => {
//   if (response.ok) return response.json()
//   throw new Error ('Error')
  
// })
// .then(data=>console.log(data))
// .catch(err=>console.error('ERROR!!!', err));
// ==================================================

// function getPost(what, post){
// return fetch(`https://jsonplaceholder.typicode.com/${what}/${post}`)
//   .then(response => response.json())
//   // .then(json => console.log(json))
// }

// getPost('albums', 5)
// .then(data=>console.log(data.title, data.id))
// ========================

// const newObj={
//   name: 'Vlad',
//   strong: 'hard',
//   liquid: {beer:'light',vodka:'nemiroff' }
// }


// const url ='https://jsonplaceholder.typicode.com/posts'; 

// const settings={
//   method: 'POST',
//   body: JSON.stringify(newObj),
//   headers: {
//       "Content-type": "application/json; charset=UTF-8"
// }
// }

// fetch(url, settings)
// .then(response=>response.json())
// .then(data=>console.log(data))
// // =============================================
// const putObj={
//   title: 'happy title'
// }


// const putSettings = {
//   method: 'PUT',
//   body: JSON.stringify(putObj),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// }

// fetch('https://jsonplaceholder.typicode.com/posts/3',putSettings )
// .then(response=>response.json())
// .then(data=>console.log(data))  

// // ========================

// fetch('https://jsonplaceholder.typicode.com/posts/3', {
//   method: 'DELETE'
// }).then(() => console.log('success'))
// .catch(error => console.log('ERROR' + error));


// ===================================

// ----------------localStorage------------------

// localStorage.setItem('login', 'Maksim')
// localStorage.setItem('log', 'Bond')

// /* localStorage.clear() - удаляет всё-не пользоваться*/
// // localStorage.clear()
// // localStorage.removeItem('login')

// const newLocal = {
//   name: 'Bond',
//   job: 'Killer'
// }

// localStorage.setItem('about', JSON.stringify(newLocal))

// let result =JSON.parse(localStorage.getItem('about'))
// console.log(result);

// let getKey=localStorage.getItem('log')
// console.log(getKey);
// localStorage.clear()
// ==================================================
// -------------Записываем значение из интпута---------------
// let text = document.querySelector('.text'),
//   input = document.querySelector('.input'),
//   btn = document.querySelector('.btn');

// function writeLocal(){
//   localStorage.setItem('about', input.value);
//   getLocal()
// }

// function getLocal(){
//   text.textContent = localStorage.getItem('about','');
//  }
// getLocal();
// btn.addEventListener('click', writeLocal)
// ======================================================
// -----------------TASK 01-----------------------
/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://restcountries.eu/rest/v2/name/";

// form.addEventListener("submit", fetchCountryData);
// /*
//   @param {FormEvent} evt
// */

// function fetchCountryData(event) {
//   event.preventDefault()
  
//   // return fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
//   return fetch(API_URL+input.value)
//   .then(response => response.json())
//   .then(data=>{
//     console.log(data);
//     data.forEach(el=> {
//       result.innerHTML +=`<p>${el.name}</p>`;
//       result.innerHTML +=`<p>${el.capital}</p>`;
//       result.innerHTML += `<p>${el.currencies[0].code}</p>`;
//       // result.innerHTML +=`<p>${el.currencies.reduce((acc,el)=> acc+ el.code,'')}</p>`;
//       result.innerHTML +=`<img src="${el.flag}" alt="flag">`;
           
//     });
//       }).catch(error => console.log('ERROR' + error));
//   }
// ==============================================================
// --------------------------TASK 02---------------------------
/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://api.github.com/users/";

// form.addEventListener("submit", fetchUserData);

// /*
//   @param {FormEvent} evt
// */
// function fetchUserData(event) {
//   event.preventDefault()
//   // return fetch(`https://api.github.com/users/${input.value}`)
//  fetch(API_URL+input.value)
//   .then(response => response.json())
//   .then(data=>{
//     console.log(data);
//       result.innerHTML +=`<p>Avatar:<img src="${data.avatar_url}" alt="flag"></p>`
//       result.innerHTML +=`<p>Username:${data.login}</p>`
//       result.innerHTML +=`<p>Bio:${data.bio}</p>`
//       result.innerHTML +=`<p> Public repos:${data.public_repos}</p>`
//       // }
//       }).catch(error => console.log('ERROR' + error));
//   }

// ====================================================================
// --------------------------TASK 03--------------------
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".user-table");


// form.addEventListener("submit", fetchUsers);

// /*
//   @param {FormEvent} evt
// */
// function fetchUsers(event) {
//   event.preventDefault()
//   fetch(`https://jsonplaceholder.typicode.com/users/`)
//   .then(response => response.json())
//   .then(data=>{data.forEach(el => {
//     userTable.innerHTML +=`<tr><td>name: ${el.name}</td><td>email: ${el.email}</td><td>city: ${el.address.city}</td><td>website: ${el.website}</td><td>company: ${el.company.name}</td></tr></p>`
    
//   });
//     console.log(data);
      
//   })
// }

// ===========================================================
// --------------------------TASK 04--------------------------
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// form.addEventListener("submit", getUserById);

// function getUserById(event) {
//   event.preventDefault()

// fetch(`https://jsonplaceholder.typicode.com/todos/${input.value}`)
// .then(response => {
//   if(response.ok) return response.json();

//   throw new Error('error');
// })
// .then(data=>{
//     console.log(data);
// result.innerHTML=data;
       
//   })
//   .catch(error => console.log(error, "Ошибка! Пользователя с таким id не существует"));

// }
// =============================================================


// -------------------HOME WORK--------------------------
/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/


const butFind = document.querySelector(".search-btn");
// console.log(butFind)
const inpFind = document.querySelector(".search");
// console.log(inpFind)  
const form = document.querySelector(".search-form");
// const search = document.querySelector(".search-btn");
const result = document.querySelector(".result");
const find = document.querySelector(".find");
const API_URL = "https://api.github.com/users/";


// /*
//   @param {FormEvent} evt
// */
// --------------------------------------------------------------------
form.addEventListener("click", getAllUsers);

function getAllUsers(event){
  event.preventDefault()
  if(event.target === find){
  fetch('https://test-users-api.herokuapp.com/users/')
  .then(response => response.json())
  .then(data=>{
    console.log(data)
    data.data.map(el=>result.innerHTML+=`<p>${el.id}</p>`)})
}
}
// --------------------------------------------------------------------

form.addEventListener("click", getUserById);

function getUserById(event){
  event.preventDefault()
  if(event.target === butFind){ 
  fetch(`https://test-users-api.herokuapp.com/users/${inpFind.value}`)
  .then(response => response.json())
  .then(data=>{
    console.log(data)
    result.innerHTML+=`<p>name: ${data.data.name}</p><p>age: ${data.data.age}</p><p>id: ${data.data.id}</p>`
  })
}
}

// -----------------------------------------------------------------------------------------
let inpDel = document.querySelector('.inp-del')
let subDel = document.querySelector('.btn-del')
let inpAddName = document.querySelector('.inp-addName')
let inpAddAge = document.querySelector('.inp-addAge')
let subAdd = document.querySelector('.btn-add')


// ----------------------------------------------------------
form.addEventListener("click", addUser);

function addUser(event){
  event.preventDefault()

if(event.target === subAdd){
const newCostomer = {
  name:inpAddName.value,
  age:inpAddAge.value
}
fetch('https://test-users-api.herokuapp.com/users/', {
    method: 'POST',
    body: JSON.stringify(newCostomer),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('ERROR' + error));

}
}
// -------------------------------------------------------------
form.addEventListener("click", removeUser);

function removeUser(event){
  event.preventDefault()
  if(event.target===subDel){
fetch(`https://test-users-api.herokuapp.com/users/${inpDel.value}`, {
  method: 'DELETE'
}).then(() => console.log('success'))
.catch(error => console.log('ERROR' + error));
console.log(inpDel.value)
}
}

// ---------------------------------------------------------------------
{/* <input class="inp-changeName" type="text" name="country" placeholder="update name(name)">
    <input class="inp-changeAge" type="text" name="country" placeholder="add age(age)">
    <input class="inp-changeById" type="text" name="country" placeholder="input id">
    <button class="mdc-btn btn-update" type="submit">add user</button> */}

let inpUpdateName = document.querySelector('.inp-changeName');
let inpUpdateAge = document.querySelector('.inp-changeAge');
let inpUpdateId = document.querySelector('.inp-changeById');
let btnUpdate = document.querySelector('.btn-update');

form.addEventListener("click", updateUser);

function updateUser(event){
  event.preventDefault();
  if(event.target === btnUpdate){
    
         let userToUpdate = {
     name: inpUpdateName.value,
     age: inpUpdateAge.value
    };

fetch(`https://test-users-api.herokuapp.com/users/${inpUpdateId.value}`, {
    method: 'PUT',
    body: JSON.stringify(userToUpdate),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('ERROR' + error));

}
}