#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 0;
let isCountinue = true;
const pinCode = 9898;
const message = "Wellcome To ATM";
console.log(message);
let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please enter Pin Code: "
});
if (pin_ans.ans === 9898) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select any option",
            choices: ["Deposite", "Withdraw", "Fast cash", "Balance chek"]
        });
        // ...............................Deposite............................
        if (ans.list === "Deposite") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposite_amount",
                message: "Please Enter Your Amount: "
            });
            if (ans.Deposite_amount > 0) {
                myBalance = myBalance = ans.Deposite_amount;
                console.log(myBalance);
            }
        }
        // .........................................withdraw..........................
        else if (ans.list === "Withdraw") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Withdraw_amount",
                message: "please enter amount"
            });
            if (ans.Withdraw_amount <= myBalance) {
                myBalance = myBalance - ans.Withdraw_amount;
                console.log(myBalance);
            }
            else {
                console.log("Not Enough Money");
            }
        }
        // .................................Fast Cash..................................
        else if (ans.list === "Fast cash") {
            let ans = await inquirer.prompt({
                type: "list",
                name: "fast_cash",
                message: "Please Salect One",
                choices: ["500", "1000", "2000"]
            });
            if (ans.fast_cash <= myBalance) {
                if (ans.fast_cash === "500") {
                    myBalance -= ans.fast_cash;
                    console.log(myBalance);
                }
                else if (ans.fast_cash === "1000") {
                    myBalance -= ans.fast_cash;
                    console.log(myBalance);
                }
                else if (ans.fast_cash === "2000") {
                    myBalance -= ans.fast_cash;
                    console.log(myBalance);
                }
            }
        }
        // ...........................Check Balance...............................
        else if (ans.list === "Balance check") {
            console.log(`your Balance is: ${myBalance}`);
        }
        // .............................While Condition......................
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do You Continue: "
        });
        if (while_ans.condition === false) {
            isCountinue = false;
        }
    } while (isCountinue);
}
else {
    console.log("Invalid Pin Code");
}
