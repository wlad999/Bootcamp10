'use strict';
// -----------------------TASK 01-------------------
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

// const start = document.querySelector('[data-action="start"]');
// const stop = document.querySelector('[data-action="stop"]');
// const body = document.querySelector('body');

// start.addEventListener('click', changeColor);
// stop.addEventListener('click', stopColor);
// let inter;


// function changeColor(){
//  inter = setInterval(()=>{
//     let rand = Math.floor(Math.random() * colors.length);
//     body.style.backgroundColor = colors[rand];
//     console.log(rand)
//   },1000);
//   start.disabled = true;
//   };
// function stopColor(){
//   clearInterval(inter);
//   start.disabled = false;
// }
// ======================================================================
// ------------TASK 02--------------
/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/
// function getFormattedTime(time) {
//   let date = new Date (time)
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   if(seconds < 10){
//    seconds = '0' + seconds;
//   }
//   let milisec = parseInt((date.getMilliseconds()) / 100);
  
//    return `${minutes} : ${seconds}. ${milisec}`;
//   }
//   console.log(getFormattedTime(Date.now()))
//   console.log(
//    getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//    getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//    getFormattedTime(1523621244239)
//   ); // 07:24.2
//  =========================================
// --------------------TASK 03------------
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

// let interval;
// let between = 0;

/*// function startTimer(){
//   let date= Date.now();
//   interval = setInterval(()=>{
//     let newDate =Date.now();
//     let TimeChengeMil = newDate-date;
//     let forCount =new Date (TimeChengeMil);
//     let minutes = forCount.getMinutes();
//     let seconds = forCount.getSeconds();
//     let milisec =parseInt((forCount.getMilliseconds())/100);
//     if(seconds < 10){
//    seconds = '0' + seconds;
//   }
//   let send = ( `минут: ${minutes} секунд:${seconds}. милисек:${milisec}`);
//   // console.log(minutes);
//   // console.log(seconds);
//   // console.log(milisec);
//   clockface.textContent=send;
  
//   }, 100)
   
// }
*/
// function startTimer(){
//   let date= Date.now() - between;
//   interval = setInterval(()=>{
//     let newDate =Date.now();
//     let TimeChengeMil = newDate-date;
//     let forCount =new Date (TimeChengeMil);
//     let minutes = forCount.getMinutes();
//     let seconds = forCount.getSeconds();
//     let milisec =parseInt((forCount.getMilliseconds())/100);
//     if(seconds < 10){
//    seconds = '0' + seconds;
//   }
//   let send = ( `минут: ${minutes} секунд:${seconds}. милисек:${milisec}`);
//   clockface.textContent=send;
//   between = TimeChengeMil;
//     }, 100)
   
// }
// function stopTimer (){
//   clearInterval(interval);
 
// };

// startBtn.addEventListener('click', startTimer);
// stopBtn.addEventListener('click', stopTimer);
// ============================================================
// ------------------TASK 04----------
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

const DELAY = 1000;
const quantity = 100;

function processOrder(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(isNaN(amount)) {
        reject('Некорректный ввод!');
      } else {
        quantity - amount > 0 ? resolve("Ваш заказ готов!") : resolve("К сожалению на складе не достаточно товаров!");
      }
    }, DELAY);
 });
}

// Вызовы функции для проверки
processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(500)
  .then(console.log) // К сожалению на складе недостаточно товаров!
  .catch(console.log);

processOrder("lorem")
  .then(console.log)
  .catch(console.log); // Некорректный ввод!