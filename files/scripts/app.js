class App {
    constructor(data, container) {
        this.state = new State(data);
        this.interface = new UserInterface(container);
    }

    drawInterface() {
        this.interface.clearContainer();

        let state = this.state.getState();
        
        if (state.content) {
            this.interface.createContent(state.content);
        }

        if (state.question) {
            this.interface.createQuestion(state.question);
        }

        if (state.variants) {
            state.variants.forEach(variant => {
                this.interface.createAnswer(variant.answer, () => this.handleAnswerClick(variant));
            });
        } else {
            this.interface.createAnswer('Вернуться в начало', () => this.handleResetButton());
        }
    }

    handleAnswerClick (variant) {
        this.state.setState(variant);
        this.drawInterface();
    }

    handleResetButton () {
        this.state.restoreState();
        this.drawInterface();
    }
}

const app = new App(DATA, document.getElementById('container'));
app.drawInterface();