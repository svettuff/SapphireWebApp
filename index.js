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

        // Перенаправляем на новую страницу с ответом
        window.location.href = `playground.html?response=${encodeURIComponent(answer)}`;
    } catch (error) {
        document.getElementById('response').innerText = `Error: ${error.message}`;
        console.error("Error:", error);
    }
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    const responseText = getQueryParam('response');
    const responseElement = document.getElementById('response-text');

    if (responseText) {
        // Преобразуем текст с Markdown в HTML
        responseElement.innerHTML = marked.parse(decodeURIComponent(responseText));
    } else {
        responseElement.innerText = "Ответ не найден.";
    }
});

