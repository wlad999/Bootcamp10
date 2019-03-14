'use strict';

//  let number = 5;
//  console.log(number);


//  let name ='mango';
//  console.log(name);


// let apples =null;
// const num =5;
// const type = typeof true;
// console.log( type);
// const userName = 'Mango';


// alert('Hello ' + userName);


// const userAge = prompt('enter your age!', 18);



// console.log ( userAge);
// console.log(typeof userAge);


// const going = confirm ('do you want?');
// console.log(typeof going);

// const x = 10;
// const y = 5;
// let resolt = x + y;
// console.log(resolt);

// const x = 5 + 2 * 10;
// console.log(x);
// const resolt = 5 === '5';
// console.log (resolt);

// console.log( 7 < 3); 

// const str = Number('5arg');

// console.log(typeof str);

// const age =  Number(prompt ('get age', ''));
// console.log(age);
// console.log(Number.isNaN(age) );
// console.log( typeof age === 'number');
// // console.log(1 == true)

// const margin ='15.4px';
// console.log( Number.parseFloat(margin));
// console.log(Number.parseInt(age))


// -----сложение дробніх чисед
// console.log(0.17+0.24);
// const a = 0.17;
// const b = 0.25;
// const value =(a*100 +b*100)/100;
// console.log(value);


// console.log (Number(parseInt(Math.random()*10)));

// console.log(
//     Math.pow(2,4)
//     );


// const name ='Mango';
// console.log (name);

// ------Экранирование-----
// const type ='i\'m happy';
// console.log(type);



//----Конкатенация строк 12.1

// const name ='mango ';
// const mood ='happy';
// const message = name + 'is ' + mood;
// console.log(message);  
// console.log(5 +'2'+5);
// 

// ----------------Строка---------------
// const message = 'Welcom to our resort';
// console.log(message.toLowerCase());
// console.log(message);
// const up = message.toUpperCase();
// console.log(up);


// const mess = 'Welcom to hell!';
// console.log(mess.includes('uboiubo')); /*включает или нет mess слово(true-false) */
// console.log(mess.indexOf('e'));/*выводитт индекс указаного символа-первого найденного, далее не считает */



// -----------------интерполяция---------------

// const name = 'Mango';
// const age = 2;
// const mood = 'happy';
// const message = `${name} is a dog`;
// console.log(message);

//-------------------------------------------------

//------------------TASK01---------------------

/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/
// let guest;
// let name;
// name = "Mango";
// guest = name;
// console.log(guest);

//-------------------------------------------------------------------

//---------------------TASK02----------------------------
/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

// const day = 2;
// const month = 10;
// const year = 2017;

// const date = "//"+'0' + day + '/' + month + '/' + year;

// console.log(date); // 02\10\2017

// // const date = day + "\\" + month + "\\" + year;
// ----------------------------------------------

//----------------------------TASK 03-------------------------
/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/
// let name = prompt('what your name?');
// alert("your name: ", name);
// // -------------------------------------------------------------------

// ----------------------------TASK 04-------------------------------
/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}.`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.
// --------------------------------------------------------------------------

// ---------------------------------------TASK 05-----------------
/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// let totalWidth;
// totalWidth = Number.parseInt(contentWidth) + Number.parseInt(border) + Number.parseInt(padding)+'px';


// console.log(totalWidth); // '125px'

// ---------------------------------------------------------------------------------

// ------------------------------TASK 06--------------------
/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/
// let year = Number(prompt('Какой сейчас год?'));
// if( year === 2019) {
//   alert('Всё верно!')
// }
// else {
//   alert('Но ведь на доре 2019!')
// };

// -------------------------------------------------------
// let a = "oih 9h 9h 98h098b08b"
// // console.log (a.length);
// // console.log ("oih9h9h98h098b08b".length);
// // console.log (a.indexOf('9'));
// // console.log (a.indexOf('rr'));
// console.log (a.includes('h'));


// let isActive = false;
// alert( isActive ); // "false"


// console.log(String(false) === 'false');



// const bool = Boolean(false);
// console.log(bool);


// const num =25;
// const isInRange = num >= 10 && num <= 30;
// console.log(isInRange);

// console.log( true && true );

// const num =45;
// const isInRange = num <= 10 || num >= 30;
// console.log(isInRange);

// console.log( true && true );
// const val =!true;
// console.log(val);
// const num = Number(
//   prompt('enter a number!'));
//   const isValidNumber =   Number.isNaN(num); 
//   console.log(isValidNumber);


// ------IF / ELSE-------
// проверяем - введённое число больше 10 и меньше 30ти.

// const num =Number(prompt('введите число от 10 до 30'));
// if( num >=10 && num<=30 ) {
//   console.log('Отлично число подходит');
// } else {
//   console.log('Число не подходит!');
// }

//  Вариант когда имы вводим переменную для большей читабельности кода

// const num = Number(prompt('введите число до 10'));
// const check = ( num >=10 && num<=30);
// if( check ) {
//   console.log('Отлично число подходит');
// } else {
//   console.log('Число не подходит!'); 
// }

// продаём кофе в разных стаканах

// const SIZE_SMALL = 0;
// const SIZE_MEDIUM = 1;
// const SIZE_LARGE = 2;

// const input = Number(
//   prompt('0 - small, 1 - medium, 2 - large', 1)
// );
// if(input === SIZE_SMALL) {
//   console.log('готовим маленький кофе');
// } else if(input === SIZE_MEDIUM) {
//   console.log('готовим средний кофе');
// } else if(input === SIZE_LARGE) {
//   console.log('готовим большой кофе');
// } else {  
//   console.log('такого кофе нет');
// } 


// попросить у пользователя число
// если оно болье 10ти записать в переменную
// message строку 'ура, больше 10!'
// в противном случае, всё плохо!
// const input = Number(
//   prompt('введите число больше 10')
//   )
//   let message;
//   if (input > 10) { 
//     message = 'ура, больше 10!'
//   } else {
//     message = 'всё плохо' 
//   }
// alert(message);

// --------------ТЕРНАРНЫЙ ОПЕРАТОР -более короткий вид записи того что выше

// const input = Number(
//   prompt('введите число больше 10')
//   )
//   let message = input > 10 ? 'ура, больше 10!': 'всё плохо!';
//   alert(message);
// --------------------------------------------------

// -----------------------SWITCH------------------

// продаём кофе в разных стаканах

// const SIZE_SMALL = 0;
// const SIZE_MEDIUM = 1;
// const SIZE_LARGE = 2;

// const coffeeSize = Number(
//   prompt('0 - small, 1 - medium, 2 - large', 1)
// );

// switch (coffeeSize) {
//   case SIZE_SMALL:
//   console.log('готовим маленький кофе');
//   break;
//   case SIZE_MEDIUM:
//   console.log('готовим средний кофе');
//   break;
//   case SIZE_LARGE:
//   console.log('готовим большой кофе');
//   break;
//   default:
//   console.log('такого кофе нет');
// };

/*
Написать скрипт кофейного магазина.

Пользователь вводит  выбор размера кофе.
ЕСли есть - сказать сколько стоит и попросить денег.
Проверить что пользователь дал достаточно денег.
Если не достаточно - сказать что не достаточно.
 */
// const SIZE_SMALL = 0;
// const SIZE_MEDIUM = 1;
// const SIZE_LARGE = 2;

// const PRICE_SMALL = 50;
// const PRICE_MEDIUM = 100;
// const PRICE_LARGE = 150;

// const userInpout = prompt('0 - small, 1 - medium, 2 - large', 1);
// const coffeeSize =Number(userInpout);
// const isValidimput = userInpout !== null && !Number.isNaN(coffeeSize);

// // /*console.log('isValidimput:', isValidimput); - проверка на работает isValidinput или нет

// if(isValidimput){

// let haveCoffee;
// let Size;
// let Prise;

// switch(coffeeSize){
//   case SIZE_SMALL:
//     console.log("маленький кофе");
//     haveCoffee = true;
//     Size = 'small';
//     Prise = PRICE_SMALL;
//     break;

//   case SIZE_MEDIUM:
//     console.log("средний кофе");
//     haveCoffee = true;
//     Size = 'medium';
//     Prise = PRICE_MEDIUM;
//     break;

//   case SIZE_LARGE:
//     console.log("большой кофе");
//     haveCoffee = true;
//     Size = 'large';
//     Prise = PRICE_LARGE;
//     break;
//     default:
//     console.log('Такого кофе нет!')
//     haveCoffee = false;

//  }
//  if (haveCoffee) {
//    const userCash = Number(
//      prompt(`Заказан ${Size}, с тебя ${Prise}`)
//    );
//    if(userCash >= Prise) {
//      alert (`Вот ваш ${Size} кофе!`)
//    } else {
//      alert ('А денег то не хватило!')
//    }
//  }
// } else {
//   alert('Невалидный ввод!');
// }



// ---------------------TASK 07---------------------------

// НЕ могу ввести if( num === NaN )alert('Введите произвольное целое число') 

/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/

//  const num =Number(prompt('Введите произвольное целое число'));
// console.log(num);
// if(num === 0) {
//   alert('Приходите ещё')
// }
// else if(num > 0 && num !== NaN ) {
//   alert('Спасибо')
// }
// else{
//   alert('Введите произвольное целое число')
// };
// ------------------------------------------------------------
// ----------------------------TASK 08-------------------------

/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

// const num = Number.parseInt(Math.random() * 100);

// let type;
// if(num%2 ===0) {
//   type = "even"
// }
// else if (num%2 !==0) {
//   type ="odd" 
// }

// console.log(`${num} is ${type}`);


// ----------------------TASK 09----------------------
/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

// let hours = 7;
// let minutes = 3;
// let seconds = 42;


// console.log(typeof(hours))
// if(hours <10) {
//  hours = `0${hours}`
// };
// if (minutes < 10) {
//   minutes = `0${minutes}`
// }
// if (seconds < 10) {
//   seconds = `0${seconds}`
// }
// const time = `${hours}:${minutes}:${seconds}`;

// console.log('Time is: ', time);

// -----------------------------------------------------------------------------
// -----------------------------TASK10--------------------------------
/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
/*
const num = Number(prompt('Введите номер отеля от 1го до 5ти'));
if (num === 0) {
  alert('очень жаль, приходите еще!')
} 

// else if(num !== 0 && num >5 || num < 1) {
//   alert('Неверный ввод, возможные варианты 1-5!')
// }


else if (num >0 && num <=5 && num !==NaN) {
  
  switch (num){
    case 1:
    alert("Каталог хостелов");
    break;

    case 2:
    alert("Каталог бюджетных отелей");
    break;

    case 3:
    alert("Каталог отелей ***");
    break;

    case 4:
    alert("Каталог отелей ****");
    break;

    case 5:
    alert("Каталог лучших отелей");
    break;
    // default: alert('Неверный ввод, возможные варианты 1-5!') проверить - не выходит
    } 
   
    
} else if(num !== 0 ) {
  alert('Неверный ввод, возможные варианты 1-5!')
}
// ----------------------------------------------------------------------

// Работа в классе по первому модулю.

// const inputName = prompt('How you are?');
// let inputNameLower;
// const father ='Igor';
// const mother ='Ira';
// const child ='Nikolay';

// if (inputName); {
//   inputNameLower =inputName.toLowerCase();
//  }

// if(inputNameLower === father.toLowerCase()
//  || inputNameLower === mother.toLowerCase()
//  || inputNameLower === child.toLowerCase() ) {
//   alert ('Hello');
//   } else {
//     const guest = prompt ('How you need?') 
//     if (guest.toLowerCase().includes(father.toLowerCase())) {
//       alert('Его нету дома');    
//     } else if (guest.toLowerCase().includes (mother.toLowerCase())){
//       alert('Добро пожаловать, но без сюрпризов!');
//     } else { alert ('Мерзавцы, я вызываю полицию!')}

//     }
// -тоже с помощью switch
// const father ='Igor';
// const mother ='Ira';
// const child ='Nikolay';

// const guest = prompt("Who are you?");
// if (guest !== null){
//   if (guest === father
//   || guest === mother
//   || guest === child )
// {alert ('Welcom');
// } else {
//   const guest = promot('Who you need?'); 
// switch(guest) {
//   case guest === null:
//   alert('dont worry')
//   break;

// case guest.includes(father):
// alert('he is not home')
// break;

// case guest.includes(mother):
// alert('be carful')
// break;

// case guest.includes(child):
// alert('call 911')
// break;

// default:
// alert('dont worry');
//   }

// }



//  /*
//  TASK 02
//   Есть три переменные содержащие день, месяц, и год. 
//   Необходимо получить строку день\месяц\год
//   в формате xx\xx\xxxx

//   Найдите ошибку в записи значания для переменной date, 
//   результат будет выведен в консоль и равен комментарию 
//   напротив console.log()
// */

// const day = 2;
// const month = 10;
// const year = 2017;

// const date = '0'+ day + '\\' + month + "\\" + year;

// console.log(date); // 02\10\2017
//----------------------------------------------

// TASK 03
/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
//   - после того как было введено имя показывает alert с тем что ввели в prompt
// */

// const name = prompt('Enter your name');
// alert(name);
// -------------------------

// TASK04
/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// let inputUser = Number(prompt('Введите число от 1 до 5ти'));
// if (inputUser > 1 && inputUser <= 5 && !Number.isNaN(inputUser))
//   switch (inputUser) {
//     case 1:
//       alert("Каталог хостелов");
//       brake;

//     case 2:
//       alert("Каталог бюджетных отелей");
//       brake;

//     case 3:
//       alert("Каталог отелей ***");
//       brake;

//     case 4:
//       alert("Каталог отелей ****");
//       brake;

//     case 5:
//       alert("Каталог лучших отелей");
//       brake;

//   } else if (inputUser === 0) {
//     alert('Очень жаль приходите ещё')
//   }
// else {
//   alert('Неверный ввод возможны варианты 1-5')
// }


/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

// let sharm = 15;
// let hurgada = 25;
// let taba = 6;

// let num = Number(prompt('Укажите необходимое колличество номеров'));
// console.log(typeof (num))
// if (Number.isNaN(num) || num < 0) {
//   alert("Ошибка ввода");
// } else if (num === 0) {
//     alert('Нам очень жаль, приходите еще!')

//   } else if (num <= 6) {
//     let answer = confirm("Eсть место в группе taba")

//     if (answer) {
//       alert('Приятного путешествия в группе taba')
//     } else {
//         alert ('Нам очень жаль, приходите еще!');
//       }

//   } else if (num > 6 && num <= 15) {
//     let answer = confirm("Eсть место в группе sharm")
//     if (answer) {
//       alert('Приятного путешествия в группе sharm')
//     } else {
//       alert ('Нам очень жаль, приходите еще!');
//     }
//   } else if (num > 15 && num <= 25) {
//     let answer = confirm("Eсть место в группе hurgada")
//     if (answer) {
//       alert('Приятного путешествия в группе hurgada')
//     } else {
//       alert ('Нам очень жаль, приходите еще!');
//     }
//   } 
  