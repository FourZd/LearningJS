const line = prompt('Кто там?');
if (line == null || line == '') {
    console.log('Отмена');
} else if (line == 'Админ') {
    const askPassword = prompt('Пароль?');
    if (askPassword == undefined || askPassword == '') {
        console.log('Отмена');
    } else if (askPassword == 'Я Главный') {
        console.log('Здравствуйте!');
    } else {
        console.log('Неверный пароль');
    }
} else {
    console.log('Я вас не знаю');
}