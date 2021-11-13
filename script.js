let operand;
let firstNumber = "";
let secondNumber; 


const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
    return a - b;
}
const multiply = function(a, b) {
    return a * b;
}
const divide = function(a, b) {
    return a / b;
}

// This code displays the numbers you click on the screen and saves it as the second number.

const display = document.querySelector("#screen");
const numbers = document.querySelectorAll(".numbers");
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = button.textContent;
        secondNumber = button.textContent;
        console.log(secondNumber);
     });
});

// This selects the operand when you click it, makes sure your displays still displays
// the first number you choose and if it is the very first number, it saves that number
//  as the first number so you can choose a new second number. If you have already done a calculation then the result
// of that calculation has been saved as the first number (in some other code a bit further) and this will stay the same.
// It will then call the operate function to calculate the results of the previous buttons and save the result as the new firstNumber.

const selectOperand = document.querySelectorAll(".operands");
selectOperand.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = secondNumber;
        if (firstNumber == "") {
            firstNumber = display.textContent;
        }
        else if (firstNumber !== "") {
            firstNumber = operate(firstNumber, secondNumber, operand);
            console.log(firstNumber);
        }
        operand = button.textContent;
    });
});

//When this function is called, it will take your numbers and do the correct calculations on them.

const operate = function(firstNumber, secondNumber, operand) {
    if (operand == " + ") {
        result = add(parseInt(firstNumber),parseInt(secondNumber));
        firstNumber = result;
        console.log(firstNumber);
        return result; 
    } 
    else if (operand == " - ") {
        result = subtract(firstNumber,secondNumber);
        firstNumber = result;
        console.log(firstNumber);
        return result; 
    }
    else if (operand == " * ") {
        result = multiply(firstNumber,secondNumber);
        firstNumber = result;
        console.log(firstNumber);
        return result; 
    }
    else if (operand == " / ") {
        result = divide(firstNumber,secondNumber);
        firstNumber = result;
        console.log(firstNumber);
        return result; 
    }; 
};

// this will call the operate function when you press the 'equal' button. 
const displayResult = document.querySelector("#equal");
displayResult.addEventListener('click', () => {
    display.textContent = operate(firstNumber, secondNumber, operand);
});

// This code makes the reset function function.

const resetEverything = document.querySelector("#reset");
resetEverything.addEventListener('click', () => {
    firstNumber = "";
    secondNumber = "";
    operand = "";
    display.textContent = "";
})


// find a way to save the first number
// to save the operator
// to save the second number
// when they press "=", it should run the function and display the result
// the result is saved as the first number, the second number & the operator are cleared 
// 
