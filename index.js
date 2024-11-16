// Old server stuff, will be reusable in future with playground

//async function selectTopic(topic) {
//    const responseElement = document.getElementById('response');
//
//    // Проверяем, существует ли элемент с id 'response'
//    if (responseElement) {
//        responseElement.innerText = "Loading...";
//    }
//
//    try {
//        const response = await fetch('https://sapphireserver.almandine.ch:5000/get_response', {
//            method: 'POST',
//            headers: {
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify({ topic: topic })
//        });
//
//        if (!response.ok) {
//            throw new Error(`Error HTTP: ${response.status}`);
//        }
//
//        const data = await response.json();
//        const answer = data.answer || "Error with getting data";
//
//        // Сохранение ответа в Local Storage
//        localStorage.setItem('response', answer);
//
//        // Перенаправление на новую страницу
//        window.location.href = 'playground.html';
//    } catch (error) {
//        // Проверяем, существует ли элемент с id 'response'
//        if (responseElement) {
//            responseElement.innerText = `Error: ${error.message}`;
//        }
//        console.error("Error:", error);
//    }
//}
//
//document.addEventListener('DOMContentLoaded', () => {
//    const responseElement = document.getElementById('response-text');
//
//    // Получаем ответ из Local Storage
//    const responseText = localStorage.getItem('response');
//
//    if (responseText) {
//        // Преобразуем текст с Markdown в HTML
//        responseElement.innerHTML = marked.parse(responseText);
//
//        // Подсвечиваем синтаксис C++ в коде
//        const codeBlocks = responseElement.querySelectorAll('pre code');
//        codeBlocks.forEach((block) => {
//            hljs.highlightElement(block);
//        });
//    } else {
//        responseElement.innerText = "No Response.";
//    }
//});

async function selectTopic(fileName) {
    try {
        // Строим путь до файла (например, в папке 'Themes')
        const fileUrl = `Themes/${fileName}`;

        // Загружаем файл с помощью fetch
        const response = await fetch(fileUrl);

        // Проверка успешности ответа
        if (!response.ok) {
            throw new Error(`Error fetching file: ${response.status}`);
        }

        // Получаем содержимое файла в формате текста
        const markdownText = await response.text();

        // Сохраняем ответ в Local Storage
        localStorage.setItem('theme', markdownText);

        // Перенаправляем на страницу playground.html
        window.location.href = 'playground.html';
    } catch (error) {
        // Если ошибка, показываем сообщение об ошибке
        responseElement.innerText = `Error: ${error.message}`;
        console.error("Error:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const responseElement = document.getElementById('response-text');

    // Получаем ответ из Local Storage
    const responseText = localStorage.getItem('theme');

    if (responseText) {
        // Преобразуем текст с Markdown в HTML
        responseElement.innerHTML = marked.parse(responseText);

        // Подсвечиваем синтаксис C++ в коде
        const codeBlocks = responseElement.querySelectorAll('pre code');
        codeBlocks.forEach((block) => {
            hljs.highlightElement(block);
        });
    } else {
        responseElement.innerText = "No theme.";
    }

    // Инициализация редактора CodeMirror
    const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
        mode: 'text/x-c++src', // Подсветка для C++
        matchBrackets: true,   // Подсветка скобок
        theme: 'playground',
    });

    const input = CodeMirror.fromTextArea(document.getElementById('input'), {});
    const output = CodeMirror.fromTextArea(document.getElementById('output'), { readOnly: 'nocursor' });

    // Применение ваших стилей к CodeMirror
    const editorWrapper = editor.getWrapperElement();
    editorWrapper.style.fontFamily = '"Courier New", Courier, monospace';
    editorWrapper.style.fontSize = '17px';
    editorWrapper.style.padding = '2px';

    const inputWrapper = input.getWrapperElement();
    inputWrapper.style.fontFamily = '"Courier New", Courier, monospace';
    inputWrapper.style.fontSize = '17px';
    inputWrapper.style.padding = '2px';
    inputWrapper.style.height = '50px';

    const outputWrapper = output.getWrapperElement();
    outputWrapper.style.fontFamily = '"Courier New", Courier, monospace';
    outputWrapper.style.fontSize = '17px';
    outputWrapper.style.padding = '2px';
    outputWrapper.style.height = '150px';
});

let lastScrollY = 0; // Переменная для отслеживания предыдущей позиции прокрутки

window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY || window.pageYOffset;

    // Проверяем, если разница в прокрутке больше 50 пикселей
    if (Math.abs(currentScrollY - lastScrollY) > 100) {
        document.activeElement.blur(); // Закрываем клавиатуру
    }

    // Обновляем значение последней позиции прокрутки
    lastScrollY = currentScrollY;
});

const extraSpace = document.createElement('div');
extraSpace.style.height = '1000px';
extraSpace.style.visibility = 'hidden'; // Делаем его невидимым
document.body.appendChild(extraSpace);

document.addEventListener('focusin', (event) => {
    const element = event.target.closest('.input-output, .CodeMirror');

    if (element) {
        // Вычисляем положение элемента и высоту окна
        const viewportHeight = window.innerHeight;
        const elementRect = element.getBoundingClientRect();
        const elementBottom = elementRect.bottom + window.scrollY;

        // Вычисляем позицию, чтобы нижняя часть элемента была в центре экрана
        const scrollPosition = elementBottom - viewportHeight / 2;

        // Прокручиваем страницу к нужной позиции
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }
});

document.addEventListener('focusout', () => {
    // При потере фокуса ничего не делаем, чтобы не вызывать ненужных артефактов
});