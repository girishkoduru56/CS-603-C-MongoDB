//in operator using object id in grades collection

db.grades.find({ _id: { $in: [ObjectId('65ba813f3e7cc28246bb5941'), ObjectId('65ba813f3e7cc28246bb5942')] } })