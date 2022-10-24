const program = require('commander')

program.version('1.0.0').description("Simple Password Generator")

program.command('generate').action(() => {
    console.log('Generated')
}).parse()


