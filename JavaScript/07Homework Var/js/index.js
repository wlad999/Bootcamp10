'use strict'



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
// ----------------------1 Var----------------------

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
  
  
  textContainer.append(elem, h2, p, p1);
  /*movie.append - для первого варианта */
  //  movie.append(textContainer);
  }
  
  // function createCards(posts){
  //   posts.forEach(el => {
  //     createMovieCard(el)
  //   });
  // };
  // createCards(posts);
  // ========================================
  // ---------------------------2 VAR-------------------
  
     const markup = posts.reduce((acc, post)=> acc + `<img src = '${post.img}'><h2>${post.title}</h2><p>${post.text}</p><a href ='${post.link}'>${post.link}</a>`, '');
     let movie = document.querySelector('.movie');
     movie.innerHTML=markup;
    // movie.insertAdjacentHTML('beforeend', markup);
    /*
    Этот вариант вставляет просто стороку!!!!
    movie.append(markup);*/
     
    //  -=====================================
    // ---------------3 VAR---------
    // function createCards(array){
    //     for(let item of array){
    //       createPostCard(item)
    //     }
    //   }
    //   function createPostCard(post){
    //     let card = document.querySelector('.movie');
    //     card.innerHTML += `<img src = '${post.img}'><h2>${post.title}</h2><p>${post.text}</p><a href ='${post.link}'>${post.link}</a>` 
    //   }
      
    //   createCards(posts)