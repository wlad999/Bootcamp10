'use strict'
let Kate ={
   name: 'Kate',
   surname: 'Hribkova',
   age: '24',
}
let Lora ={
   name: 'Lora',
   surname: 'Plushkina',
   age: '28',
}
let Richard ={
   name: 'Richard',
   surname: 'Robinson',
   age: '50',
}

let showGreet = function(){
   return `Dear ${this.name} ${this.surname}, your are ${this.age} years old`;
}
console.log(showGreet.call(Kate));
console.log(showGreet.call(Lora));
console.log(showGreet.call(Richard));