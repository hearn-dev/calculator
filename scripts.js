const calculator = () => {
    let previous = document.querySelector("#previous");
    let current = document.querySelector("#current");
    let numButtons = document.querySelectorAll(".num");
    let operators = document.querySelectorAll(".operator");
    let clear = document.querySelector("#clear");
    let back = document.querySelector("#back");
    let equal = document.querySelector("#equals");

    let currentOperand = "";
    let previousOperand = "";
    let operator = null;


    const handleButtons = () => {
        numButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                console.log(btn);
                if (btn.textContent === '.' && currentOperand.includes('.')) return;
                else if (isNaN(currentOperand) && btn.textContent != '.') {
                    operator = currentOperand;
                    currentOperand = '';
                }
                currentOperand += btn.textContent.toString();
                updateDisplay();
            })
        })

        operators.forEach(btn => {
            btn.addEventListener("click", () => {
                console.log(btn);
                if (btn.textContent != '.') {
                    previousOperand = currentOperand;
                }
                currentOperand = btn.textContent.toString();
                updateDisplay();
            })
        })

        clear.addEventListener("click", () => {
            if (currentOperand == '') {
                previousOperand = '';
            } else {
                currentOperand = '';
            }
            updateDisplay()
        })

        back.addEventListener("click", () => {
            currentOperand = currentOperand.slice(0, -1);
            updateDisplay();
        })

        equal.addEventListener("click", () => {
            currentOperand = parseInt(current.textContent);
            previousOperand = parseInt(previous.textContent);
            let ans = operate(previousOperand, currentOperand, operator);
            console.log(previousOperand, currentOperand, operator)
            console.log(operate(6, 12, '+'));
            previousOperand = previousOperand + ' ' + operator + ' ' + currentOperand;
            currentOperand = ans.toFixed(2);
            updateDisplay();
        })
    }



    const updateDisplay = () => {
        current.textContent = currentOperand;
        previous.textContent = previousOperand
    }

    handleButtons();
}
 calculator();

const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return x / y;
}

const operate = (x, y, operator) => {
    if (operator === '+') {
        return add(x, y);
    } else if (operator === '-') {
        return subtract(x, y);
    } else if (operator === 'x') {
        return multiply(x, y);
    } else if (operator === '/') {
        return divide(x, y);
    }
}

const display = (num) => {
    const newNum = document.createTextNode(num);
    document.getElementById("#math").appendChild(newNum);
}