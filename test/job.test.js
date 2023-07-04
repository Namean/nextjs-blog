import Job from '../src/job';

const job = new Job('Founder & CEO');

test('Make sure there is a job title', () => {
    expect(job.getTitle()).toEqual('Founder & CEO');
});

test('calculate pay per week', () => {
    expect(job.calculatePayPerWeek()).toBe( (10 * 40))
})

test('calculate pay per month', () => {
    expect(job.calculatePayPerMonth()).toBe(10 * 40 * 4)
})

test('calculate pay per year', () => {
    expect(job.calculatePayPerYear()).toBe(10 * 40 * 4 * 12)
})