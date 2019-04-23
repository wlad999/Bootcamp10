'use strict'

//========== Самые верхние элементы дерева доступны напрямую из document

// Это свойство ссылается на DOM-объект для тега html
// console.log("document.documentElement: ", document.documentElement); 
// Cоответствует тегу body
// console.log("document.body: ", document.body);
// // Соответствует тегу head
// console.log("document.head: ", document.head); 


// //=========== Работаем с body
// const body = document.body;
// // выберет всех детей body включая текстовые узлы
// console.log("body.childNodes: ", body.childNodes);
// // выберет всех детей body которые являются элементами
// console.log("body.children: ", body.children); 

// // выберет первого ребенка родителя, включая тектовые узлы
// console.log("body.firstChild: ", body.firstChild); 
// // выберет первого ребенка родителя который является элементом, это и будет ul
// console.log("body.firstElementChild: ", body.firstElementChild); 

// //=============== Работаем со списком
// const list = body.firstElementChild;
// console.log("list.parentNode: ", list.parentNode);
// console.log("list.childNodes: ", list.childNodes);
// console.log("list.children: ", list.children);

// //================== Выберем второй li внутри ul
// const secondItem = list.children[1];
// console.log("secondItem: ", secondItem);

// // Родитель
// console.log("secondItem.parent:", secondItem.parent);

// // Дети
// console.log("secondItem.childNodes: ", secondItem.childNodes);
// console.log("secondItem.children:", secondItem.children);

// // Первые ребенок
// console.log("secondItem.firstChild:", secondItem.firstChild);
// console.log("secondItem.firstElementChild:", secondItem.firstElementChild);

// // Последний ребенок
// console.log("secondItem.lastChild:", secondItem.lastChild);
// console.log("secondItem.lastElementChild:", secondItem.lastElementChild);

// // Сосед слева
// console.log("secondItem.previousSibling: ", secondItem.previousSibling);
// console.log(
//   "secondItem.previousElementSibling: ",
//   secondItem.previousElementSibling
// );

// // Сосед справа
// console.log("secondItem.nextSibling: ", secondItem.nextSibling);
// console.log("secondItem.nextElementSibling: ", secondItem.nextElementSibling);
// ====================================
// -----------------TASK 01----------
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
// const ul0 = document.querySelector('.categories');
// console.log(ul0)
// const ttt = ul0.firstElementChild;
// console.log(ul0)
// console.log(ul0.parentNode)
// console.log(ul0.childNodes)
// console.log(ul0.children[1].children)

// const all = document.querySelector('.list');

// console.log(all)
// console.log(all.style.color ='blue')
// console.log(all.classList)
// console.log(all.attributes)
// console.log(all.getAttribute('class'))
// all.setAttribute('style', 'color: red');


// const btn = document.createElement("button");
// console.log(btn);
// all.appendChild(btn)
// btn.setAttribute('style', 'height: 30px; width: 100px; color: red; background-color: green');
// btn.textContent= 'button';
/*// btn.style.height='20px';
// btn.style.width='100px';
если добавляешь по очереди свойства перезаписывают друг друга*/
// all.insertBefore(btn, nextSibling)

// let ins = all.querySelector('.one')
// all.insertBefore(btn, ins);


// console.log(ul0.children[1].parentElement)
// console.log(Array.from(ul0.children));

// const secondItem = ul0.children[1];
// console.log(secondItem)


// ttt.forEach((items) => { console.log(`Категория:${items.firstChild.textContent}, Количество вложенных li:${items.children}`)});


// const ul1 = ul0.firstElementChild
// console.log(ul1)
// const ul1 = ul0.querySelector('li')
// console.log(ul1)
// const ul2 = ul1.nextElementSibling
// console.log(ul2)

// const ul3 = ul0.lastElementChild
// console.log(ul3.textContent)

// const items = document.querySelectorAll('.categories > li');
// console.log(items);
// const items = document.querySelector('.categories');
// console.log(items.querySelectorAll('.stop'));
// console.log(document.querySelectorAll('.stop'));  

// items.forEach(item => console.log((item.firstChild.textContent)));
// /*// items.forEach(item => console.log(`Categories: ${item.firstChild.textContent} Length: ${item.childNodes[1].childElementCount}`));*/
// // console.log(items);
// items.forEach(item => console.log(`Categories: ${item.firstChild.textContent} Length: ${item.children[0].children.length}`));


// // -------------------------TASK 01------------------------
// const list = document.querySelectorAll('.categories > li')
// console.log(list)
// list.forEach(item =>{
//   console.log(`Категория:${item.firstChild.textContent.trim()}, Количество вложенных li:${item.firstElementChild.children.length}`)
// })
// ===============================================================
/*----------------TASK 02----------------------------
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const list = document.querySelector('.list')
// console.log(list)
// let node = list.lastElementChild;

// node.setAttribute('style','color: blue; font-size: 50px');
// node.style =('color: blue; font-size: 50px')
// ==============================================
// ------------------------------TASK 03----------
/*
  Дан ul с классом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// let list = document.querySelector('.list')
/*плохой вариант 5 раз обращамся к дом дереву
// let cycle = elements.forEach(el=>list.innerHTML+=`<li>${el}</li>`);*/


// ------------правильный вариант-обрщаемся к дом 1раз
// const markup = elements.reduce(
//   (string, item) => string + `<li>${item}</li>`,
//   ""
// );
// console.log(markup)
// list.innerHTML=markup
// =================================================
// -------------------------TASK 04----------
/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Two Brown Hen and One Red Rooster"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Macaw Birds"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "2 Lion on Grass Field during Daytime"
//   }
// ];
// let list = document.querySelector('.gallery')
/*
создал <img> чтобы посмотреть как правильно писать свойства и втсавить их ниже в цикл
let image = document.querySelector('img')
// image.style=('width: 300px');*/
// const markup = galleryItems.reduce(
//     (string, item) => string + `<li><img src=${item.url} alt=${item.alt} style="width: 300px" class="size"></li>`,
//     ""
//   );
  
  
//   console.log(markup)
//   list.innerHTML=markup

 /* можно задать класс и перебором потом добавлять любіе атрибуты
 let trychange = document.querySelectorAll(".size")
  console.log(trychange)
  let classs = trychange.forEach(el => el.style.height = '300px');
  console.log(classs)*/
  // ===========================================

// ------------TASK 05-----------
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
// const list = document.querySelectorAll('input:checked')
// console.log(list);
// function collectInputData(inputs){
//  return Array.from(inputs).map(el=>el.value)}
// ;
// console.log(collectInputData(list));
// ====================================
// -----------------TASK 06--------------
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// function createMovieCard(){

// let movie = document.querySelector('.movie');
// let elem = document.createElement('img');
// elem.classList.add('movie__image');
// elem.src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg";
// elem.alt="movie image";
// console.log(elem);


// let textContainer = document.createElement('div');
// textContainer.classList.add("movie__body");
// console.log(textContainer);

// let h2 = document.createElement('h2');
// h2.classList.add("movie__title");
// h2.textContent = 'The Godfather';
// console.log(h2);

// let p = document.createElement('p');
// p.classList.add("movie__description");
// p.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
// console.log(p);

// let p1 = document.createElement('p');
// p1.classList.add("movie__date");
// p1.textContent='Released: 1972-03-14';
// console.log(p1);

// let p2 = document.createElement('p');
// p2.classList.add('"movie__rating"');
// p2.textContent = 'Rating: 8.6';
// console.log(p2);



// textContainer.append(h2, p, p1, p2);
// console.log(textContainer);

// movie.append(elem, textContainer);

// }
// createMovieCard();
// ===================================
// -------------TASK 07------------
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
// function randomColor(){
//   return (`rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`);
//   }
// console.log(randomColor());

// let num =+prompt('Enter a nomber');

// function createBoxes(num){
//   let root = document.querySelector('#root');
//   let i = 1;
//   let width = 30;
//   let height = 30;
//   do{
//     let divColor = document.createElement('div');
//     divColor.style.width = width +'px';
//     divColor.style.height = height +'px';
//     divColor.style.backgroundColor = randomColor();
//     width = width+10;
//     height = height+10;
//     i=i+1;
//     root.append(divColor)


//   } while (i<=num)

// } 
// createBoxes(num)
// ==========================================


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

function createMovieCard(el){

  let movie = document.querySelector('.movie');
  let elem = document.createElement('img');
  elem.classList.add('movie__image');
  elem.src=el.img;
  elem.alt="movie image";
  console.log(elem);
  
  
  let textContainer = document.createElement('div');
  textContainer.classList.add("movie__body");
  console.log(textContainer);
  
  let h2 = document.createElement('h2');
  h2.classList.add("movie__title");
  h2.textContent = el.title;
  console.log(h2);
  
  let p = document.createElement('p');
  p.classList.add("movie__description");
  p.textContent = el.text;
  console.log(p);
  
  let p1 = document.createElement('p');
  p1.classList.add("movie__date");
  p1.textContent=el.link;
  console.log(p1);
  
  let p2 = document.createElement('p');
  p2.classList.add('"movie__rating"');
  p2.textContent = 'Rating: 8.6';
  console.log(p2);
  
  
  
  textContainer.append(elem, h2, p, p1);
  movie.append(textContainer);
  return textContainer;
  
  }
  createMovieCard();
// --------------------------------------------
  // function createCards(posts){
  //   posts.forEach(el => {
  //     createMovieCard(el)
  //   });
  // };
  // -----------------------------------------------
  // function createCards(posts){
  //   posts.reduce((string, el) => {
  //     string + `${createMovieCard(el)}`, '';
  //     return string;
  //     });
  // };
  //   createCards(posts)
  // movie.append(createCards);
// -------------------------------------------------------
  // const markup = elements.reduce(
    //   (string, item) => string + `<li>${item}</li>`,
    //   ""
    // );
    // console.log(markup)
    // list.innerHTML=markup
// -----------------------------------------------------------------------------------
    // const markup = posts.reduce((acc, post)=> acc + `<img src = '${post.img}'><h2>${post.title}</h2><p>${post.text}</p><a href ='${post.link}'>${post.link}</a>`, '');
    //  console.log(markup);
    //  let movie = document.querySelector('.movie');
    //  movie.innerHTML=markup;
// ------------------------------------------------------------ 
    