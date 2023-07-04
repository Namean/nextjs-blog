

class Job {
    rateOfPay = 10;
    constructor(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getRateOfPay() {
        return this.rateOfPay;
    }

    setRateOfPay(rate) {
        this.rateOfPay = rate;
    }

    calculatePay() {
        if (this.rateOfPay) {
            return this.rateOfPay * 40;
        } else {
            throw new Error('rate of pay must be set, before calculation!');
        }
    }

    calculatePayPerWeek() {
        return this.rateOfPay * 40
    }

    calculatePayPerMonth() {
        return this.rateOfPay * (40 * 4);
    }

    calculatePayPerYear() {
        return this.rateOfPay * (40 * 4 * 12);
    }



}
export default Job;
