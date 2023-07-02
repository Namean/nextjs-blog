import process from 'process';


console.log(process.cwd());
process.chdir('../posts/');
console.log(process.cwd());
