// limit

db.listingsAndReviews
  .find({bed_type: "Real Bed"}, {property_type: "Apartment"})
  .sort({name: -1})
  .limit(3);