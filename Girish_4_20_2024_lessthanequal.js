//less than equal to operator in grades collection

db.grades.find({ "products.score": { $lte: 77 } })