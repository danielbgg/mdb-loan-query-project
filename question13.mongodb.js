use('loan_project');

// Question 13

// Return a count of loans that are risky (less than 500 credit score) and a count of loans that are not risky.

// Which operator will be helpful here?

db.loans.aggregate(
  [
    {
      $project: {
        risky: {
          $cond: {
            "if": { $lt: ["$credit_score", 500] },
            "then": true,
            "else": false
          }
        }
      }
    },
    {
      $group: {
        _id: "$risky",
        count: { $sum: 1 }
      }
    }
  ]
)


// db.loans.aggregate(
//   [
//     {
//       $project: {
//         grouping: 1,
//         lessThan500: { $cond: [{ $lt: ["$credit_score", 500] }, 1, 0] },
//         moreThan500: { $cond: [{ $gte: ["$credit_score", 500] }, 1, 0] }
//       }
//     },
//     {
//       $group: {
//         _id: "$grouping",
//         countLessThan500: { $sum: "$lessThan500" },
//         countMoreThan500: { $sum: "$moreThan500" }
//       }
//     }
//   ]
// )