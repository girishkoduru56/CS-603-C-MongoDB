// replace one crud operator

db.books.replaceOne(
  {_id: ObjectId("66369e2c163d2b347df3d844")},
  {
    _id: ObjectId("66369e2c163d2b347df3d844"),
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1299-4",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"],
  }
);