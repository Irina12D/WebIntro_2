const user = prompt('Введите своё имя');
greeting(user);

function greeting(userName) {
    if (userName  === "" || userName === null)
        console.log('Ну, привет, незнакомец!');
    else
        console.log('Приветсвую тебя, ' + userName + '!');
}