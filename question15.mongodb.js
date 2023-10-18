use('loan_project');

// Question 15

// Write a query that adds a new field to each document called "price_credit_score_ratio" 
// that is equal to the loan amount divided by the credit score. 
// Sort by the new field in descending order.

// Mark these items as true or false for the first record in the result set.

db.loans.aggregate(
  [
    {
      $set: {
        price_credit_score_ratio: { $divide: ["$original_upb", "$credit_score"] }
      }
    },
    {
      $sort: {
        "price_credit_score_ratio": -1
      }
    }
  ]
  , { allowDiskUse: true });
