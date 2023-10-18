use('loan_project');

// Question 10

// Find all the loans where the neither the servicer name or seller name contains the word "mortgage". 
// The seller and servicer names must not be "Other sellers" or "Other servicers"

// Sort by servicer name in ascending order

// Note: You'll need a new index for this sort!

// What is the seller name for the first record in the result set?

//db.loans.createIndex( {servicer_name: 1 })

db.loans.find({
    $nor: [
        { seller_name: "Other sellers" },
        { seller_name: { $regex: /mortgage/i } },
        { servicer_name: "Other servicers" },
        { servicer_name: { $regex: /mortgage/i } }
    ]
},
    { "seller_name": 1, "servicer_name": 1 }).sort({ servicer_name: 1 })


