//nor operator using ListingReviews collection

db.listingsAndReviews.find({$nor: [{amenities:"Coffee maker"},{amenities:"Cooking basics"}]});