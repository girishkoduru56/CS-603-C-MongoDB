// descending_find

db.listingsAndReviews.find({bed_type: "Real Bed"}, {name: -1}).sort({name: -1});
