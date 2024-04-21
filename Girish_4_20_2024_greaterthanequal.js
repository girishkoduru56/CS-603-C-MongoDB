//greater than equal to operator in grades collection

db.grades.find({ "products.score": { $gte: 56  } })