async function selectTopic(topic) {
    document.getElementById('response').innerText = "Loading...";

    try {
        const response = await fetch('https://sapphireserver.almandine.ch:5000/get_response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ topic: topic })
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        const answer = data.answer || "Error with getting data";

        // Сохранение ответа в Local Storage
        localStorage.setItem('response', answer);

        // Перенаправление на новую страницу
        window.location.href = 'playground.html';
    } catch (error) {
        document.getElementById('response').innerText = `Error: ${error.message}`;
        console.error("Error:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const responseElement = document.getElementById('response-text');

    // Получаем ответ из Local Storage
    const responseText = localStorage.getItem('response');

    if (responseText) {
        // Преобразуем текст с Markdown в HTML
        responseElement.innerHTML = marked.parse(responseText);

        // Подсвечиваем синтаксис C++ в коде
        const codeBlocks = responseElement.querySelectorAll('pre code');
        codeBlocks.forEach((block) => {
            hljs.highlightElement(block);
        });
    } else {
        responseElement.innerText = "Ответ не найден.";
    }
});


