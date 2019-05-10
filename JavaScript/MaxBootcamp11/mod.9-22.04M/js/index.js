'use strict';
// -------------------TASK 01--------------------------
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548"
// ];

// let btnStart = document.querySelector('button[data-action="start"]')
// let btnStop = document.querySelector('button[data-action="stop"]')
// let body = document.querySelector('body')
// console.log(btnStop)
// console.log(body)
// let id = null;


// console.log(id)
// btnStart.addEventListener('click', start);

// function start() {
//   if (id === null) {
//     id = setInterval(() => {

//         let color = Math.round(Math.random() * 5)
//         body.style.backgroundColor = colors[color]
//         console.log(id)

//     }, 1000)
//   }}

// btnStop.addEventListener('click', stop)

//     function stop(){
//       /*btnStart.removeAttribute('disabled'); */
//       clearInterval(id)
//       id=null;
//       console.log(id)
//     }
// // ===================================

// // --------------------ПРИМЕР ПРОМИСОВ НА ПАРЕ ОТ МАКСА-----------------------------------
// let prize = Math.floor(Math.random() * 2);

// //     function shooter (arrow, headShot, fail){
// //       console.log('вы сделали выстрел');

// //       setTimeout( function(){
// //       Math.random() > .5 ? headShot():fail('Вы промахнулись');
// //     },1000)
// //   }

// function win() {
//   console.log('вы выиграли')
// }

// function prizes() {
//   if (prize === 1) {
//     console.log('Вы выиграли пиво!!!')
//   } else {
//     console.log('Вы выиграли водку!!!')
//   }
// }
// /*
// // shooter({},
// //   function (){
// //     console.log('Head')
// //     win()
// //     prizes()
// //   },
// //   function (miss){
// //     console.log(miss)
// //   }
// //   )
// */
// // ========================================================
// function shooter(arrow) {
//   console.log('вы сделали выстрел');

//   const promise = new Promise((resolve, reject) => {

//     setTimeout(function () {
//       Math.random() > .5 ? resolve('Вы попали') : reject('Вы промахнулись')
//     }, 1000)

//   })

//   return promise;

// }

// function win() {
//   console.log('вы выиграли')
// }

// function prizes() {
//   if (prize === 1) {
//     console.log('Вы выиграли пиво!!!')
//   } else {
//     console.log('Вы выиграли водку!!!')
//   }
// }

// shooter({})
//   .then(head => console.log(head))
//   .then(win)
//   .then(prizes)
//   .catch(miss => console.log(miss))

// ============================================
// -------------------TASK 02----------------------------
/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//   return '';
// }

// console.log(
//   getFormattedTime(1523621052858)
// ); // 04:12.8

// console.log(
//   getFormattedTime(1523621161159)
// ); // 06:01.1

// console.log(
//   getFormattedTime(1523621244239)
// ); // 07:24.2


//  function getFormattedTime(time){
//   let date = new Date(time);

//   let minutes = date.getMinutes()
//   if(minutes<10){
//     minutes='0'+minutes
//   }
//   let second = date.getSeconds()
//   if(second<10){
//     second='0'+second
//   }

//   let milisecond = parseInt((date.getMilliseconds())/100)


// return (`${minutes}:${second}.${milisecond}`)
//  }
// ==========================================
// ----------------TASK 03-------------------------------
/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");
// const form = document.querySelector('.timer');



// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };

/*
 * Вспомогательные функции
 */

/*
 * Обновляет поле счетчика новым значением при вызове
 * аргумент time это кол-во миллисекунд
 */
// function updateClockface(elem, time) {
// Используйте функцию getFormattedTime из задания #1
// elem.textContent = getFormattedTime(time);
// }

/*
 * Подсветка активной кнопки
 */
// form.addEventListener('click', setActiveBtn)
// function setActiveBtn() {
//   if(event.target.nodeName ==='BUTTON') {

//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');
//   event.target.classList.add('active');
// }}

// startBtn.addEventListener('click', startTimer)

// function startTimer(){ 
// setActiveBtn()
// let startDate = Date.now();
// getFormattedTime(startDate)
// }

// let id = null;

// function getFormattedTime(startDate){

//   if (id === null) {
//       id = setInterval(() => {
//         console.log(id)
//         let mooveDate = Date.now();
//         let change = mooveDate-startDate
//         let timerdata = new Date(change);
//         let minutes = timerdata.getMinutes()
//         if(minutes<10){
//           minutes='0'+minutes
//         }
//         let second = timerdata.getSeconds()
//         if(second<10){
//           second='0'+second
//         }
//         let milisecond = parseInt((timerdata.getMilliseconds())/100)
//         return clockface.textContent=(`${minutes}:${second}.${milisecond}`)
//       }, 100);
//     }

// }

// stopBtn.addEventListener('click', stop)

//     function stop(){
//       /*btnStart.removeAttribute('disabled'); */
//       clearInterval(id)
//       id=null;
//       console.log(id)
//     }
// =====================================================
/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 * 
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 * 
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 * 
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 * 
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 * 
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
 */

// const DELAY = 1000;
// const quantity = 100;

// function processOrder(value){
//     const promise = new Promise((resolve, reject) => {

//       setTimeout(function (){
//         if(typeof(value)!== 'number'){
//           console.log('Некорректный ввод!')
//         }else{
//           quantity >= value ? resolve("Ваш заказ готов!") : reject("К сожалению на складе не достаточно товаров!")
//         }}, DELAY)

//       })

//       return promise;

// }

// // Вызовы функции для проверки
// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder("lorem")
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!
// ===============================================================================
// ------------------------HOME WORK-------------------------
/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/
let startBtn = document.querySelector('.js-start')
let resetBtn = document.querySelector('.js-reset')
let lap = document.querySelector('.js-take-lap')
let watch = document.querySelector('.js-time')
let lapUl = document.querySelector('.js-laps')
let mas =[];
let liMas;
resetBtn.disabled = true;
// document.getElementById("myBtn").disabled = true;
// resetBtn

resetBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)

lap.addEventListener('click', save)
startBtn.addEventListener('click', startTimer)
let lopSet;
let timePause = 0;
let toggle = false;

function reset (){
  timePause = 0;
  resetBtn.disabled = true;
  // console.log(timePause)
  toggle = false;
  watch.textContent ='00:00.0';
  startBtn.textContent = 'Start';
  lopSet=0;
   
  liMas = Array.from(lapUl.querySelectorAll('li'))
  for(let el of liMas){
    el.remove() 
  }
}

function startTimer() {
  resetBtn.disabled = false;
  if (toggle === true){
  stop()
  startBtn.textContent = 'Continue'
  toggle = false
  } else {
    toggle = true
    startBtn.textContent = 'PAUSE'
    let startDate = Date.now() - timePause;
    console.log()
    getFormattedTime(startDate)
  }
}

let id = null;

function getFormattedTime(startDate) {

  if (id === null) {
    id = setInterval(() => {
      let mooveDate = Date.now();
      let change = mooveDate - startDate
      let timerdata = new Date(change);
      timePause = timerdata;
      let minutes = timerdata.getMinutes();
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      let second = timerdata.getSeconds()
      if (second < 10) {
        second = '0' + second;
      }
      let milisecond = parseInt((timerdata.getMilliseconds()) / 100)
      lopSet = (`${minutes}:${second}.${milisecond}`);
      watch.textContent = lopSet;
      return watch.textContent;
     }, 100);
  }

}

function save(){
  mas.push(timePause);
  console.log(mas);
  if(lopSet!==0){
  lapUl.insertAdjacentHTML('beforeend', `<li>${lopSet}</li>`);
 }
}
function stop() {
  /*btnStart.removeAttribute('disabled'); */
  clearInterval(id);
  id = null;
  // console.log(id)
}
/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/