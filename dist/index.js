#! /usr/bin/env node
import inquirer from 'inquirer';
inquirer
    .prompt([
    /* Pass your questions in here */
    {
        type: 'number',
        name: 'num1',
        message: 'enter your first number'
    },
    {
        type: 'number',
        name: 'num2',
        message: 'enter your second number'
    },
    {
        type: 'list',
        name: 'operation',
        message: 'enter your operation',
        choices: ["+", "-", "*", "/"]
    }
])
    .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.operation == "+") {
        const result = answers.num1 + answers.num2;
        console.log("sum", result);
    }
    else if (answers.operation == "-") {
        const result = answers.num1 - answers.num2;
        console.log("subtract", result);
    }
    else if (answers.operation == "*") {
        const result = answers.num1 * answers.num2;
        console.log("Multiply", result);
    }
    else if (answers.operation == "/") {
        const result = answers.num1 / answers.num2;
        console.log("Divide", result);
    }
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});
