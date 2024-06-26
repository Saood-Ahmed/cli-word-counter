#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';

console.log(chalk.bold.redBright("\n\tCode With Saood - Word Counter!\t\n"));

let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence:"
    }
])

let words = answers.sentence.trim().split(" ");

console.log(chalk.bold("Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));