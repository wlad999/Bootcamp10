'use strict'
/*  
// --------------3 модуль. 3е задание---------------

  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/
const findLongestWord = function(str) {
  let mass = str.split(' ')
  console.log(mass);
  let maxWord = '';    /*let maxWord = mass[0];*/
  for( let word of mass) {
    if ( word.length > maxWord.length) {
      maxWord = word 
        }
  }

  return maxWord;




};

// Вызовы функции для проверки
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
  findLongestWord("May the force be with you")
); // вернет 'force'




// ---------------Вариант Макса---------------
// function findLongestWord(str) {
//   let string = str.split(' ');
//   let longestWord = 0;
//   let word;
//   for (let i = 0; i < string.length; i++){
    
//     if (string[i].length > longestWord) {
//       longestWord = string[i].length;
//       word = string[i]
//     }
//   }
//   return word
// }


