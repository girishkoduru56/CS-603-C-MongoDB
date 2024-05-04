// update_push crud operator

db.podcasts.updateOne(
  {_id: ObjectId("6636a6bb163d2b347df3d845")},
  {$push: {hosts: "Nic Raboy"}}
);