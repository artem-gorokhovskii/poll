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
        }

        if (this.state.isHistoryExists()) {
            this.interface.createActionButton('Вернуться назад', () => this.handleBackButtonClick());
        }
        
        if (!state.variants) {
            this.interface.createActionButton('Вернуться в начало', () => this.handleResetButtonClick());
        }
    }

    handleAnswerClick (variant) {
        this.state.setState(variant);
        this.drawInterface();
    }

    handleResetButtonClick () {
        this.state.restoreState();
        this.drawInterface();
    }

    handleBackButtonClick () {
        this.state.returnPreviousState();
        this.drawInterface();
    }
}

const app = new App(DATA, document.getElementById('container'));
app.drawInterface();