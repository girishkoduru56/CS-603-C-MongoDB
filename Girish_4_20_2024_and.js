//and operator using ListingReviews collection

db.listingsAndReviews.find({$and: [{amenities:"Coffee maker"},{amenities:"Cooking basics"}]});