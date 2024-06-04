import {READY_STATE_COMPLETE, READY_STATE_INTERACTIVE} from './contants.js';
import {Calculator} from './Calculator.js';

(() => {
    const readyState = document.readyState;

    if (readyState === READY_STATE_INTERACTIVE || readyState === READY_STATE_COMPLETE) {
        new Calculator();
    } else {
        window.addEventListener('DOMContentLoaded', () => {
            console.log(readyState);
            new Calculator();
        });
    }
})()
