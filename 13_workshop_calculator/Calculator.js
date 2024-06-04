import {
    ADDITION,
    CLEAR,
    DIVISION,
    DIVISION_SIGN,
    EQUAL,
    MULTIPLICATION,
    MULTIPLICATION_SIGN,
    SUBTRACTION,
} from './contants.js';

export class Calculator {
    #calculator;
    #calculatorResult;
    constructor() {
        this.#calculator = document.querySelector('.calculator');
        this.#calculatorResult = document.querySelector('.calculator__result');

        this.#calculator.addEventListener('click', this.#onCalculatorButtonClick);
    }

    #onCalculatorButtonClick = (event) => {
        const value = event.target.innerText;

        if (event.target.nodeName !== 'BUTTON') {
            return;
        }

        if (value === EQUAL) {
            const inputString = this.#calculatorResult.innerText
                .replace(MULTIPLICATION_SIGN, MULTIPLICATION)
                .replace(DIVISION_SIGN, DIVISION);

            if (this.#isMathOperator(inputString[inputString.length - 1])) {
                return;
            }

            const calcFunc = new Function(`return ${inputString}`);

            this.#calculatorResult.innerText = calcFunc();

            return;
        }

        if (value === CLEAR) {
            this.#clearResultField();

            return;
        }

        this.#calculatorResult.innerText += value;
    }

    #isMathOperator = char => char === ADDITION || char === SUBTRACTION || char === DIVISION || char === MULTIPLICATION;

    #clearResultField = () => {
        this.#calculatorResult.innerText = '';
    }
}
