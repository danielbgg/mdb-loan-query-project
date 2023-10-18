use('loan_project');

// Question 12

// Find the average credit score by state (property_state) among loans 
// with the seller "BANK OF AMERICA, N.A." and sort the result in descending order by credit score.

// Which MongoDB command will you use to run this query?

db.loans.aggregate(
  [
    {
      $match: {
        "seller_name": "BANK OF AMERICA, N.A."
      }
    },
    {
      $group: {
        _id: "$property_state",
        avgCreditScore: {
          $avg: "$credit_score"
        }
      }
    },
    {
      $sort: {
        "avgCreditScore": -1
      }
    }
  ]
)

