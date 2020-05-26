class UserInterface {
    constructor (container) {
        this.container = container;
    }

    clearContainer () {
        this.container.innerHTML = '';
    }

    createContent (value) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = value;
        this.container.appendChild(content);
    }

    createQuestion (value) {
        const question = document.createElement('div');
        question.classList.add('question');
        question.innerHTML = value;
        this.container.appendChild(question);
    }

    createAnswer (value, onclick) {
        const answer = document.createElement('div');
        answer.classList.add('answer');
        answer.innerHTML = value;
        answer.onclick = onclick;
        this.container.appendChild(answer);
    }
}