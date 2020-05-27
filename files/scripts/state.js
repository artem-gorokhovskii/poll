class State {
    constructor(initialState) {
        this.initialState = initialState;
        this.state = initialState;
        this.historyStack = [];
    }

    getState () {
        return this.state;
    }

    isHistoryExists () {
        return !!this.historyStack.length;
    }

    setState (newState) {
        this.historyStack.push(this.state);
        this.state = newState;
    }

    restoreState () {
        this.historyStack = [];
        this.state = this.initialState;
    }

    returnPreviousState () {
        this.state = this.historyStack.pop();
    }
}