'use strict'


const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let Login = prompt('Please enter a login!');


if (Login === null) {
    alert ('Отменено пользователем!');
}
else if (Login === adminLogin) {
    let Password = prompt('Please enter your password');

        if (Password === adminPassword) {
            alert ('Добро пожаловать!');
        } else if (Password === null) {
            alert ('Отменено пользователем!');   
        } else {
            alert ('Доступ запрещен, неверный пароль!');
        }

} else {
    alert ('Доступ запрещен, неверный логин!');
}

