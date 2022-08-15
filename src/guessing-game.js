class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.quessNumber = Math.round((this.min + this.max)/2);
        return this.quessNumber;
    }

    lower() {
        this.max = this.quessNumber;
    }

    greater() {
        this.min = this.quessNumber;
    }
}

module.exports = GuessingGame;
