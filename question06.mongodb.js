use('loan_project');

// Question 6

// Mortgages created under the HARP program 
// (which helped homeowners with houses worth less than the money owed on their mortgage refinance) 
// will have a "harp_indicator" field. 
// Loans that were not created under this program do not have this field. 
// How many loans in the dataset are NOT HARP loans?

db.loans.count( {harp_indicator: {$exists: false}} )




