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