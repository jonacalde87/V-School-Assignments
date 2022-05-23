var readline = require('readline-sync');

//add user name
var userName = readlineSync.question("May I have your name?\n");
console.log("Hi " + userName + "!");

//declare variables 
var operations = ['+', '-', '*', '/'];
var operator = 0;
var firstNumber = 0;
var secondNumber = 0;

// function definition
function operationQuestion() {
    operator = readline.question("What operation would you like to perform?\n"
        + '\nOptions:'
        + '\nSum (' + operations[0] + ')'
        + '\nSubtraction (' + operations[1] + ')'
        + '\nMultiplication (' + operations[2] + ')'
        + '\nDivision (' + operations[3] + ')\n'
        + 'Press the desired operator and press Enter!\n'        
    );

    // this only runs true if the user passes in input into "operator"
    if (!operations.includes(operator)) {
        console.log("That is not a valid operation");
        operationQuestion();
    }

    firstNumber = readline.questionInt('Type the first number: ');
    secondNumber = readline.questionInt('Type the second number: ');


    switch (operator) {
        case '+':
            console.log(userName + "; " + 'The result of ' + firstNumber + " " + operator + " " + secondNumber + ' = ' + (firstNumber + secondNumber));
            break;

        case '-':
            console.log(userName + "; " + 'The result of ' + firstNumber + " " + operator + " " + secondNumber + ' = ' + (firstNumber - secondNumber));
            break;

        case '*':
            console.log(userName + "; " + 'The result of ' + firstNumber + " " + operator + " " + secondNumber + ' = ' + (firstNumber * secondNumber));
            break;

        case '/':
            console.log(userName + "; " + 'The result of ' + firstNumber + " " + operator + " " + secondNumber + ' = ' + ((firstNumber / secondNumber).toFixed(2)));
            break;

        default:
            console.log(userName + "; " + 'Something went wrong :( ');
    }
}

// function call 
operationQuestion();

// - npm init -y
// - npm install [package name]
// - npm install readline-sync