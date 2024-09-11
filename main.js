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

function display(val) { 
    const result = document.querySelector("#result")
    result.value += val 

    const displayValue = result.value;
} 

setEventListener();

function setEventListener() {
    let elementsArray = document.querySelectorAll('input[type="button"]');
    
    elementsArray.forEach(function(element) {
        element.addEventListener("click", () => {
            if(element.value === "1") {
                display("1");
            }
            if(element.value === "2") {
                display("2");
            }
            if(element.value === "3") {
                display("3");
            }
            if(element.value === "4") {
                display("4");
            }
            if(element.value === "5") {
                display("5");
            }
            if(element.value === "6") {
                display("6");
            }
            if(element.value === "7") {
                display("7");
            }
            if(element.value === "8") {
                display("8");
            }
            if(element.value === "9") {
                display("9");
            }
            if(element.value === "0") {
                display("0");
            }
            if(element.value === "+") {
                display("+");
            }
            if(element.value === "−") {
                display("−");
            }
            if(element.value === "×") {
                display("×");
            }
            if(element.value === "÷") {
                display("÷");
            }
        });
    });
}
