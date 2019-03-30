'use strict';

// let temperatureDegree = document.querySelector('.temperature-degree');
// let temperatureDescription = document.querySelector('.temperature-description')
// let timeZone = document.querySelector('.location-timezone');
// let iconID = document.querySelector('.icon');
// let temperatureSection = document.querySelector('.temperature-section');
// let temperatureUnit = document.querySelector('.temperature-unit');

// let onload=()=> {
//   let lat;
//   let long;
//   let celsus, tempBuffer;
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(position =>{
//       // console.log(navigator.geolocation);
//       // console.log(position);
//       lat = position.coords.latitude;
//       long = position.coords.longitude;
      

// let proxy = 'https://cors-anywhere.herokuapp.com/';
// let api =(`${proxy}https://api.darksky.net/forecast/71112812e101a60980d3b37a2f524b59/${lat},${long}`);

// fetch(api)
// .then(response =>response.json())
// .then(data => {
//   console.log(data);
// const {icon, summary, temperature}= data.currently;
// temperatureDegree.textContent = temperature;
// temperatureDescription.textContent =summary;
// timeZone.textContent =data.timezone;
// celsus = 5/9*(temperature-32);
// setIcon(icon, iconID);
// tempBuffer = temperature;
// temperatureSection.addEventListener('click', setTemperature);

// })
// })
   
// }
// function setTemperature (){
//   if (temperatureUnit.textContent==='F'){
//     temperatureUnit.textContent = 'C';
//     temperatureDegree.textContent = Math.floor(celsus);
//   } else {
//     temperatureUnit.textContent='F';
//     temperatureDegree.textContent = tempBuffer;
//   }
// }


// function setIcon(icon, iconID){
//   const skycons = new Skycons({color: "white"});
//   const currentIcon = icon.replace(/-/g, "_").toUpperCase();
//   skycons.play();
//   console.log(skycons.currentIcon);
//   return skycons.set(iconID, Skycons[currentIcon]);    

// }

// }


// window.addEventListener('load',onload);
// =======================================================
// -----------------TASK 01-------------------------------
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
// function fetchCountryData(evt) {
//   evt.preventDefault();
//   let API_URL = `https://restcountries.eu/rest/v2/name/${input.value}?fullText=true`;
//   fetch(API_URL)
//   .then(response=> response.json())
//   .then(data=>{
//       console.log(data);
//       result.innerHTML = `<p>Country name:${data[0].name}</p>
//       <p>Capital: ${data[0].capital}</p>
//       <p>Main currency: ${data[0].currencies[0].code}</p>
//       <p>Flag: <img style="width:300px" src="${data[0].flag}"></p>`;
//   })
//   .catch(error => ('Netu takoi strani'));
// }
// ==============================================
// ---------------TASK 02------------------------
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

// form.addEventListener("submit", fetchUserData);

// /*
// @param {FormEvent} evt
// */
// function fetchUserData(evt) {
//     evt.preventDefault();
//     const API_URL = `https://api.github.com/users/${input.value}`;
//     fetch(API_URL)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//         result.innerHTML = `<p>Avatar:<img style="width:300px" src=   "${data.avatar_url}">
//         </p><p>Username: ${data.login}</p><p>Bio:   ${data.bio}</p>
//         <p> Public repos: ${data.public_repos}</p>`;
//     })
//     .catch(result.innerHTML = `<p>NETU TAKOGO CHELOVEKA</p>`)
// }
// =====================================================