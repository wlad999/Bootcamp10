'use strict';
// console.log(document.getElementsByClassName('text'))
// let text1 = document.getElementsByClassName('text')
// let text = document.getElementById('textId')
// text.style.color = 'red';

// console.log(text.textContent = 'Ooops')
// console.log(text1)

// let find = document.querySelectorAll('.text');
// console.log(find)
// let list = document.querySelector('.list');
// console.log(list.firstElementChild.textContent='first');

// /*function fn(){
//     let newMass = Array.from(list.children);
//     console.log(newMass)
// }*/
// function fn(el){
// let newMass = [...el].map(el=>el.textContent)
// return newMass
// }
// console.log(fn(list.children))
// let copyMass=fn(list.children)

// const element = document.createElement('ul');
// // element.textContent='ulka'
// const body = document.body;
// body.prepend(element);
// let getli = copyMass.reduce((string, el)=>string + `<li>${el}<li>`,'');
// element.innerHTML=getli;


// let textInput = document.querySelector('.text');
// let Input = document.querySelector('.input');
// let btn = document.querySelector('.btn');

// console.log(btn)
// btn.onclick = function(){
//     textInput.textContent = Input.value;
//     textInput.style.color = 'red';
//     textInput.style.fontSize = '50px';

// }
// -===========================

// let forward = document.querySelector('.forward');
// let back = document.querySelector('.back');
// let images = document.querySelectorAll('img');
// let allImg = document.querySelector('.image');
// let imgAll = document.querySelectorAll('.image img');

// console.log(allImg.children)
// console.log(imgAll)
// console.log(images[2])

// let i=0

// forward.onclick=function(){
//     if(i>images.length-1){
//         i=0
//     }
//     images[i].style.display='none';
//     i++
//     setTimeout(()=>{
//     images[i].style.display='block'
//     },100)

// }
// back.onclick=function(){
//     if(i<0){
//         i=images.length-1
//     }
//     images[i].style.display='none';
//     i--
//     setTimeout(()=>{
//     images[i].style.display='block'
//     },100)

// }
// ----------------------------


// forward.onclick=function(){
//     images[i].className = '';
//     i++

//     if(i > images.length-1){
//         i = 0
//     }
//         images[i].className = 'showed'


//     }
//     back.onclick = function(){
//         images[i].className='';
//         i--
//         if(i < 0){
//             i = images.length-1
//         }
//         images[i].className='showed'

//     }
// ==============================================
// ---------------------TASK 01------------------
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// const list = document.querySelectorAll('.categories>li')
// console.log(list)
// list.forEach(item =>{
//       console.log(`Категория:${item.firstChild.textContent.trim()}, Количество вложенных li:${item.firstElementChild.children.length}`)
//     })
// =========================================
// --------------------TASK 02-----------------
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// let list = document.querySelector('.list')
// console.log(list)
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';
// let first =list.firstElementChild;
// first.style=('color: green; font-size: 50px ')
// let last =list.lastElementChild;
// last.setAttribute('style','color:red; font-size: 40px')

// ======================================
// --------------------TASK 03-----------------
 /*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');
// elements.forEach(x=>list.insertAdjacentHTML('beforeend', `<li>${x}</li>`))
// ------------------------------------------------------
// const markup = elements.reduce(
//       (string, item) => string + `<li>${item}</li>`,
//       ""
//     );
//     console.log(markup)
//     list.innerHTML=markup
// =============================================
// ------------------TASK 04--------------------------
/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];
  
//   let view = document.querySelector('.gallery');
//   galleryItems.forEach(el=>view.insertAdjacentHTML('beforeend', `<li><img src="${el.url}" alt="${el.alt}" style="width: 300px"></li>`))
  
// =======================================================
// ------------------TASK 05----------------
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
// let size=document.querySelectorAll('input')

// function collectInputData(inputs){
//     let arr =[]
//     inputs.forEach(el =>{ 
//         if(el.checked){
//             arr.push(el.value)
//         }
//     }       
//     )
//     console.log(arr)
// }
// collectInputData(size)
// --------------------------------------

/*C reducom не работает */
// let size=document.querySelectorAll('input')

// function collectInputData(inputs){
//    Array.from(inputs).reduce((acc,el) =>{
//     if(el.checked){
// acc.push(el)
//     }},[])}

// console.log(collectInputData(size))
// =====================================
// -------------------------TASK 06------------------
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// let movie = document.querySelector('.movie')
/* insertAdjacentHTML - НЕ РАБОТАЕТ-посто нужно испольховать insertAdjacentElement
function createMovieCard(){
   movie.insertAdjacentHTML=('beforeend', '<img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image"><div class="movie__body"><h2 class="movie__title">The Godfather</h2><p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.</p><p class="movie__date">Released: 1972-03-14</p><p class="movie__rating">Rating: 8.6</p></div>'
    )
};
*/
// --------------------------------------------------------
// function createMovieCard(){
//    movie.innerHTML= '<img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image"><div class="movie__body"><h2 class="movie__title">The Godfather</h2><p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.</p><p class="movie__date">Released: 1972-03-14</p><p class="movie__rating">Rating: 8.6</p></div>'
// };
// createMovieCard()
// ----------------------------------------------
// let movie = document.querySelector('.movie')

// function createMovieCard(){

// let image = document.createElement('img')
// image.setAttribute('src',"http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg") 
// // image.setAttribute('alt',"movie image") 
// image.classList.add('movie__image')
// image.alt=('movie image')
// console.log(image)

// let div =document.createElement('div')
// div.classList.add('movie__body')
// console.log(div)

// let h2 =document.createElement('h')
// h2.classList.add('movie__title')
// h2.textContent='The Godfather'
// console.log(h2)

// let p1 = document.createElement('p')
// p1.classList.add('movie__description')
// p1.textContent='Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.'
// console.log(p1)

// let p2 = document.createElement('p')
// p2.classList.add('movie__date')
// p2.textContent='Released: 1972-03-14'
// console.log(p2)
// let p3 = document.createElement('p')
// p3.classList.add('movie__rating')
// p3.textContent='Rating: 8.6'
// console.log(p3)

// div.append(h2, p1, p2, p3)



// movie.append(image,div)
// }

// createMovieCard()
/*
first.style=('color: green; font-size: 50px ')
last.setAttribute('style','color:red; font-size: 40px')
*/
// =============================
// -----------------------TASK 07-----------------------
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
// let root = document.querySelector('#root')
// console.log(root)

// function changeColor(){
//     let color = `rgb(${Math.round((Math.random())*255)},${Math.round((Math.random())*255)},${Math.round((Math.random())*255)})`
//     return color
// }


// function createBoxes(num){
// let height=30;
// let weight=30;
// for(let i=1; i <= num; i++){
//     let inDiv = document.createElement('div');
//     inDiv.style.height = height+'px';
//     inDiv.style.width = weight+'px';
//     height = height+10;
//     weight = weight+10;
//     inDiv.style.background = changeColor();
//         // root.append(inDiv);
    
//     root.insertAdjacentElement('beforeend', inDiv)
// }
// }

// createBoxes(+prompt('Ведите число'));

// ===================================


// --------------------------HOME WORK 07----------------------------------------
/*1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.*/
    const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/animals",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

  
// function createMovieCard(el){
// let movie = document.querySelector('.movie')

// let image = document.createElement('img')
// image.setAttribute('src',`${el.img}`) 
// image.setAttribute('alt',`${el.img}`) 
// image.classList.add('movie__image')
// image.alt=('movie image')
// console.log(image)

// let div =document.createElement('div')
// div.classList.add('movie__body')
// console.log(div)

// let h2 =document.createElement('h')
// h2.classList.add('movie__title')
// h2.textContent=el.title
// console.log(h2)

// let p1 = document.createElement('p')
// p1.classList.add('movie__description')
// p1.textContent = el.text;
// console.log(p1)

// let a1 = document.createElement('a')
// a1.classList.add('movie__date')
// a1.textContent=el.link
// a1.href='#'
// console.log(a1)


// div.append(h2, p1, a1)
// movie.append(image,div)
// }

// function createCard(arr){
//   for(let el of arr){
//     createMovieCard(el)
//   }
// }
// createCard(posts)
// ----------------------------------
// let view = document.querySelector('.movie')
// const markup = posts.reduce((acc, el)=>acc+`<li><img src="${el.img}" style="width: 300px"><div class="movie__body"><h2 class="movie__title">${el.title}</h2><p class="movie__description">${el.text}</p><a href ='${el.link}'>${el.link}</a></div></li>`,'')
// view.innerHTML = markup;
// /*view.append('markup'); не работает*/
// view.insertAdjacentHTML('beforeend', markup);
// -----------------------------------------
let view = document.querySelector('.movie')
posts.forEach(el=>view.insertAdjacentHTML('beforeend', `<img src="${el.img}" style="width: 300px"><h2 class="movie__title">${el.title}</h2><p class="movie__description">${el.text}</p><a href ='${el.link}'>${el.link}</a>`))
// ---------------------------------------------


