// example-commander.js

// const commander = require('commander');
import commander from 'commander';

commander
    .version('1.0.0', '-v, --version')
    .usage('[OPTIONS]...')
    .option('-f, --flag', 'Detects if the flag is present.')
    .option('-c, --custom <value>', 'Overwriting value.', 'Default')
    .parse(process.argv);


const options = commander.opts();

const flag = (options.flag ? 'Flag is present.' : 'Flag is not present.');


console.log(`Flag: ${flag}`);
console.log(`Custom: ${custom}`);