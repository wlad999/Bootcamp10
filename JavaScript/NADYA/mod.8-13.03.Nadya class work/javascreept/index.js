'use strict';

/*/Задача №1
//Алерт по нажатию на кнопку.
//При нажатии на кнопку "Нажми на меня"
//выводиться сообщение 'Привет!*/

// const funAlert = () => alert('CLICK!');
// const but = document.querySelector('button');
// but.addEventListener('click', funAlert);
// ==========================================================

/* //Задача №2
//Изменение текста в инпуте.
//По нажатию на кнопку - изменяеться текст в импуте
/ */

// const but = document.querySelector('button');
// let funBut = () => input.value = 'Hello world';
// but.addEventListener('click', funBut);
// =============================================
// /Задача №3
//Изменение текста в инпуте.
//По нажатию на кнопку -  она выводит алертом содержимое инпута
// const but = document.querySelector('button');
// let inp = document.querySelector('input');
// let funInp = () => alert(input.value);
// but.addEventListener('click', funInp);
// ==============================================
// /Задача №4
//Изменение текста в инпуте.
//По нажатию на кнопку -  она выводит алертом содержимое инпута, возведенное в квадрат
// const but = document.querySelector('button');
// const inp = document.querySelector('input');
// let funText = () => alert(inp.value*inp.value);
// but.addEventListener('click', funText);

// ------------------------VASYA------------------
// const x = document.querySelector('button');
// const y = document.querySelector('input');
// const k = () => alert(Math.pow(y.value,2));
// x.addEventListener('click', k);
// ================================================
// /Задача №5
// Задача. Кнопка осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов:
// ---------------------------------------------------
// const but = document.querySelector('button');
// // let a = document.querySelector('#input1');

// let inp1 = document.querySelector('#input1');
// let inp2 = document.querySelector('#input2');
// let funChange = () => {
// let a = inp1.value;
// input1.value = inp2.value;
// inp2.value=a};
// but.addEventListener('click', funChange);
// -----------------------------------------

// const but = document.querySelector('button');
// let funChange = () => {
// let a = input1.value;
// input1.value = input2.value;
// input2.value=a};
// but.addEventListener('click', funChange);
// ========================================
//Задача №6
// // Задача. При нажатии на кнопку - поменяется ее текст:
// <input type="button"  value="Нажми на меня">







// const x = document.querySelector('input');
// let k = 'new text';
// const z = () => x.value = k;
// x.addEventListener('click', z);

// 1я задача-с реагированием на кнопку-----------------
// const but = document.querySelector('button');
// const funAlert = () => setTimeout(()=> alert('CLICK!'), 5000);
// but.addEventListener('click', funAlert);

//===================================
// let day;
// let hours;
// let min;
// let seck;
// let inside;



// let runTime = () => {
//     let date = Date.now();
//     // let date = Number(fdate);
//     let dateSet = new Date(2019, 2, 18);
//     // console.log(`${dateSet.getTime()}`);
//     let count1 = dateSet - date;
//     // console.log(count1);
//     let day = (count1 / 86400000);
//     let realDay = (Math.floor(count1 / 86400000));
//     // console.log(`Days: ${realDay}`);
//     let hours = ((day - realDay) * 24);
//     let realhours = (Math.floor(hours));
//     // console.log(`Hours: ${realhours}`);
//     let min = ((hours - realhours)) * 60;
//     let realMin = (Math.floor(min));
//     // console.log(`Min: ${realMin}`);
//     let seck = (Math.round((min - realMin) * 60));
//     // console.log(`Seck: ${seck}`);
//     const inside = (`Days:${realDay}` + ` Hours:${realhours}` + ` Min:${realMin}` + ` Seck:${seck}`);
//     console.log(inside);
//     // return inside;
//     const clock = document.querySelector('.time');
//     clock.innerHTML = inside;

// };
// setInterval(runTime, 1000);

// ===========Kate task=========================
// function time(millisec) {
//     var seconds = (millisec / 1000).toFixed(0);
//     var minutes = Math.floor(seconds / 60);
//     seconds = Math.floor(seconds % 60);
//     return 'До обеда осталось '  + minutes + " минут " + seconds + ' секунд';
//    }
//    let date = new Date();
//    let dateFuture = new Date(2019, 2, 14, 14, 0, 0, 0);
//    let x =  dateFuture - date ;
   
//    let p = document.querySelector('p')
//    p.textContent = time(x)
//  =================================================
// ---------------TASK 01----------------
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
// */
// let buttonCounter = document.querySelector('.button');
// buttonCounter.addEventListener('click', buttonClick);
// function buttonClick () {
// buttonCounter.textContent = Number(buttonCounter.textContent)+1;
// }
// ===================================
// ---------------TASK 02--------------
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые будут введены в инпуты и запишите их сумму в span.result.
  !!!!Делать через querySelectorAll  а потом по массиву пройтись reduce и сложить
*/
// const typeOne = document.querySelector('.inputOne');
// const typeTwo = document.querySelector('.inputTwo');
// const typeResult = document.querySelector('.result');
// const typeAdd = document.querySelector('button');
// function sum (){
//   typeResult.textContent = (+typeOne.value) + (+typeTwo.value);
//   }
// typeAdd.addEventListener('click',sum);
// =============================================
// ----------------TASK 03--------------------
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/
// class Counter {
//     constructor(onChange) {
//       this.value = 0;
//       this.onChange = onChange;
//     }
    
//     get increment(){
//       this.onChange(this.value += 1);
//     }
    
//     get decrement(){
//       this.onChange(this.value -= 1);
//     }
//   }
  
//   const value = document.querySelector('.value');
  
//   const counter = new Counter((res) => value.innerHTML = res);
  
//   const onClickHandler = ({target}) => target.dataset.action === 'add'? counter.increment : counter.decrement;
  
//   document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', onClickHandler));
// =====================ВАРИАНТ С БАЙНДОМ - ВОВЫ =======================================================
// class Counter {
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//   }

//   increment() {
//     this.value += 1;
//     this.onChange(this.value);
//   }
//   decrement() {
//     this.value -= 1;
//     this.onChange(this.value);
//   }

// }

// let plus = document.querySelector('button[data-action="add"]');
// let minus = document.querySelector('button[data-action="sub"]');
// let valueSpan = document.querySelector('.value');

// function changeValue(value) {
//   valueSpan.textContent = value;
// }

// const counter = new Counter(changeValue);

// console.log(counter.onChange);

// plus.addEventListener('click', counter.increment);
// minus.addEventListener('click', counter.decrement);
// ============================================
// ----------------TASK 04--------------------
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
// */
// const form = document.querySelector('.question-form');
// const chkd = document.querySelectorAll('input');
// const result = document.querySelector('.result');

// form.addEventListener('submit', show );

// function show(e) {
//   e.preventDefault();
//   Array.from(chkd).find(i => i.checked === true ? result.innerHTML = ` Result:${i.parentElement.textContent};` : null);}
// -====================================
// -----------------TASK 05-------------------------
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// const images = document.querySelector ('.images')
// function srcAlert (event){
//     const target = event.target;
//     alert(target.src)
// }
// images.addEventListener('click', srcAlert);
// ---------------------RODIK--без проверки------------
// const images = document.querySelector('.images');
// images.addEventListener('click', ({target})=> alert(target.src));
// --------------RODIK с провепкой----------------------
// const images = document.querySelector('.images');
// images.addEventListener('click', ({target})=> target.nodeName === "IMG"? alert(target.src):null);
// ======================================================
// ----------------------TASK 06-----------------------------
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// const list = document.querySelector('.list');

// function delateUl (event){
//     event.preventDefault();
//     const target = event.target;
//     if(target.nodeName !== 'BUTTON')return;
//     target.parentNode.remove();
// }
// list.addEventListener('click', delateUl)

// ====================================================
// ------------TASK 07---------------------
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// const inputList = document.querySelector('.input-list');
// const inputs = document.querySelectorAll('input');
// let inputType =() => {
//   inputs.forEach(el => {
//   if(el.value.length > 0){
//     if(Number(el.dataset.length) === el.value.length){
//       el.classList.add('valid');
//     } else el.classList.add('invalid');
//   }
//   })
// };
// inputList.addEventListener('focusout', inputType);
// 
// ===================================================
// ----------------TASK 08-------------------
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// const mess = document.querySelector('.message');
// const input = document.querySelector('.input');
// const text = document.querySelector('.input-value');
// input.addEventListener('focus', render);
// function render (){ 
//   mess.textContent="Input is in focus";
// }
// function textInput(){
//   text.textContent += input.value;
// };
// input.addEventListener('input', textInput);
// =======================================
// --------------TASK 09----------------------
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// let openModal = document.querySelector('.btn');
// let modal = document.querySelector('.js-modal-backdrop');
// let modalHiden = document.querySelector('.modal-hidden');
// let clouse = document.querySelector('[data-action="close-modal"]');

// openModal.addEventListener('click', open);
// function open (){
//   modal.classList.remove('modal-hidden');
// }
// modal.addEventListener('click', clous);
// function clous (event){
// if(event.target === clouse || event.target === modal){
//   modal.classList.add("modal-hidden")
// }
// }
// ============================================
// ---------TASK 10-есть в теории---------------
// ======================
// ------------------HOME----------------------
/*⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/
const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];


new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery'),
  defaultActiveItem: 1
});
/* Далее плагин работает в автономном режиме */
class Gallery {
  constructor(items, parentNode, defaultActiveItem){
    this.items = items.map(item=>item['preview']);
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveIte;

  }
}