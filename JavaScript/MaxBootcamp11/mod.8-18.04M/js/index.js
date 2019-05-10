'use strict';
// function showClick(){
//   console.log('Ok')
// }

// let btn = document.querySelector('.btn');
// btn.addEventListener('click', showClick);
// console.log(btn)

// const About ={
//   name: 'Max',
//   showName(){
//     console.log(this.name)
//   }
// }
// const About12 ={
//   name: 'Rex',
//   }


// btn.addEventListener('click', About.showName.bind(About));
// --------------------------TASK 01----------------------------
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// let btn = document.querySelector('.button')
// btn.addEventListener('click',addNum)

// let num =0;
// function addNum(){
//   num++
//   btn.textContent = num;
// }
// ===========================================================
// -----------------------TASK 02-----------------
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые будут введены в инпуты и запишите их сумму в span.result.
*/
// let input = document.querySelectorAll('input')
// console.log(input)
// let inp0=input[0]
// let inp1=input[1]
// let btn = document.querySelector('button')
// console.log(btn)
// let num = document.querySelector('.result')
// function count(){
//   let res = +inp0.value+(+inp1.value);
// num.textContent=res

// }

// btn.addEventListener('click', count)
// =============================================
// ----------------------------TASK 03------------------------
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// class Counter{
//   constructor(onChange){
//     this.value=0;
//     this.onChange=onChange;
//   }
//   increment(){
//     this.onChange(this.value+=1)
//   }
//   decrement(){
//     this.onChange(this.value-=1)
//   }
// }

// let btnMinus=document.querySelector('button[data-action=sub]')
// let btnPlus=document.querySelector('button[data-action=add]')
// console.log(btnMinus)
// console.log(btnPlus)

// btnMinus.addEventListener('click', onChange)

// class Counter{
//     constructor(onChange){
//       this.value = 0;
//       this.onChange=onChange;

//     }
//     increment(){
//      this.value = this.value +1;
//      this.onChange(this.value)

//     }
//     decrement(){
//       this.value = this.value -1;
//      this.onChange(this.value)
//     }
//   }

//   function onChange(value){
//     console.log(value)
//     res.textContent=value;
//   }
//   let counter = new Counter();
//   console.log(counter.increment)

//   let btnMinus=document.querySelector('button[data-action=sub]')
//   // let btnPlus=document.querySelector('button[data-action=add]')
//   // console.log(value)
//   // console.log(btnMinus)
//   // console.log(btnPlus)
//   let res = document.querySelector('.value')

//   btnMinus.addEventListener('click', counter.decrement.bind(Counter))

// counter.increment();
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter)

// =============================================================
// ------------------------------------TASK 04------------------
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
// let res = document.querySelector('.result')
// let sub = document.querySelector('.btn')
// let imp = document.querySelectorAll('input')
// console.log(imp)

// sub.addEventListener('click', write);
// function write(event){
//   event.preventDefault()
//   imp.forEach(el=>el.checked?res.textContent=el.value:null)
// }
// ------------------------------------------
// function write(event){
//   let impChecked = document.querySelector('input:checked')
//   event.preventDefault()
//   res.textContent=impChecked.value
//  }
// ===========================================
// --------------------------TASK 05------------------------
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// let img = document.querySelector('.images')

// img.addEventListener('click', show)
// function show(event){
//   console.log(event.target.src)
// }
// =============================
// -------------------TASK 06---------------------
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// let list = document.querySelector('.list')
// list.addEventListener('click', rem)
// function rem(event){
//   event.target.parentNode.remove()
//   }
// ==============================================
// -----------------------------TASK 07--------------
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// let list = document.querySelector('input')
// let lis = document.querySelector('.input-list')
// // console.log(list);

// lis.addEventListener('focusout', change)


// function change(event) {
//   if (event.target.value.length == event.target.dataset.length) {
//     event.target.classList.add('valid')
//   } else {
//     event.target.classList.add('invalid')
//   }
//   console.log(typeof (event.target.value.length), event.target.value.length);
//   console.log(typeof (event.target.dataset.length), event.target.dataset.length);
// }

// =======================================================================
/*
<input type="input" value="Кликните сюда" onfocus="this.value='Получен фокус'">
*/
// ========================================================================
// -------------------TASK 08---------------------------------
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
// let mes = document.querySelector('.message')
// let imp =document.querySelector('.input')
// let impVal =document.querySelector('.input-value')
// imp.addEventListener('focus', write)
// function write(){
//   mes.textContent="Input is in focus!"
//   }
// imp.addEventListener('input', val)
// function val(){
//   impVal.textContent=imp.value}
// ==================================
// ------------TASK 09----------------
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// let btn = document.querySelector('.btn')
// let show = document.querySelector('.js-modal-backdrop')
// let xxx = document.querySelector('.close-btn')


// btn.addEventListener('click', delAte);

// function delAte() {
//   show.classList.remove('modal-hidden')
// }

// show.addEventListener('click', hide)

// function hide(event) {
//   if (event.target == show || event.target == xxx) {
//      show.classList.add('modal-hidden')
//   }
// }
// ====================================
// ---------------TASK 10----------------------
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
