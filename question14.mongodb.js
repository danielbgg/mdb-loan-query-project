use('loan_project');

// Question 14

// Write a query that adds a new field to each document called 
// "price_credit_score_ratio" that is equal to the loan amount divided by the credit score. 
// Sort by the new field in descending order.

// Since we can't create an index on a field that we create in our query, what flag will we use to make our sort successful?


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
