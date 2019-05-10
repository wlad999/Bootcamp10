'use strict';

const about = [
  {
  img:'https://images-na.ssl-images-amazon.com/images/I/41EjaGavTWL.jpg',
  name: 'Bnod',
  about: 'Agent',
  work: 'Killer',
  done:true
},
{
  img:'https://sh-s7-live-s.legocdn.com/is/image/LEGO/853652',
  name: 'Batmen',
  about: 'mouse',
  work: 'flyer',
  done:true
},
{
  img:'https://lc-imageresizer-live-s.legocdn.com/resize/?width=1600&imageUrl=https%3A%2F%2Fwww.lego.com%2Fr%2Fwww%2Fr%2Fportals%2F-%2Fmedia%2Fcampaigns%2Fkids%2Fninjago%2Flegacy%2Fninjas%2Fjay01-min.png%3Fl.r%3D-1914987362',
  name: 'Ninja',
  about: 'Agent',
  work: 'fighter',
  done:false
},

]
const box = document.querySelector('#box').innerHTML.trim()
const list = document.querySelector('.list')
const comp = Handlebars.compile(box)
/* compile стал функцией*/
const result = comp(about)

// about.forEach(el=>list.insertAdjacentHTML('afterbegin', comp(el)))
console.log(result)

list.insertAdjacentHTML('afterbegin',result)/*#each - хелпер помогает переберать */