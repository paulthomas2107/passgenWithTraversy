#!/usr/bin/env node
const log = console.log
const program = require('commander')
const chalk = require("chalk");
const clipboardy = require('node-clipboardy')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')


program.version('1.0.0').description("Simple Password Generator")

program
    .option('-l, --length <number>', 'Length of password', '8')
    .option('-s, --save', 'Save password to passwords.txt')
    .option('-nn, --no-numbers', 'Remove numbers')
    .option('-ns, --no-symbols', 'Remove symbols')
    .parse()

const {length, save, numbers, symbols} = program.opts()

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Save to file
if (save) {
    savePassword(generatedPassword)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

log(chalk.blue("Generated password: " + chalk.bold(generatedPassword)))
log(chalk.yellow('Password copied to clipboard'))

