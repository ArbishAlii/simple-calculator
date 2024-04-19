#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstnumber" },
    { message: "enter your second number", type: "number", name: "secondnumber" },
    {
        message: "choose any operator to perform action", type: "list", name: "operator", choices: ["Addition", "subtraction", "multiplication", "division"]
    }
]);

//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
} else {
    console.log("please select valid operator")
}
console.log('the end');