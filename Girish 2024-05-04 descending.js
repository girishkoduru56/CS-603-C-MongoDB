// descending

db.listingsAndReviews.find({bed_type: "Real Bed"}).sort({name: -1});