//inserting many documents in grades collection

db.grades.insertMany([
  {
    student_id: 546789,
    products: [
      {
        type: "quiz",
        score: 56,
      },
      {
        type: "homework",
        score: 65,
      },
      {
        type: "quiz",
        score: 66,
      },
      {
        type: "exam",
        score: 96,
      },
    ],
    class_id: 551,
  },
  {
    student_id: 777777,
    products: [
      {
        type: "exam",
        score: 89,
      },
      {
        type: "quiz",
        score: 69,
      },
      {
        type: "quiz",
        score: 92,
      },
      {
        type: "quiz",
        score: 27,
      },
    ],
    class_id: 550,
  },
  {
    student_id: 223344,
    products: [
      {
        type: "exam",
        score: 45,
      },
      {
        type: "homework",
        score: 39,
      },
      {
        type: "quiz",
        score: 40,
      },
      {
        type: "homework",
        score: 88,
      },
    ],
    class_id: 551,
  },
])