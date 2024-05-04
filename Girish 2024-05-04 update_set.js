// update_set operator

db.podcasts.updateOne(
  {title: "The Developer Hub"},
  {$set: {topics: ["databases", "MongoDB"]}}
);