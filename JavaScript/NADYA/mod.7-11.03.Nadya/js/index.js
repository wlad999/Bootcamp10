'use strict'
let title = document.createElement('h2');

title.classList.add('red-text');
title.textContent = 'Hello';
title.style.textAlign = 'center';
let div = document.querySelector('.first');
div.append(title);
div.innerHTML +='<ul class="myList"><li><p>Очень</p></li><li><p>Странно</p></li></ul>';
let myList = document.querySelector('.myList');
myList.style.listStyle = 'none';
myList.style.color = 'blue';

div.insertAdjacentHTML('afterend', '<p class="green">Lorem ipsum dolor sit amet consectetur!</p>');
// let text = document.lastElementChild;
// text.classList.add('green');
let textGreen = document.querySelector('.green');
textGreen.style.color = 'green';

let image = document.createElement('img');
image.src='https://ichef.bbci.co.uk/news/ws/660/amz/worldservice/live/assets/images/2016/02/16/160216102956_dolphin_smiling_624x351_thinkstock_nocredit.jpg';
div.append(image);
image.classList.add('img-style');
image.style.display ='block';
image.style.margin ='auto';
image.style.backgroundColor ='aqua';
image.style.padding = '20px';
