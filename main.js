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
    return a / b;
}

let firstNumber;
let secondNumber;
let operator;

const operate = function(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        add(firstNumber, secondNumber);
    }
    if (operator === "-") {
        subtract(firstNumber, secondNumber);
    }
    if (operator === "*") {
        multiply(firstNumber, secondNumber);
    }
    if (operator === "/") {
        divide(firstNumber, secondNumber);
    }
}