// important topic - indexing in mongodb

use("FSD")

//db.students.find({course:"CSE"}).explain("executionStats")

db.students.createIndex({course:1})

//db.student.find({course:"CSE"}).explain("executionStats")