use('loan_project');

//Question 4
//Our company has determined that most people would financially benefit from refinancing their loans 
//if their interest rate is at or above 4%. 
//Which loans in this dataset should be refinanced? 
//The results should show highest interest rates first.

//Note: Your sort might not work without an index on the correct field!

//What is the interest rate of the first record returned?

db.loans.createIndex({ original_interest_rate: -1 })

db.loans.find({ original_interest_rate: { $gte: 4 } }).sort({ original_interest_rate: -1 }).limit(10);
