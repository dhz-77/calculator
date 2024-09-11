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
}

let result = document.querySelector("#result");
let displayValue;

let countNum = 0;
let countOp = 0;

function display(val) {
    if(val != "+" && val != "−" && val != "×" && val != "÷") {
        result.value = val;

        if (countNum == 1) {
            secondNumber = Number(val);
            countNum++
        }

        if (countNum == 0) {
            firstNumber = Number(val);
            countNum++;
        }
    }

    if (val == "+" || val == "−" || val == "×" || val == "÷") {

        if (countOp == 1) {
            const res = operate(firstNumber, secondNumber, operator);
            
            result.value = res;

            operator = val;
            firstNumber = res;
            countNum = 1;
        }
        
        if (countOp == 0) {
            operator = val;
            countOp++;
        } 
    }
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

const equals = document.querySelector('input[value="="]')

equals.addEventListener("click", () => {
     const res = operate(firstNumber, secondNumber, operator);
     result.value = "";
     result.value = res;
})

const clear = document.querySelector('input[value="c"]');
clear.addEventListener("click", () => {
    result.value = "";
    firstNumber = "";
    secondNumber = "";
    countNum = 0;
    countOp = 0;
});



