/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
*
* */
let session = {
    'startDate': new Date().toLocaleString(),
    'userAgent': window.navigator.userAgent,
    'userAge': prompt("Пожалуйста, введите ваш возраст?")
}

/*
* Проверка возраста пользователя
*
* */
function checkAge() {
    if (session.userAge >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

/*
* Вывод данных сессии в консоль
*
* */
let sessionLog = function () {
    console.log('Начало сессии: ' + session.startDate)
    console.log('Даныне клиента: ' + session.userAgent)
    console.log('Возраст пользователя: : ' + session.userAge)
}


/*
* Функция для фильтрации контента
* Будет вызываться благодаря атрибуту oninput на index.html
*
* */
function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction() /* Захват переменной теперь происходит с помощью замыкания */.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
* 
* */
setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
    30000);


