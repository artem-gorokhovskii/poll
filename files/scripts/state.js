class State {
    constructor(initialState) {
        this.initialState = initialState;
        this.state = initialState;
    }

    getState () {
        return this.state;
    }

    setState (newState) {
        this.state = newState;
    }

    restoreState () {
        this.state = this.initialState;
    }
}