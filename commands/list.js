const conf = new (require("conf"))();
const chalk = require("chalk");

function logError(message) {
    console.log(chalk.red.bold(`${message}`));
}
function logWarning(message) {
    console.log(chalk.yellow.bold(`${message}`));
}
function logInfo(message) {
    console.log(chalk.blue.bold(`${message}`));
}

function logTaskDone(message) {
    console.log(chalk.greenBright(`${message}`));
}
function logTaskNotDone(message) {
    console.log(chalk.yellowBright(`${message}`));
}

function list () {
    const todoList = conf.get("todo-list");

    if (todoList && todoList.length) {
        // user has task in todoList
        const msgInfo = "Tasks in green are done. Tasks in yellow are still not done.";

        for (let i = 0; i < todoList.length; i += 1) {
            const task = todoList[i];
            const msgTaskDone = `${i}. ${task.text}`;
            const msgTaskNotDone = `${i}. ${task.text}`;
            if (task.done) {
                logTaskDone(msgTaskDone);
            } else {
                logTaskNotDone(msgTaskNotDone);
            }
        }
    } else {
        // user does not have task in todoList
        const msgError = "You don\'t have any tasks yet";

        logError(msgError);
    }


}

module.exports = list;

/*
For storing and retreiving the tasks, we will be using the conf package. It has the following functions:

    set: this sets the information we need under a specific key
    get: this gets the information we set before under a specific key
*/


