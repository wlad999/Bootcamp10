const num = Number(prompt('Введите номер отеля от 1го до 5ти'));
if (num === 0) {
  alert('очень жаль, приходите еще!')
} 
if(num !==0 && num >5 || num < 1) {
  alert('Неверный ввод, возможные варианты 1-5!')
}


if (num >0 && num <=5 && num !==NaN) {
  
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
    
}