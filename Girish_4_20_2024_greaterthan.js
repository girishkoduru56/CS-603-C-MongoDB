//greater than operator in grades collection

db.grades.find({ "products.score": { $gt: 49  } })