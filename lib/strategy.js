// strategy.js

job = {
    rate_of_pay: 12,
    over_time: 0,
    standard_week: 40,
    standard_over_time: 
    rate_weekly: function() {
        return this.rate_of_pay * standard_week;
    },
    rate_monthly: function() {
        return this.rate_of_pay * (standard_week * 4);
    },
    rate_overtime: function(multiplier=1.5) {
        return (this.rate_of_pay * multiplier) 
    }

}

function handleUnsetRateOfPay() {
    if (this.rateOfPay) {
        return this.rateOfPay ;
    } else {
        throw new Error('rate of pay must be set, before calculation!');
    }
}
