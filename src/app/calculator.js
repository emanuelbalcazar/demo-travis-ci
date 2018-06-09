class Calculator {

    constructor() {

    }

    sum(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    mul(a, b) {
        return a * b;
    }

    div(a, b) {
        return (b != 0) ? a / b : null;
    }
}

module.exports = new Calculator();