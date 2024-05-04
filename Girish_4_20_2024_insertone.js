//inserting one document in grades collection

db.grades.insertOne({
  student_id: 654321,
  products: [
    {
      type: "exam",
      score: 99,
    },
    {
      type: "homework",
      score: 100,
    },
    {
      type: "quiz",
      score: 97,
    },
    {
      type: "homework",
      score: 56,
    },
  ],
  class_id: 1729,
})