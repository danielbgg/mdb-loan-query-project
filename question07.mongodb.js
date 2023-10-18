use('loan_project');

// Question 7

// What is the credit score associated with the loan that has the lowest interest rate 
// with a first payment in 2015?

// Which of these query operators would be helpful for answering this question?


db.loans.find({
    $and: [
        { first_payment_date: { $gte: new Date("2015-01-01")  } },
        { first_payment_date: { $lt: new ISODate("2016-01-01T00:00:00.000+00:00") } }]
}).
    sort({ original_interest_rate: 1 });

