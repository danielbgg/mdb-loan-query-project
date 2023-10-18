use('loan_project');

//Question 1
//We need to pull a list of risky loans. 
//Find the top 100 highest value loans (highest original_upb) with a credit score below 500.
db.loans.find({ credit_score: { $lt: 500 } }).sort({ original_upb: -1 }).limit(100);
