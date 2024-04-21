//equal operator for element matching on ListingReviews collection

db.listingsAndReviews.find({amenities: {$elemMatch: {$eq: "Pets allowed"}}});