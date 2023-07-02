import { parseISO, format } from 'date-fns';

// require syntax for REPL
// const parseISO = require('date-fns/parseISO')
// const format = require('date-fns/format')


import fs from 'fs';






let d = new Date().toISOString();
const date = parseISO(d);
let dateString = format(date, 'yyyy-MM-dd');
const title = `Next.js is Awesome`;




const fileName = `${dateString}-${title}.md`;
const PATH = `../posts/${fileName}`;

let heading = `---
title: '${title}'
date: '${dateString}'
now: '${Date.now()}'
---`


console.log(heading);


fs.writeFileSync(PATH, heading);