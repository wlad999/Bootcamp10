'use strict'
// //-----------------------modul 4-----------------
const user = {
  name: 'Frank',
  age: 21,
  male: true,
  getInfo: function () {
    return `name: ${this.name} age: ${this.age} male: ${this.mail}`
  },
};

console.log (user.name);
console.log (user['age']);
console.log (user['male']);

user.age =26;
user.height =180;

console.log('user', user);
console.log(user.getInfo());

delete user.male;
console.log(user.male);

for(const key in user) {
  console.log (`${key}: ${user[key]}`)
}

// ----------------------------------------------
const casino = {
  1: [1, 5, 20],
  2: [20, 100],
  };

  const userArr = Object.entries(user);
  console.log(userArr);
  console.log('-----------');
  for(const el of userArr) {
    console.log(`${el[0]}: ${el[1]}`);
   }
   console.log('-----------------')
