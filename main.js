#! /usr/bin/env node
import inquirer from "inquirer";
//curreny converter:
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0037,
        "PKR": 1
    },
    //in GBP
    "GBP": {
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1
    },
    //in DOLLAR
    "USD": {
        "PKR": 277.59,
        "GBP": 0.83,
        "USD": 1
    }
};
// using inquirer
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency..."
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "select your conservion currency"
    },
    {
        type: "number",
        name: "amount",
        message: "ENter your conversion Amount..?"
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`your conservion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalited inputs");
}
;
