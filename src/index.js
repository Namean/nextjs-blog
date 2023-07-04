import Job from './job.js';


class Person {

    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

    toString() {
        if (this.job === '' || undefined || null) {
           console.log(`Hello, my name is ${this.name} is am currently seeking employment`);
        } else {
         console.log(`Hello, my name is ${this.name} my job title I am the ${this.job.title}`)   
        }
    }
}


const job = new Job('Founder and CEO of Hotrod Softworks');
const desmond = new Person('Desmond', job);


console.log(job.calculatePayPerWeek())

