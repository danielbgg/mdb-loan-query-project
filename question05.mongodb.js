use('loan_project');

// Question 5

// Mortgages created under the HARP program 
// (which helped homeowners with houses worth less than the money owed on their mortgage refinance) 
// will have a "harp_indicator" field. 
// Loans that were not created under this program do not have this field. 
// How many loans in the dataset are NOT HARP loans?

// Which query operator would you use?

db.loans.find( {harp_indicator: {$exists: false}} )




