async function selectTopic(fileName) {
    const topicButton = event.target;
    if (topicButton.classList.contains('locked')) {
        document.getElementById('modal-overlay').style.display = 'flex';
        return;
    }

    try {
        const fileUrl = `Themes/${fileName}`;

        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error(`Error fetching file: ${response.status}`);
        }

        const markdownText = await response.text();

        localStorage.setItem('theme', markdownText);

        window.location.href = 'playground.html';
    } catch (error) {
        console.error("Error:", error);
    }
}

function unlockAllTopics() {
    const lockedTopics = document.querySelectorAll('.topic-button.locked');
    lockedTopics.forEach(topic => {
        topic.classList.remove('locked');
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    if (window.location.pathname.includes('index.html')) {
        const tg = window.Telegram.WebApp;

        const user = tg.initDataUnsafe?.user;
        if(user)
        {
            try {
                const response = await fetch('https://sapphireserver.almandine.ch:5000/check-user-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: user })
                });

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data = await response.json();
                const userExists = data.exists;

                if (!userExists) {
                    unlockAllTopics();
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }

    if (window.location.pathname.includes('playground.html')) {
        const responseElement = document.getElementById('response-text');

        const responseText = localStorage.getItem('theme');

        if (responseText) {
            responseElement.innerHTML = marked.parse(responseText);

            const codeBlocks = responseElement.querySelectorAll('pre code');
            codeBlocks.forEach((block) => {
                hljs.highlightElement(block);
            });
        } else {
            responseElement.innerText = "No theme.";
        }

        const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
            mode: 'text/x-c++src',
            matchBrackets: true,
            theme: 'playground',
        });

        const inputEditor = CodeMirror.fromTextArea(document.getElementById('input'), { theme: 'playground', lineWrapping: true });
        const outputEditor = CodeMirror.fromTextArea(document.getElementById('output'), { readOnly: 'nocursor', theme: 'playground', lineWrapping: true });
        const questionEditor = CodeMirror.fromTextArea(document.getElementById('question'), { theme: 'playground', lineWrapping: true });

        // Применение ваших стилей к CodeMirror
        const editorWrapper = editor.getWrapperElement();
        editorWrapper.style.fontFamily = '"Courier New", Courier, monospace';
        editorWrapper.style.fontSize = '17px';
        editorWrapper.style.padding = '2px';

        const inputWrapper = inputEditor.getWrapperElement();
        inputWrapper.style.fontFamily = '"Courier New", Courier, monospace';
        inputWrapper.style.fontSize = '17px';
        inputWrapper.style.padding = '2px';
        inputWrapper.style.height = '50px';

        const outputWrapper = outputEditor.getWrapperElement();
        outputWrapper.style.fontFamily = '"Courier New", Courier, monospace';
        outputWrapper.style.fontSize = '17px';
        outputWrapper.style.padding = '2px';
        outputWrapper.style.height = '150px';

        const questionWrapper = questionEditor.getWrapperElement();
        questionWrapper.style.fontFamily = '"Courier New", Courier, monospace';
        questionWrapper.style.fontSize = '17px';
        questionWrapper.style.padding = '2px';
        questionWrapper.style.height = '300px';

        const runButton = document.getElementById('run-button');
        runButton.addEventListener('click', async () => {
            const code = editor.getValue();
            let input = inputEditor.getValue();
            input = input.split(',').map(item => item.trim()).join('\n');

            try {
                const response = await fetch('https://sapphireserver.almandine.ch:5000/execute_cpp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ code: code, input: input })
                });

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data = await response.json();
                const output = data.output || "Error with executing code";

                outputEditor.setValue(output);
            } catch (error) {
                outputEditor.setValue(`Error: ${error.message}`);
                console.error("Error:", error);
            }
        });

        const askButton = document.getElementById('ask-button');
        askButton.addEventListener('click', async () => {
            const question = questionEditor.getValue();

            try {
                const response = await fetch('https://sapphireserver.almandine.ch:5000/ask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ question: question })
                });

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data = await response.json();
                const answer = data.answer || "Error with getting data";

                questionEditor.setValue(answer);
            }
            catch (error) {
                console.error("Error:", error);
            }
        })
    }
});

let lastScrollY = 0;

window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY || window.pageYOffset;

    if (Math.abs(currentScrollY - lastScrollY) > 50) {
        document.activeElement.blur();
    }

    lastScrollY = currentScrollY;
});

const extraSpace = document.createElement('div');
extraSpace.style.height = '300px';
extraSpace.style.visibility = 'hidden';
document.body.appendChild(extraSpace);

document.addEventListener('focusin', (event) => {
    const element = event.target.closest('.input-output, .CodeMirror');

    if (element) {
        const viewportHeight = window.innerHeight;
        const elementRect = element.getBoundingClientRect();
        const elementBottom = elementRect.bottom + window.scrollY;

        const scrollPosition = elementBottom - viewportHeight / 2;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }
});

document.addEventListener('focusout', () => {

});

document.getElementById('modal-overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        document.getElementById('modal-overlay').style.display = 'none';
    }
});
