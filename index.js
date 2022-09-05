#! /usr/bin/env node
const list = require("./commands/list")

const { program } = require("commander");

program
    .command("list")
    .description("List all the TODO tasks")
    .action(list)

function main() {
    programs.parse();
}

/*
https://blog.logrocket.com/creating-a-cli-tool-with-node-js/
1. Dependencies are:
    commander: This package makes creating the CLI tool easier. It provides functions that will allow us to set the commands, options, and more
    chalk: This package lets us print colored messages to the console. It will help us make our CLI tool look nice and pretty
    conf: This package allows us to save persistent information on the user’s machine. We will be using it to save the user’s to-do list

To install these packages, run:
npm i commander chalk conf

2. To declare a command, we will use the following functions:

    program.command: takes a string that defines the format of the command
    program.description: describes the command for the user. This is helpful when the user executes our tool with the option --help
    program.option: the options that this command can take, if any
    program.action: the action that this command performs, which will be a function

3. $ todos list
    todos list: this will list the tasks in the user’s to-do list
    todos add: this will add a new task to the user’s to-do list
    todos mark-done: this will mark specific tasks or all tasks as done in the list

4. Next, we will loop over todoList, and for each task, check if it’s done and, if so, display it in green. If not, display it in yellow:

5. This is necessary for commander. Once we are done declaring our commands, we parse the input of the user so that commander can figure out which command the user is running and execute it.

6. Testing the CLI tool
    Add to package.json:
    ```json
    "bin": {
        // "todos": "./index.js"
        "fzz": "./index.js"
    }

    ```
    `todos` (fzz) will be used in the terminal when running commands from our todos-cli command. You can change it to whatever you want. We are pointing it at index.js, as this is our main point of entry.

7. TODO Install the package globally
    `$ npm i -g`
*/



