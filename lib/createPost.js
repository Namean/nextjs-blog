import { parseISO, format } from 'date-fns';
import process from 'process';
import skelify from './skelify.js';

// require syntax for REPL
// const parseISO = require('date-fns/parseISO')
// const format = require('date-fns/format')


import fs from 'fs';



try {
    // Changing the directory with the below name
    process.chdir('../posts');
} catch (err) {
    console.error("Error while changing directory", err);
}




let d = new Date().toISOString();
const date = parseISO(d);
let dateString = format(date, 'yyyy-MM-dd');


const args = process.argv;

const handleNoArguments = () => {
    if (args.length === 2) {
        console.error('Expected at least one argument!');
        process.exit(1);
    }
}




const customIndex = args.indexOf('--title');
let customValue;

if (customIndex > -1) customValue = args[customIndex + 1];
const custom = skelify(customValue.toLocaleLowerCase());



const title = `${custom}`;
// console.log(title);




const fileName = `${dateString}-${title}.md`;


let heading = `---
title: '${title}'
date: '${dateString}'
now: '${Date.now()}'
---`


// console.log(heading);

if (title === 'undefined.md') {
    console.error('File names can not be empty!');
    console.error('[USAGE]... createPost.js --title <fileName>')
}

fs.writeFileSync(fileName, heading);