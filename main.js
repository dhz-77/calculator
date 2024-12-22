"use strict";

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    if (b === 0) {
        return "Error"; // Prevent division by zero
    }
    return a / b;
};

let firstNumber = null;
let secondNumber = null;
let operator = null;
let resultDisplayed = false; // Flag to check if the result is displayed

const operate = function (firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    }
    if (operator === "−") {
        return subtract(firstNumber, secondNumber);
    }
    if (operator === "×") {
        return multiply(firstNumber, secondNumber);
    }
    if (operator === "÷") {
        return divide(firstNumber, secondNumber);
    }
};

let result = document.querySelector("#result");
let isOperatorPressed = false;
let decimalUsed = false; // Track if decimal is used in the current number

// Function to round the result to a specific number of decimal places
function roundResult(value) {
    return Math.round(value * 1e10) / 1e10; // Rounds to 10 decimal places
}

function display(val) {
    // If the input is a number or a decimal
    if (!["+", "−", "×", "÷", "="].includes(val)) {
        if (val === ".") {
            if (!decimalUsed) {
                if (result.value === "" || result.value === "0" || resultDisplayed) {
                    result.value = "0."; // Start a new number with 0.
                    resultDisplayed = false; // Reset the resultDisplayed flag
                } else {
                    result.value += "."; // Append decimal if valid
                }
                decimalUsed = true; // Mark decimal as used
            }
            return;
        }

        if (isOperatorPressed || resultDisplayed) {
            // Start a new number after an operator is pressed or after result is displayed
            result.value = val;
            isOperatorPressed = false;
            resultDisplayed = false; // Reset the resultDisplayed flag
            decimalUsed = false; // Reset decimal flag for the new number
        } else {
            // Append to the existing number
            result.value = result.value === "" || result.value === "0" ? val : result.value + val;
        }

        // Update firstNumber or secondNumber based on operator state
        if (operator === null) {
            firstNumber = Number(result.value);
        } else {
            secondNumber = Number(result.value);
        }
    }

    // If the input is an operator
    if (["+", "−", "×", "÷"].includes(val)) {
        if (firstNumber !== null && secondNumber !== null && operator !== null) {
            // Perform the operation with the current values
            const res = operate(firstNumber, secondNumber, operator);
            const roundedRes = roundResult(res); // Round the result
            result.value = roundedRes;
            firstNumber = roundedRes; // Store the result as the first number
            secondNumber = null; // Reset secondNumber
        }
        operator = val; // Update the operator
        isOperatorPressed = true; // Indicate that an operator was pressed
        decimalUsed = false; // Reset decimal flag for the next number
    }
}

setEventListener();

function setEventListener() {
    let elementsArray = document.querySelectorAll('input[type="button"]');

    elementsArray.forEach(function (element) {
        element.addEventListener("click", () => {
            display(element.value);
        });
    });
}

const equals = document.querySelector('input[value="="]');

equals.addEventListener("click", () => {
    if (firstNumber !== null && secondNumber !== null && operator !== null) {
        const res = operate(firstNumber, secondNumber, operator);
        const roundedRes = roundResult(res); // Round the result
        result.value = roundedRes;
        firstNumber = roundedRes; // Store the result for subsequent operations
        secondNumber = null; // Reset secondNumber
        operator = null; // Reset operator
        isOperatorPressed = false; // Reset the operator flag
        resultDisplayed = true; // Flag to indicate result is displayed
        decimalUsed = false; // Reset decimal flag
    }
});

const clear = document.querySelector('input[value="C"]');
clear.addEventListener("click", () => {
    result.value = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    isOperatorPressed = false;
    decimalUsed = false; // Reset decimal flag
    resultDisplayed = false; // Reset result display flag
});


