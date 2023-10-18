use('loan_project');

//Question 2
//We need to pull a list of risky loans. 
//Find the top 100 highest value loans (highest original_upb) with a credit score below 500.
//For the first loan in the result set, what state is the property in? (property_state field)

//db.loans.find({credit_score: {$lt: 500}}).sort( {original_upb: -1} ).limit(100);

//CA