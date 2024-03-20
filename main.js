//Import the readline module to talk with the user in the console
const readline = require('readline');

//Create an interface to talk with the user

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Functions to do the math operations

//Function for addition
function addition(a, b) {
    return a + b;
}
//Function for Subtraction
function subtract(a, b) {
    return a - b;
}
//Function for Multiplication
function multiply(a, b) {
    return a * b;
}
//Function for division
function divide(a, b) {
    //To check if division is possible by zero
    if (b === 0) {
        return 'We Fala Nini?'
    }
    return a / b;

}

//Ask the user for the first number
rl.question("Enter first Number: ", function(num1) {

    //convert user input to an actual number
    num1 = parseFloat(num1);

    //Ask the user for the operator
    rl.question("Enter Operator (+,-,/,*):", function(operator)
    {

        //Ask the user for the second number
    rl.question("enter second number;", function(num2) {
        num2 = parseFloat(num2);

        //Do the math based on the operator

        let result;
        switch (operator) {
            case '-':
                result = subtract(num1, num2);
                break;
            case '+':
                result = addition(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
                            
            case '/':
                result = divide(num1,num2);
                break;

            default:
                result = "Uko Maji Nini.?";

        }

        //Display the Answer
        console.log("Ans = " + result);

        //close the conversation
        rl.close();
    });
    });
});