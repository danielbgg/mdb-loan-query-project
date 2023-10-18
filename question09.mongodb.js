use('loan_project');

// Question 9

// Find all the loans where the neither the servicer name or seller name contains the word "mortgage". 
// The seller and servicer names must not be "Other sellers" or "Other servicers"

// Sort by servicer name in ascending order

// Note: You'll need a new index for this sort!

// Which query operator would you use?

db.loans.find({
    $and: [
        { seller_name: { $ne: "Other sellers" } },
        { servicer_name: { $ne: "Other servicers" } },
        { $nor: [{ seller_name: /mortgage/ }, { servicer_name: /mortgage/ }] }]
})


