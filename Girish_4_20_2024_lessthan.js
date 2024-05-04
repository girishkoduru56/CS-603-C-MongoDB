//less than operator in grades collection

db.grades.find({ "products.score": { $lt: 88  } })