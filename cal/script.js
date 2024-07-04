const display = document.getElementById('display');
const historyDisplay = document.getElementById('history-display');
const keys = document.querySelectorAll('.keys button');

let calculation = '';
let history = [];

keys.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;
        switch (value) {
            case 'C':
                calculation = '';
                display.value = '';
                history = [];
                historyDisplay.textContent = '';
                break;
            case '←':
                calculation = calculation.slice(0, -1);
                display.value = calculation;
                break;
            case '=':
                try {
                    const result = eval(calculation);
                    display.value = result;
                    history.push(`${calculation} = ${result}`);
                    historyDisplay.textContent = history.join('\n');
                    calculation = ''; // reset calculation
                } catch (e) {
                    display.value = 'Error';
                }
                break;
            default:
                calculation += value;
                display.value = calculation;
        }
    });
});