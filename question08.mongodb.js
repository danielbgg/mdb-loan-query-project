use('loan_project');

// Question 8

// What is the credit score associated with the loan that has the lowest interest rate 
// with a first payment in 2015?

db.loans.find({
    $and: [
        { first_payment_date: { $gte: new Date("2015-01-01") } },
        { first_payment_date: { $lt: new ISODate("2016-01-01T00:00:00.000+00:00") } }]
},
    { "first_payment_date": 1, "credit_score": 1, "original_interest_rate": 1 }
).
    sort({ original_interest_rate: 1 }).
    limit(10);

