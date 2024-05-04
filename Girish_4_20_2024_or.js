//or operator using ListingReviews collection

db.listingsAndReviews.find({$or: [{amenities:"Coffee maker"},{amenities:"Cooking basics"}]});